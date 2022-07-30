import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import { login, reset_register_success } from "../../actions/account";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";



const Login = () => {
  // load states from redux
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.account.loading);
  const isLoggedIn = useSelector((state) => state.account.isLoggedIn);
  const router = useRouter();

  // create login form state
  const [ formData, setFormData ] = useState({
    username: "",
    password: "",
  });

  // destructure login data from state
  const { username, password } = formData;

  useEffect(() => {
    dispatch(reset_register_success());
  }, []);

  // create function to handle input onChange
  const onChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [ e.target.name ]: e.target.value,
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
      dispatch(login(formData));
      setFormData({
        username: "",
        password: "",
      });
    }
  };

  // redirect to dashboard page if user is logged in
  if (isLoggedIn) {
    router.push("/dashboard");
  }

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
            type="password"
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
