import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import { login, reset_register_success } from "../../actions/account";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../styles/Signin.module.css";
import AuthLayout from "../../components/Layouts/AuthLayout";

const Login = () => {
  // load states from redux
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.account.loading);
  const isLoggedIn = useSelector((state) => state.account.isLoggedIn);
  const router = useRouter();

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

  // redirect to dashboard page if user is logged in
  if (isLoggedIn) {
    router.push("/");
  }

  // password toggle visibility
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <AuthLayout>
      <div className={`container ${styles.loginWrapper}`}>
        <div className={styles.A}>
          <div className={styles.top}>
            <Image
              src="/assets/Frame.svg"
              alt="top-line"
              width={630}
              height={850}
            />
            <div className={styles.logo_text}>
              <Image
                className={styles.img}
                src="/assets/auth_wiki.svg"
                alt="logo"
                width={41}
                height={64}
              />

              <h2>Welcome back</h2>
              <p>
                Sign in to get access to all pages, download codes and
                contribute.
              </p>
            </div>
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
              <label className="label" htmlFor="username">
                Username
              </label>
              <input
                type="username"
                value={username}
                name="username"
                onChange={onChange}
                placeholder="Please enter your username"
              />
            </div>
            <div className="form_group">
              <label className="label" htmlFor="password">
                Password
              </label>
              <input
                type={passwordShown ? "text" : "password"}
                value={password}
                name="password"
                onChange={onChange}
                placeholder="Please enter your password"
              />

              <div className="eye_icon">
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
            <div className={styles.checkbox_link}>
              <div className={styles.checkbox}>
                <input type="checkbox" name="remember-me" id="remember-me" />
                <label htmlFor="remember-me">
                  <p>Remember Me</p>
                </label>
              </div>
              <div className={styles.forgot_link}>
                <Link href="/account/forgotPassword">Forgot Password?</Link>
              </div>
            </div>

            <button type="submit" className={styles.signinbtn}>
              {loading ? (
                <ThreeDots color="#FFF" height={40} width={40} />
              ) : (
                "Sign In"
              )}
            </button>
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

            {/* Register? */}
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
