import { useRouter } from "next/router";
import React, { useMemo, useState, createContext } from "react";

export const AuthPageContext = createContext();

function AuthPageContextProvider({ children }) {
  const router = useRouter();
  const { pathname } = router;
  const currentPage = pathname.split("/")[2];
  // console.log(pathname);

  const CONTENT_PER_PAGE = {
    forgotPassword: {
      title: "Reset Password",
      content: "Check your email for link to reset your password",
    },
    auth: {
      title: "Welcome back",
      content:
        "SIgn In to get access to all pages, download codes and contribute.",
    },
    resetpassword: {
      title: "Reset Password",
      content: "Enter new password and confirm it to reset your password.",
    },
  };
  const [LeftPanelContent, setLeftPanelContent] = useState(
    CONTENT_PER_PAGE[currentPage] || {
      title: "No Page",
      content: "No page found for this route",
    }
  );

  const contextValues = useMemo(
    () => ({
      LeftPanelContent,
      setLeftPanelContent,
    }),
    [LeftPanelContent]
  );
  return (
    <AuthPageContext.Provider value={contextValues}>
      {children}
    </AuthPageContext.Provider>
  );
}

export default AuthPageContextProvider;
