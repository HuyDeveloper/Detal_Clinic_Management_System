import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
export default function EditAppointment() {
  const [branch, setBranch] = useState([]);
  const [dentist, setDentist] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedDentist, setSelectedDentist] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/user/get-all-branch").then((response) => {
      setBranch(response.data.branch);
      console.log(response.data.branch);
    });
    axios.get("http://localhost:3000/user/get-all-dentist").then((response) => {
      setDentist(response.data.dentist);
      console.log(response.data.dentist);
    });
  }, []);

  // Handler khi thay đổi branch
  const handleBranchChange = (event) => {
    setSelectedBranch(event.target.value);
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

  return (
    <div>
      <Header />
      <form className="container-edit">
        <h3>Edit appointment</h3>
        <div>
          <label htmlFor="state">State:</label>
          <input type="text" id="state" name="state" />
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
