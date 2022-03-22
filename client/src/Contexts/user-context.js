import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
export const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    if (localStorage.token) {
      const token = localStorage.getItem("token");
      const decoded = jwt_decode(token);
      setUser({ ...decoded.user });
    }
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
