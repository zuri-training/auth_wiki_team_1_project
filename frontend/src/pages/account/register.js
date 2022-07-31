import React from "react";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../actions/account";
import { PrimaryButton } from "../../components/utils/Buttons";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password1: "",
    password2: "",
  });

  // load states from redux
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.account.loading);
  const register_success = useSelector(
    (state) => state.account.register_success
  );
  const isLoggedIn = useSelector((state) => state.account.isLoggedIn);
  const router = useRouter();

  // destructure register data from state
  const { username, password1, password2, email, first_name, last_name } =
    formData;

  // create function to handle input onChange
  const onChange = (event) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (password1 !== password2) {
      toast.error("Please ensure that passwords match");
      return;
    } else if (
      !username ||
      !password1 ||
      !password2 ||
      !email ||
      !first_name ||
      !last_name
    ) {
      toast.error("Please complete all fields");
      return;
    }

    dispatch(register(formData));
  };

  // redirect to dashboard page if user is logged in
  if (isLoggedIn) {
    router.push("/dashboard");
  }

  // if register success, redirect to login page
  if (register_success) {
    router.push("/account/login");
  }

  return (
    <div>
      <h2>Welcome to the Register page</h2>

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
            type="password"
            value={password1}
            name="password1"
            onChange={onChange}
          />
        </div>
        <div className="form_group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
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

        <PrimaryButton type="submit">
          {loading ? (
            <ThreeDots color="#FFF" height={40} width={40} />
          ) : (
            "Register"
          )}
        </PrimaryButton>
      </form>
    </div>
  );
};

export default Register;
