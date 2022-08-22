import React, { useContext } from "react";
import PropTypes from "prop-types";
import Footer from "../Footer";
import Styles from "../../styles/AuthLayoutStyles.module.css";
import Logo from "../Logo";
import AuthPageContextProvider, {
  AuthPageContext,
} from "../../contexts/AuthPagesContext";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";

function AuthLayout({ children }) {
  return (
    <AuthPageContextProvider>
      <div className={Styles.authWrapper}>
        <div className={Styles.authCard}>
          <RightImage />
          <main>{children}</main>
        </div>
      </div>
    </AuthPageContextProvider>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

export default AuthLayout;

function RightImage() {
  return (
    <div className={Styles.left_panel}>
      <div className={Styles.left_panel_content}>
        <LayoutGroup>
          <motion.div layout layoutId="logo">
            <Logo />
          </motion.div>
          <PageContent />
        </LayoutGroup>
      </div>
      <div className={Styles.ellipsesWrapper}>
        <Ellipses />
        <Ellipses />
      </div>
    </div>
  );
}

function Ellipses() {
  return (
    <svg
      width="1061"
      height="1063"
      viewBox="0 0 1061 1063"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.15">
        <circle cx="530.5" cy="530.5" r="528" stroke="white" strokeWidth="5" />
        <path
          d="M975.5 530.5C975.5 776.264 776.045 975.5 530 975.5C283.955 975.5 84.5 776.264 84.5 530.5C84.5 284.736 283.955 85.5 530 85.5C776.045 85.5 975.5 284.736 975.5 530.5Z"
          stroke="white"
          strokeWidth="5"
        />
        <path
          d="M903.5 530.5C903.5 737.058 736.275 904.5 530 904.5C323.725 904.5 156.5 737.058 156.5 530.5C156.5 323.942 323.725 156.5 530 156.5C736.275 156.5 903.5 323.942 903.5 530.5Z"
          stroke="white"
          strokeWidth="5"
        />
        <circle cx="530.5" cy="531.5" r="317" stroke="white" strokeWidth="5" />
      </g>
    </svg>
  );
}

function PageContent() {
  const { LeftPanelContent } = useContext(AuthPageContext);
  const { title, content } = LeftPanelContent;
  const wrapper_variant = {
    hidden: "",
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };
  const content_variant = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 1,
      },
    },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        variants={wrapper_variant}
        initial="hidden"
        animate="show"
        exit="hidden"
        key={LeftPanelContent.title}
        className={Styles.left_panel_content_text_wrapper}
      >
        <motion.h2 variants={content_variant}>{title}</motion.h2>
        <motion.p variants={content_variant}>{content}</motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
