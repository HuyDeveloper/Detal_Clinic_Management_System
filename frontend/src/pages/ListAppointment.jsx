import { useContext, useEffect, useState } from "react";
import "../App.css";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import DatePicker from "react-datepicker";
function convertDate(dateString) {
  const convertedDate = new Date(dateString);
  return convertedDate.toLocaleDateString("en-US"); // Chuyển đổi thành "MM/DD/YYYY"
}
export default function ListAppointment() {
  const [data, setData] = useState([]);
  const { setAppID } = useContext(AuthContext);
  const navigate = useNavigate();
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
        setData(convertedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      });
  }, []);

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

  const handleEdit = (id) => {
    setAppID(id);
    navigate("/all-appointments/edit");
  };

  const handleViewDetail = (id) => {
    setAppID(id);
    navigate("/all-appointments/detail");
  };
  const [filterType, setFilterType] = useState("name");
  const [filterValue, setFilterValue] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleTypeChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleValueChange = (event) => {
    setFilterValue(event.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const filterUsers = () => {
    // Áp dụng logic lọc dựa trên filterType và filterValue
    // ...
    if (filterType === "name") {
      axios
        .get("http://localhost:3000/appointment/searchByCustomer", {
          params: {
            name: filterValue,
          },
        })
        .then((response) => {
          const convertedData = response.data.map((item) => ({
            ...item,
            APPDATE: convertDate(item.APPDATE),
            APPTIME: convertTime(item.APPTIME),
            // Thêm các trường chuyển đổi khác nếu cần
          }));
          setData(convertedData);
        });
    } else if (filterType === "date") {
      axios
        .get("http://localhost:3000/appointment/searchByDate", {
          params: {
            date: selectedDate,
          },
        })
        .then((response) => {
          const convertedData = response.data.map((item) => ({
            ...item,
            APPDATE: convertDate(item.APPDATE),
            APPTIME: convertTime(item.APPTIME),
            // Thêm các trường chuyển đổi khác nếu cần
          }));
          setData(convertedData);
        });
    } else if (filterType === "dentist") {
      axios
        .get("http://localhost:3000/appointment/searchByDentist", {
          params: {
            name: filterValue,
          },
        })
        .then((response) => {
          const convertedData = response.data.map((item) => ({
            ...item,
            APPDATE: convertDate(item.APPDATE),
            APPTIME: convertTime(item.APPTIME),
            // Thêm các trường chuyển đổi khác nếu cần
          }));
          setData(convertedData);
        });
    } else if (filterType === "room") {
      axios
        .get("http://localhost:3000/appointment/searchByDentalClinic", {
          params: {
            name: filterValue,
          },
        })
        .then((response) => {
          const convertedData = response.data.map((item) => ({
            ...item,
            APPDATE: convertDate(item.APPDATE),
            APPTIME: convertTime(item.APPTIME),
            // Thêm các trường chuyển đổi khác nếu cần
          }));
          setData(convertedData);
        });
    }
  };
  return (
    <div>
      <Header />
      <h3>Appointments</h3>
      <div>
        <div>
          <label htmlFor="filterType">Filter Type:</label>
          <select
            id="filterType"
            value={filterType}
            onChange={handleTypeChange}
          >
            <option value="name">Name</option>
            <option value="date">Date</option>
            <option value="dentist">Dentist</option>
            <option value="room">Room</option>
          </select>
        </div>
        {filterType === "date" && (
          <div>
            <label htmlFor="datePicker">Select Date:</label>
            {/* <DatePicker
              id="datePicker"
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              isClearable
            /> */}
            <input
              type="date"
              id="datePicker"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>
        )}
        {(filterType === "name" ||
          filterType === "dentist" ||
          filterType === "room") && (
          <div>
            <label htmlFor="filterValue">Filter Value:</label>
            <input
              type="text"
              id="filterValue"
              value={filterValue}
              onChange={handleValueChange}
            />
          </div>
        )}
        <button onClick={filterUsers}>Apply Filters</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TIME</th>
              <th>STATE</th>
              <th>CUSTOMER</th>
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
                <td>
                  <button
                    className="yellow-button"
                    onClick={() => handleViewDetail(item.APPID)}
                  >
                    Detail
                  </button>
                  <button
                    className="gray-button"
                    onClick={() => handleEdit(item.APPID)}
                  >
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
