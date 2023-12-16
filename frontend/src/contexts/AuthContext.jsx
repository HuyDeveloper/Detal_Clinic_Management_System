import { createContext, useState } from "react";

export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("Huy");
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
