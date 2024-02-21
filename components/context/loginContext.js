import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [isAuthenticated, setIsAuthenticated] = useState(() => {
  //   const storedValue = localStorage.getItem("isAuthenticated");
  //   return storedValue ? JSON.parse(storedValue) : false;
  // });

  // const [userData, setUserData] = useState(() => {
  //   const storedUsedData = localStorage.getItem("userData");
  //   return storedUsedData ? JSON.parse(storedUsedData) : false;
  // });

  // useEffect(() => {
  //   localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  //   localStorage.setItem("userData", JSON.stringify(userData));
  // }, [isAuthenticated]);

  return (
    <AuthContext.Provider
    // value={{ isAuthenticated, setIsAuthenticated, userData, setUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
