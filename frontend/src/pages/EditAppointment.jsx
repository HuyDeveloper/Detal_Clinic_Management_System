import Header from "../components/Header";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
export default function EditAppointment() {
  const [branch, setBranch] = useState([]);
  const [dentist, setDentist] = useState([]);
  const [room, setRoom] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const [selectedDentist, setSelectedDentist] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const { appid } = useContext(AuthContext);
  useEffect(() => {
    axios.get("http://localhost:3000/user/get-all-branch").then((response) => {
      setBranch(response.data.branch);
    });
    axios.get("http://localhost:3000/user/get-all-dentist").then((response) => {
      setDentist(response.data.dentist);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/dental/${selectedBranch}`)
      .then((response) => {
        setRoom(response.data);
      });
  }, [selectedBranch]);

  // Handler khi thay đổi branch
  const handleBranchChange = (event) => {
    console.log(event.target.value);
    setSelectedBranch(event.target.value);
  };
  const handleRoomChange = (event) => {
    console.log(event.target.value);
    setSelectedRoom(event.target.value);
  };

  // Handler khi thay đổi dentist
  const handleDentistChange = (event) => {
    setSelectedDentist(event.target.value);
  };

  // Handler khi thay đổi ngày
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // Handler khi thay đổi giờ
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };
  const navigate = useNavigate();
  const [state, setState] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      appid,
      state: state,
      branch: selectedBranch,
      room: selectedRoom,
      dentist: selectedDentist,
      date: selectedDate,
      time: selectedTime,
    };
    console.log(data);
    axios
      .put("http://localhost:3000/appointment/edit-appointment", data)
      .then((response) => {
        if (response.data.message === "Success") {
          alert("Edit successfully");
          navigate("/all-appointments");
        }
      });
  };

  return (
    <div>
      <Header />
      <form className="container-edit" onSubmit={handleSubmit}>
        <h3>Edit appointment</h3>
        <div>
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="branch">Branch:</label>
          <select id="branch" name="branch" onChange={handleBranchChange}>
            <option value="">Select Branch</option>
            {branch.map((b) => (
              <option key={b.DENTALID} value={b.DENTALID}>
                {b.DENTALNAME}
              </option>
            ))}
          </select>
        </div>

        {room.length > 0 ? (
          <>
            <label htmlFor="room">Room:</label>
            <select id="room" name="room" onChange={handleRoomChange}>
              <option value="">Select room</option>
              {room.map((b) => (
                <option key={b.ROOMID} value={b.ROOMID}>
                  {b.ROOMID}
                </option>
              ))}
            </select>
          </>
        ) : (
          <div>Loading</div>
        )}

        <div>
          <label htmlFor="dentist">Dentist:</label>
          <select id="dentist" name="dentist" onChange={handleDentistChange}>
            <option value="">Select dentist</option>
            {dentist.map((b) => (
              <option key={b.DENTISTID} value={b.DENTISTID}>
                {b.FULLNAME}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={handleDateChange}
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            onChange={handleTimeChange}
          />
        </div>
        <button className="green-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
