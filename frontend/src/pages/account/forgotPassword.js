import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/ForgotPwd.module.css";
import { PrimaryButton } from "../../components/utils/Buttons";

const ForgotPassword = () => {
  const [emailInput, setEmailInput] = useState("");
  console.log(emailInput);
  return (
    <div className={`container ${styles.forgotpwdWrapper}`}>
      <div className={styles.forgotpwd_solid}>
        <div className={styles.forgotpwd_solid_top_img}>
          <Image
            src="/assets/topellipse.svg"
            alt="top-line"
            width={300}
            height={300}
          />
        </div>

        <div className={styles.forgotpwd_solid_text}>
          <div className={styles.forgotpwd_top_logo}>
            <Image
              className={styles.img}
              src="/assets/auth_wiki.svg"
              alt="logo"
              width={41}
              height={64}
            />
          </div>
          <h2>Reset Password</h2>
          <p>Enter your email to reset your password</p>
        </div>

        <div className={styles.forgotpwd_solid_bottom_img}>
          <Image
            src="/assets/bottomellipse.svg"
            alt="top-line"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className={styles.forgotpwd_form}>
        <form>
          <div className={styles.forgotpwd_form_input}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </div>
          <PrimaryButton type="submit" className={styles.forgotpwd_form_btn}>
            Email me a recovery link
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
