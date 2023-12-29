import { createContext, useState } from "react";

export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const [invoiceID,setInvoiceID] = useState();
  const [medicine,setMedicine] = useState([]);
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
  const setInvoiceId=(id)=>{
    setInvoiceID(id)
  }
  const setMedicineId=(id)=>{
    setMedicine(id)
  }

  return (
    <AuthContext.Provider value={{
      user,
      setUser,
      cusid,
      isValid,
      setIsValid,
      setInvoiceId,
      invoiceID,
      medicine,
      setMedicineId,
      setCusIDSelectTreatment,
      appid,
      setAppID,
      sTreatmentID,
       setTreatmentID,
     }}>{children}</AuthContext.Provider>
  );
};
