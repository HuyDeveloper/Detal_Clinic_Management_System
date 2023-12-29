import { useEffect, useState,useContext } from "react";
import "../App.css";
import DateFilterComponent from "../components/DateFilterComponent";
import Header from "../components/Header";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function convertDate(dateString) {
  const convertedDate = new Date(dateString);
  return convertedDate.toLocaleDateString("en-US"); // Chuyển đổi thành "MM/DD/YYYY"
}
export default function ListInvoice() {
    const{setInvoiceId}=useContext(AuthContext);
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
      .get("http://localhost:3000/invoice")
      .then((response) => {
        console.log(response.data);
        //Chuyển đổi dữ liệu trước khi cập nhật state
        const convertedData = response.data.listInvoice.map((item) => ({
          ...item,
          PAIDTIME: convertTime(item.PAIDTIME),
          TIMEOFREEX: convertDate(item.TIMEOFREEX),
          // Thêm các trường chuyển đổi khác nếu cần
        }));

        console.log(convertedData);
        setData(convertedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      });
  }, []);

 
  const handleView = (id) => {
    setInvoiceId(id)
    navigate("/invoice/detail");
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
              <th>PAIDTIME</th>
              <th>TIMEOFREEX</th>
              <th>CUSTOMER</th>

            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.INVOICEID}>
                <td>{item.INVOICEID}</td>
                <td>{item.PAIDTIME}</td>
                <td>{item.TIMEOFREEX}</td>
                <td>{item.FULLNAME}</td>

                <td>
                  <button className="gray-button" onClick={()=>handleView(item.INVOICEID)}>
                    View
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
