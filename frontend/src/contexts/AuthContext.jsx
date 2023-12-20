import { createContext, useState } from "react";

export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("Huy");
  const [cusid, setCusid] = useState();
  const [sTreatmentID, setSTreatmentID] = useState();
  const setCusIDSelectTreatment = (id) => {
    setCusid(id);
  };
  const setTreatmentID = (id) => {
    setSTreatmentID(id);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        cusid,
        setCusIDSelectTreatment,
        sTreatmentID,
        setTreatmentID,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
