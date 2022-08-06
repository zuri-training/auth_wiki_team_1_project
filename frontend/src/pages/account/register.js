import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../actions/account";
import { PrimaryButton } from "../../components/utils/Buttons";
import styles from "../../styles/Signup.module.css";

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

  // password toggle visibility
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className={styles.container}>
      <div className={styles.A}>
        <div className={styles.top}>
          <Image
            src="/assets/topellipse.svg"
            alt="top-line"
            width={580}
            height={450}
          />
        </div>
        <div className={styles.logo_text}>
          <Image
            className={styles.img}
            src="/assets/auth_wiki.svg"
            alt="logo"
            width={41}
            height={64}
          />

          <h2>Welcome</h2>
          <p>
            Get access to various Authentication codes, download codes and enjoy
            all benefits as a user.
          </p>
        </div>
        <div className={styles.bottom}>
          <Image
            src="/assets/bottom ellipse.svg"
            alt="top-line"
            width={330}
            height={450}
          />
        </div>
      </div>

      <div className={styles.B}>
        <header className={styles.links}>
          {/* Signin Link */}
          <div className={`${styles.sign_link} ${styles.signin}`}>
            <h3>
              <Link href="/account/login">Sign In</Link>
            </h3>
            <div className={styles.underline}></div>
          </div>

          {/* signup link */}
          <div className={`${styles.sign_link} ${styles.signup}`}>
            <h3>
              <Link href="/account/register">Sign Up</Link>
            </h3>
            <div className={styles.underline}></div>
          </div>
        </header>
        <form onSubmit={onSubmit}>
          <div className="form_group">
            <label htmlFor="username" className={styles.label}>
              Username
            </label>
            <input
              type="text"
              value={username}
              name="username"
              onChange={onChange}
              placeholder="Please enter your username"
              className={styles.input}
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="first_name" className={styles.label}>
              First Name
            </label>
            <input
              type="text"
              value={first_name}
              name="first_name"
              onChange={onChange}
              placeholder="Please enter your first name"
              className={styles.input}
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="last_name" className={styles.label}>
              Last Name
            </label>
            <input
              type="text"
              value={last_name}
              name="last_name"
              onChange={onChange}
              placeholder="Please enter your last name"
              className={styles.input}
            />
          </div>

          <div className={styles.form_group}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              value={email}
              name="email"
              onChange={onChange}
              placeholder="Please enter your email"
              className={styles.input}
            />
          </div>

          <div className={styles.form_group}>
            <label htmlFor="password1" className={styles.label}>
              Password
            </label>
            <input
              type={passwordShown ? "text" : "password"}
              value={password1}
              name="password1"
              onChange={onChange}
              placeholder="Please enter your password"
              className={styles.input}
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
          <div className={styles.form_group}>
            <label htmlFor="password2" className={styles.label}>
              Confirm Password
            </label>
            <input
              type={passwordShown ? "text" : "password"}
              value={password2}
              name="password2"
              onChange={onChange}
              placeholder="Please confirm your password"
              className={styles.input}
            />
          </div>

          <PrimaryButton type="submit" className={styles.signupbtn}>
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
    </div>
  );
};

export default Register;
