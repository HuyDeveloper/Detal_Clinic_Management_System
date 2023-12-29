import { createContext, useState } from "react";

export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const [invoiceID,setInvoiceID] = useState();
  const [medicine,setMedicine] = useState([]);
  const setInvoiceId=(id)=>{
    setInvoiceID(id)
  }
  const setMedicineId=(id)=>{
    setMedicine(id)
  }

  return (
    <AuthContext.Provider value={{ user,
      setUser,
      isValid,
      setIsValid,
      setInvoiceId,
      invoiceID,
      medicine,
      setMedicineId,
     }}>{children}</AuthContext.Provider>
  );
};
