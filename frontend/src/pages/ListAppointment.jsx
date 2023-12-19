import { useEffect, useState } from "react";
import "../App.css";
import DateFilterComponent from "../components/DateFilterComponent";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function convertDate(dateString) {
  const convertedDate = new Date(dateString);
  return convertedDate.toLocaleDateString("en-US"); // Chuyển đổi thành "MM/DD/YYYY"
}
export default function ListAppointment() {
  const [data, setData] = useState([]);
  const dateString = "2022-12-12T00:00:00.000Z";
  const convertedDate = new Date(dateString);
  const navigate = useNavigate();
  console.log(convertedDate);
  function convertTime(dateString) {
    const date = new Date(dateString);
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  useEffect(() => {
    axios
      .get("http://localhost:3000/appointment/all")
      .then((response) => {
        // Chuyển đổi dữ liệu trước khi cập nhật state
        const convertedData = response.data.result.map((item) => ({
          ...item,
          APPDATE: convertDate(item.APPDATE),
          APPTIME: convertTime(item.APPTIME),
          // Thêm các trường chuyển đổi khác nếu cần
        }));

        console.log(convertedData);
        setData(convertedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      });
  }, [data]);

  const deleteAppointment = (id) => {
    axios
      .delete(`http://localhost:3000/appointment/${id}`)
      .then((response) => {
        console.log(response);
        setData(data.filter((item) => item.APPID !== id));
      })
      .catch((error) => {
        console.error("Error deleting data:", error.message);
      });
  };

  const handleEdit = () => {
    navigate("/all-appointments/edit");
  };
  return (
    <div>
      <Header />
      <h3>Appointments</h3>
      <DateFilterComponent />
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TIME</th>
              <th>STATE</th>
              <th>CUSTOMER</th>
              <th>DENTIST</th>
              <th>ROOM</th>
              <th>DENTAL</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.APPID}>
                <td>{item.APPID}</td>
                <td>{item.APPDATE}</td>
                <td>{item.APPTIME}</td>
                <td>{item.APPSTATE}</td>
                <td>{item.CUSTOMER_NAME}</td>
                <td>{item.DENTIST_NAME}</td>
                <td>{item.ROOMID}</td>
                <td>{item.DENTALNAME}</td>
                <td>
                  <button className="gray-button" onClick={handleEdit}>
                    Edit
                  </button>
                  <button
                    className="red-button"
                    onClick={() => deleteAppointment(item.APPID)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
