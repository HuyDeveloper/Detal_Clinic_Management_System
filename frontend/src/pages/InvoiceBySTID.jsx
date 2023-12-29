import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import "../style/invoice.css"; // Import file CSS nếu bạn lưu kiểu dáng trong file riêng biệt
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function InvoiceBySTID() {
  const [invoiceData, setInvoiceData] = useState([]);
  const [treatmentData, setTreatmentData] = useState([]); // Thêm state để lưu dữ liệu của treatment
  const { sTreatmentID } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/treatment/invoiceByStid/${sTreatmentID}`)
      .then((response) => {
        setInvoiceData(response.data[0]);
      });
    axios
      .get(`http://localhost:3000/treatment/${sTreatmentID}`)
      .then((response) => {
        console.log(response.data[0]);
        setTreatmentData(response.data[0]);
      });
  }, []); // Thêm mảng dependencies để useEffect chỉ chạy một lần khi component được render
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="big-container">
        <div className="plan-container">
          <h2>Treatment Plan</h2>
          <p>Treatment ID: {treatmentData.STID}</p>
          <p>State: {treatmentData.TREATMENTSTATE}</p>
          <p>Treatment title: {treatmentData.TITLE}</p>
          <p>Treatment description: {treatmentData.DESCRIPTION}</p>
          <p>Note: {treatmentData.NOTE}</p>
          <h5>Customer information:</h5>
          <p>Fullname: {treatmentData.FULLNAME}</p>
          <p>Phone: {treatmentData.PHONENUMBER}</p>
          <h5>Dentist information:</h5>
          <p>Fullname: {treatmentData.DENTISTNAME}</p>
          <p>Phone: {treatmentData.DENTISTPHONE}</p>
          <p>National ID: {treatmentData.NATIONALID}</p>
        </div>
        <div className="invoicecontainer">
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
      </div>
    </>
  );
}
