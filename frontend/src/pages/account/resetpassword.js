import { useContext, useState, useCallback } from "react";
import Image from "next/image";
import styles from "../../styles/ForgotPwd.module.css";
import { PrimaryButton } from "../../components/utils/Buttons";
import AuthLayout from "../../components/Layouts/AuthLayout";
import { LayoutGroup, motion } from "framer-motion";

import { ToastContainer, toast } from "react-toastify";

const ForgotPassword = () => {
  return (
    <AuthLayout>
      <Main />
    </AuthLayout>
  );
};

export default ForgotPassword;

function Main() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  // destructure login data from state
  const { password, confirmPassword } = formData;

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const toggleConfirmPassword = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const onChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className={`container ${styles.forgotpwdWrapper}`}>
      <div className={styles.forgotpwd_form}>
        <form onSubmit={(e) => e.preventDefault()}>
          <LayoutGroup>
            <motion.div
              layout="position"
              className={styles.forgotpwd_form_input}
            >
              <label htmlFor="password"> Password</label>
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Please enter your password"
                value={password}
                onChange={onChange}
                name="password"
              />
              <span className={styles.eye_icon}>
                <Image
                  onClick={togglePassword}
                  src="/assets/eye.svg"
                  alt="eye-icon"
                  width={20}
                  height={20}
                />
              </span>
            </motion.div>
            <motion.div
              layout="position"
              className={styles.forgotpwd_form_input}
            >
              <label htmlFor="password">Confirm Password</label>
              <input
                type={confirmPasswordShown ? "text" : "password"}
                placeholder="Please confirm your password"
                value={confirmPassword}
                onChange={onChange}
                name="confirmPassword"
              />
              <span className={styles.eye_icon}>
                <Image
                  onClick={toggleConfirmPassword}
                  src="/assets/eye.svg"
                  alt="eye-icon"
                  width={20}
                  height={20}
                />
              </span>
            </motion.div>

            <motion.div layout="position">
              <PrimaryButton
                type="submit"
                // onClick={handleRequest}
                className={styles.forgotpwd_form_btn}
              >
                Change Password
              </PrimaryButton>
            </motion.div>
          </LayoutGroup>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
