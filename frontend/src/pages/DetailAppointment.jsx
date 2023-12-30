import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import "../style/detailAppointment.css";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function convertDate(dateString) {
  const convertedDate = new Date(dateString);
  return convertedDate.toLocaleDateString("en-US"); // Chuyển đổi thành "MM/DD/YYYY"
}

function convertTime(dateString) {
  const date = new Date(dateString);
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}
export default function DetailAppointment() {
  const [data, setData] = useState([]);
  const { appid } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/appointment/detail/${appid}`)
      .then((response) => {
        const convertedData = response.data.result.map((item) => ({
          ...item,
          APPDATE: convertDate(item.APPDATE),
          APPTIME: convertTime(item.APPTIME),
          // Thêm các trường chuyển đổi khác nếu cần
        }));
        setData(convertedData[0]);
        console.log(convertedData[0]);
      });
  }, []);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/all-appointments");
  };
  return (
    <div>
      <Header />
      <div className="your-component">
        <div className="info-item">
          <span className="label">APPID:</span>
          <span className="value">{data.APPID}</span>
        </div>
        <div className="info-item">
          <span className="label">DATE:</span>
          <span className="value">{convertDate(data.APPDATE)}</span>
        </div>

        <div className="info-item">
          <span className="label">STATE:</span>
          <span className="value">{data.APPSTATE}</span>
        </div>
        <div className="info-item">
          <span className="label">TIME:</span>
          <span className="value">{data.APPTIME}</span>
        </div>
        <div className="info-item">
          <span className="label">CUSTOMER_NAME:</span>
          <span className="value">{data.CUSTOMER_NAME}</span>
        </div>
        <div className="info-item">
          <span className="label">DENTIST:</span>
          <span className="value">{data.DENTIST_NAME}</span>
        </div>
        <div className="info-item">
          <span className="label">DENTAL_CLINIC:</span>
          <span className="value">{data.DENTAL_CLINIC_NAME}</span>
        </div>
        <div className="info-item">
          <span className="label">ROOM:</span>
          <span className="value">{data.ROOMID}</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            className="green-button"
            style={{ width: "350px" }}
            onClick={handleClick}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
