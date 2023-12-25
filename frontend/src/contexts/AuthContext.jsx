import { createContext, useState } from "react";

export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("Huy");
  const [cusid, setCusid] = useState();
  const [sTreatmentID, setSTreatmentID] = useState();
  const [appid, setAppid] = useState();
  const setCusIDSelectTreatment = (id) => {
    setCusid(id);
  };
  const setTreatmentID = (id) => {
    setSTreatmentID(id);
  };
  const setAppID = (id) => {
    setAppid(id);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        cusid,
        appid,
        setAppID,
        setCusIDSelectTreatment,
        sTreatmentID,
        setTreatmentID,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
