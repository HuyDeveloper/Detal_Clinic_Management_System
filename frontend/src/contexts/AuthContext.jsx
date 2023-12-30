import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [cusid, setCusid] = useState();
  const [isValid, setIsValid] = useState(false);
  const [invoiceID,setInvoiceID] = useState();
  const [medicine,setMedicine] = useState([]);
  const [sTreatmentID, setSTreatmentID] = useState();
  const [appid, setAppid] = useState();
  const [treatment,setTreatment] = useState([]);

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
  const setTreatmentId=(id)=>{
    setTreatment(id)
  }
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
      setIsValid(true);
    }
  },[])

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
       setTreatmentId,
       treatment,
     }}>{children}</AuthContext.Provider>
  );
};
