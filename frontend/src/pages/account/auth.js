import React from "react";
import AuthLayout from "../../components/Layouts/AuthLayout";
import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import { login, reset_register_success } from "../../actions/account";
import { useRouter } from "next/router";
import { register } from "../../actions/account";
import { useSelector, useDispatch } from "react-redux";
import stylesSignin from "../../styles/Signin.module.css";
import stylesSignup from "../../styles/Signup.module.css";
import { PrimaryButton } from "../../components/utils/Buttons";
import Styles from "../../styles/AuthPage.module.css";
import { AuthPageContext } from "../../contexts/AuthPagesContext";

function auth() {
  return (
    <AuthLayout>
      <Main />
    </AuthLayout>
  );
}

export default auth;

function Main() {
  const [view, setView] = useState("signin");
  const { setLeftPanelContent } = useContext(AuthPageContext);
  const router = useRouter();
  const { isLoggedIn, register_success } = useSelector(
    (state) => state.account
  );

  // redirect to home page if user is logged in
  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    } else if (register_success) {
      setView("signin");
    }
  }, [isLoggedIn, register_success]);

  return (
    <div className={Styles.authWrapper}>
      <div className={Styles.authContainer}>
        <header className={Styles.authViewControl}>
          {/* Signin Link */}
          <div
            onClick={() => {
              setView("signin");
              setLeftPanelContent({
                title: "Welcome back",
                content:
                  "SIgn In to get access to all pages, download codes and contribute.",
              });
            }}
            className={view === "signin" ? Styles.active : ""}
          >
            <h3>Sign In</h3>
          </div>

          {/* signup link */}
          <div
            onClick={() => {
              setView("signup");
              setLeftPanelContent({
                title: "Welcome",
                content:
                  "Get access to various Authentication codes, download codes and enjoy all benefits as a user.",
              });
            }}
            className={view === "signup" ? Styles.active : ""}
          >
            <h3>Sign Up</h3>
          </div>
        </header>
        {view === "signin" ? (
          <Signin view={view} setView={setView} />
        ) : (
          <SignUp view={view} setView={setView} />
        )}
      </div>
    </div>
  );
}

function Signin() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.account.loading);

  // create login form state
  const [formData, setFormData] = useState({
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
      dispatch(login(formData));
      setFormData({
        username: "",
        password: "",
      });
    }
  };

  // password toggle visibility
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className={stylesSignin.form_group}>
          <label className="label" htmlFor="username">
            Username
          </label>
          <div className={stylesSignin.form_group_input_wrapper}>
            <input
              type="text"
              value={username}
              name="username"
              onChange={onChange}
              placeholder="Please enter your username"
            />
          </div>
        </div>
        <div className={stylesSignin.form_group}>
          <label className="label" htmlFor="password">
            Password
          </label>
          <div className={stylesSignin.form_group_input_wrapper}>
            <input
              type={passwordShown ? "text" : "password"}
              value={password}
              name="password"
              onChange={onChange}
              placeholder="Please enter your password"
            />

            <Image
              onClick={togglePassword}
              src="/assets/eye.svg"
              alt="eye-icon"
              width={24}
              height={24}
              // className={styles.eye_icon}
            />
          </div>
        </div>
        <div className={stylesSignin.checkbox_link}>
          <div className={stylesSignin.checkbox}>
            <input type="checkbox" name="remember-me" id="remember-me" />
            <label htmlFor="remember-me">
              <p>Remember Me</p>
            </label>
          </div>
          <div className={stylesSignin.forgot_link}>
            <p>
              <Link href="/account/forgotPassword">Forgot Password?</Link>
            </p>
          </div>
        </div>

        <button type="submit" className={stylesSignin.signinbtn}>
          {loading ? (
            <ThreeDots color="#FFF" height={40} width={40} />
          ) : (
            "Sign In"
          )}
        </button>
      </form>
    </div>
  );
}

function SignUp() {
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

  // password toggle visibility
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <div className={stylesSignup.B}>
      <form onSubmit={onSubmit}>
        <div className={stylesSignup.form_group}>
          <label htmlFor="username" className={stylesSignup.label}>
            Username
          </label>
          <input
            type="text"
            value={username}
            name="username"
            onChange={onChange}
            placeholder="Please enter your username"
            className={stylesSignup.input}
          />
        </div>
        <div className={stylesSignup.form_group}>
          <label htmlFor="first_name" className={stylesSignup.label}>
            First Name
          </label>
          <input
            type="text"
            value={first_name}
            name="first_name"
            onChange={onChange}
            placeholder="Please enter your first name"
            className={stylesSignup.input}
          />
        </div>
        <div className={stylesSignup.form_group}>
          <label htmlFor="last_name" className={stylesSignup.label}>
            Last Name
          </label>
          <input
            type="text"
            value={last_name}
            name="last_name"
            onChange={onChange}
            placeholder="Please enter your last name"
            className={stylesSignup.input}
          />
        </div>

        <div className={stylesSignup.form_group}>
          <label htmlFor="email" className={stylesSignup.label}>
            Email
          </label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={onChange}
            placeholder="Please enter your email"
            className={stylesSignup.input}
          />
        </div>

        <div className={stylesSignup.form_group}>
          <label htmlFor="password1" className={stylesSignup.label}>
            Password
          </label>
          <input
            type={passwordShown ? "text" : "password"}
            value={password1}
            name="password1"
            onChange={onChange}
            placeholder="Please enter your password"
            className={stylesSignup.input}
          />
          <div className="eye_icon">
            <Image
              onClick={togglePassword}
              src="/assets/eye.svg"
              alt="eye-icon"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className={stylesSignup.form_group}>
          <label htmlFor="password2" className={stylesSignup.label}>
            Confirm Password
          </label>
          <input
            type={passwordShown ? "text" : "password"}
            value={password2}
            name="password2"
            onChange={onChange}
            placeholder="Please confirm your password"
            className={stylesSignup.input}
          />
        </div>

        <PrimaryButton type="submit" className={stylesSignup.signupbtn}>
          {loading ? (
            <ThreeDots color="#FFF" height={40} width={40} />
          ) : (
            "Sign Up"
          )}
        </PrimaryButton>
        {/* <h5 className={styles.or_text}>OR</h5>
            <div className="github_btn">
              <button className="github-accnt">
                <Image
                  src="/assets/Github.svg"
                  alt="github_logo"
                  width={24}
                  height={24}
                />
                <h6 className={styles.git_text}>Continue with Github</h6>
              </button>
            </div> */}
      </form>
    </div>
  );
}
