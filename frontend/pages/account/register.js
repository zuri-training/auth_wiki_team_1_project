import React from "react";
import { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import AuthContext from "../../context/AuthContext";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password1: "",
    password2: "",
    email: "",
    first_name: "",
    last_name: "",
  });

  // extract login function from context
  const { register, loading } = useContext(AuthContext);

  // destructure login data from state
  const { username, password1, password2, email, first_name, last_name } =
    formData;

  // create function to handle input onChange
  const onChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      toast.error("Please ensure that passwords match");
      return;
    } else if (
      !username ||
      !password1 ||
      password2 ||
      !email ||
      !first_name ||
      !last_name
    ) {
      toast.error("Please complete all fields");
      return;
    }
    register(formData);
  };
  return (
    <div>
      <h2>Welcome to the login page</h2>

      <form onSubmit={onSubmit}>
        <div className="form_group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            name="username"
            onChange={onChange}
          />
        </div>
        <div className="form_group">
          <label htmlFor="password1">Password</label>
          <input
            type="text"
            value={password1}
            name="password1"
            onChange={onChange}
          />
        </div>
        <div className="form_group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="text"
            value={password2}
            name="password2"
            onChange={onChange}
          />
        </div>
        <div className="form_group">
          <label htmlFor="email">Email</label>
          <input type="email" value={email} name="email" onChange={onChange} />
        </div>
        <div className="form_group">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            value={first_name}
            name="first_name"
            onChange={onChange}
          />
        </div>
        <div className="form_group">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            value={last_name}
            name="last_name"
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn">
          {loading ? (
            <ThreeDots color="#FFF" height={40} width={40} />
          ) : (
            "Register"
          )}
        </button>
      </form>
    </div>
  );
};

export default Register;
