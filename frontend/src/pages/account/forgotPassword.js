import { useContext, useState, useCallback } from "react";
import Image from "next/image";
import styles from "../../styles/ForgotPwd.module.css";
import { PrimaryButton } from "../../components/utils/Buttons";
import AuthLayout from "../../components/Layouts/AuthLayout";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { AuthPageContext } from "../../contexts/AuthPagesContext";
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
  const [emailInput, setEmailInput] = useState("");
  const [requestStatus, setRequestStatus] = useState("idle");
  const { setLeftPanelContent } = useContext(AuthPageContext);
  const handleRequest = useCallback(async () => {
    setRequestStatus("loading");
    //   make api request to backend
    try {
      const res = await fetch("/api/auth/request-reset-email/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailInput }),
      });
      if (res.ok) {
        setLeftPanelContent({
          title: "Email Sent!",
          content: "Password reset link sent",
        });

        toast.success("Email sent succesfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          draggable: true,
        });
        const data = await res.json();
        setRequestStatus("success");
        setTimeout(() => {
          setRequestStatus("idle");
        }, 2000);
      } else throw "error";
    } catch (error) {
      setRequestStatus("idle");
    }

    //   setTimeout(() => {
    //     setRequestStatus("success");

    //     setTimeout(() => {
    //       setRequestStatus("idle");
    //     }, 3000);
    //   }, 3000);
  }, [emailInput]);

  return (
    <div className={`container ${styles.forgotpwdWrapper}`}>
      <div className={styles.forgotpwd_form}>
        <form onSubmit={(e) => e.preventDefault()}>
          <LayoutGroup>
            <motion.div
              layout="position"
              className={styles.forgotpwd_form_input}
            >
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </motion.div>
            <AnimatePresence>
              {/* we only want this to come out when user makes a request */}
              {requestStatus !== "idle" && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ opacity: { delay: 0.5 } }}
                  className={styles.loaderWrapper}
                >
                  <AnimatePresence exitBeforeEnter>
                    {requestStatus === "loading" ? (
                      <Loading key="loading" />
                    ) : (
                      requestStatus === "success" && <Success key="success" />
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div layout="position">
              <PrimaryButton
                type="submit"
                onClick={handleRequest}
                className={styles.forgotpwd_form_btn}
              >
                Email me a recovery link
              </PrimaryButton>
            </motion.div>
          </LayoutGroup>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

function Loading() {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        rotate: 360,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
        opacity: { duration: 0.4, delay: 0.5 },
        ease: "easeOut",
        type: "tween",
      }}
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.0003 64.1667C38.222 64.1667 40.8337 61.555 40.8337 58.3333C40.8337 55.1117 38.222 52.5 35.0003 52.5C31.7787 52.5 29.167 55.1117 29.167 58.3333C29.167 61.555 31.7787 64.1667 35.0003 64.1667Z"
        fill="#575757"
      />
      <path
        d="M35.0003 17.5002C38.222 17.5002 40.8337 14.8885 40.8337 11.6668C40.8337 8.44517 38.222 5.8335 35.0003 5.8335C31.7787 5.8335 29.167 8.44517 29.167 11.6668C29.167 14.8885 31.7787 17.5002 35.0003 17.5002Z"
        fill="#575757"
      />
      <path
        d="M18.5003 57.3327C21.722 57.3327 24.3337 54.721 24.3337 51.4993C24.3337 48.2777 21.722 45.666 18.5003 45.666C15.2787 45.666 12.667 48.2777 12.667 51.4993C12.667 54.721 15.2787 57.3327 18.5003 57.3327Z"
        fill="#575757"
      />
      <path
        d="M51.4993 24.3337C54.721 24.3337 57.3327 21.722 57.3327 18.5003C57.3327 15.2787 54.721 12.667 51.4993 12.667C48.2777 12.667 45.666 15.2787 45.666 18.5003C45.666 21.722 48.2777 24.3337 51.4993 24.3337Z"
        fill="#575757"
      />
      <path
        d="M11.6663 40.8361C14.8896 40.8361 17.5026 38.2231 17.5026 34.9998C17.5026 31.7766 14.8896 29.1636 11.6663 29.1636C8.44306 29.1636 5.83008 31.7766 5.83008 34.9998C5.83008 38.2231 8.44306 40.8361 11.6663 40.8361Z"
        fill="#575757"
      />
      <path
        d="M58.3333 40.8332C61.555 40.8332 64.1667 38.2215 64.1667 34.9998C64.1667 31.7782 61.555 29.1665 58.3333 29.1665C55.1117 29.1665 52.5 31.7782 52.5 34.9998C52.5 38.2215 55.1117 40.8332 58.3333 40.8332Z"
        fill="#575757"
      />
      <path
        d="M18.5003 24.3366C21.722 24.3366 24.3337 21.7249 24.3337 18.5033C24.3337 15.2816 21.722 12.6699 18.5003 12.6699C15.2787 12.6699 12.667 15.2816 12.667 18.5033C12.667 21.7249 15.2787 24.3366 18.5003 24.3366Z"
        fill="#575757"
      />
      <path
        d="M51.4993 57.3356C54.721 57.3356 57.3327 54.7239 57.3327 51.5023C57.3327 48.2806 54.721 45.6689 51.4993 45.6689C48.2777 45.6689 45.666 48.2806 45.666 51.5023C45.666 54.7239 48.2777 57.3356 51.4993 57.3356Z"
        fill="#575757"
      />
    </motion.svg>
  );
}

function Success() {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "tween",
        duration: 0.4,
      }}
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M63.2435 3.38431C61.4497 1.62798 58.5004 1.93881 57.1122 4.03047L30.6071 43.9673C29.1492 46.164 26.0018 46.374 24.2649 44.3904L11.7604 30.1099C10.1665 28.2896 7.33404 28.2901 5.74078 30.111L2.30476 34.0379C0.985174 35.546 0.985175 37.7978 2.30477 39.3059L25.7557 66.107C27.4795 68.0771 30.5998 67.8877 32.0728 65.7236L68.1167 12.767C69.2066 11.1657 68.9925 9.01349 67.6084 7.65828L63.2435 3.38431Z"
        fill="#1CC94C"
      />
    </motion.svg>
  );
}
