import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
// import Link from "next/link";
import AuthContext from "../../context/AuthContext";

const Login = () => {
  // create login form state
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // extract login function from context
  const { login, loading } = useContext(AuthContext);

  // destructure login data from state
  const { username, password } = formData;

  // create function to handle input onChange
  const onChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  // create form submit handler function
  const onSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      toast.error("Please provide all fields");
      return;
    } else {
      login(formData);
      setFormData({
        username: "",
        password: "",
      });
    }
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
          <label htmlFor="password">Password</label>
          <input
            type="text"
            value={password}
            name="password"
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn">
          {loading ? (
            <ThreeDots color="#FFF" height={40} width={40} />
          ) : (
            "Login"
          )}
        </button>

        {/* Register? */}
      </form>
    </div>
  );
};

export default Login;
