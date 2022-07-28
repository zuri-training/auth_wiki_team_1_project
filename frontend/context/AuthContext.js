import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { AUTH_URL } from "../config/index";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // create authentication states
  const [user, setUser] = useState(null);
  const [userTokens, setUserTokens] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // create login handler
  const login = async ({ username, password }) => {
    setLoading(true);
    const res = await fetch(`${AUTH_URL}/api/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setLoading(false);
      localStorage.setItem("tokens", JSON.stringify(data));
      router.push("/library");
      console.log(data);
    } else {
      setLoading(false);
      toast.error(data.detail);
      return;
    }
  };

  //create register handler
  const register = async (userData) => {
    console.log(userData);
  };

  return (
    <AuthContext.Provider value={{ user, error, loading, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
