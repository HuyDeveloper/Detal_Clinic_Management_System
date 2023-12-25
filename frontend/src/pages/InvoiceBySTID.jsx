import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import "../style/invoice.css"; // Import file CSS nếu bạn lưu kiểu dáng trong file riêng biệt
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function InvoiceBySTID() {
  const [invoiceData, setInvoiceData] = useState([]);
  const { sTreatmentID } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/treatment/invoiceByStid/${sTreatmentID}`)
      .then((response) => {
        setInvoiceData(response.data[0]);
      });
  }, []); // Thêm mảng dependencies để useEffect chỉ chạy một lần khi component được render
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="invoice-container">
        <div className="invoice-info">
          <h2>Invoice Information</h2>
          <p>Invoice ID: {invoiceData.INVOICEID}</p>
          <p>Mode: {invoiceData.MODE}</p>
          <p>Note: {invoiceData.NOTE}</p>
          <p>Paid: {invoiceData.PAID}</p>
          <p>Paid Time: {invoiceData.PAIDTIME}</p>
          <p>Total Price: {invoiceData.TOTALPRICE}</p>
          <p>Total Price Medicine: {invoiceData.TOTALPRICEMEDICINE}</p>
          <p>Total Tooth Price: {invoiceData.TOTALTOOTHPRICE}</p>
        </div>
        <button
          style={{
            color: "green",
            width: "100%",
            borderRadius: "10px",
            marginTop: "10px",
          }}
          onClick={() => {
            navigate("/all-patients");
          }}
        >
          Back to home
        </button>
      </div>
    </>
  );
}
