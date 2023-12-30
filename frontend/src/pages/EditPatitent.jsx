import { useContext, useState } from "react";
import "../style/editpatient.css";
import Header from "../components/Header";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function EditPatitent() {
  const { cusid } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    cusid: cusid,
    fullname: "",
    address: "",
    phonenumber: "",
    dob: "",
  });
  const [gender, setGender] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle special case for the "gender" field
    if (name === "gender") {
      setFormData({
        ...formData,
        gender: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    axios
      .put("http://localhost:3000/user/edit-patient", {
        ...formData,
        gender
      })
      .then((response) => {
        if (response.data.status === "Success") {
          alert("Form data submitted");
          navigate("/all-patients");
        }
      });
  };

  return (
    <>
      <Header />
      <div className="container">
        <h2>User Information Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullname">Fullname:</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="input-field"
          />

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="input-field"
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phonenumber"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
            className="input-field"
          />

<label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="input-field"
          >
            <option value="">Select Gender</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="OTHER">Other</option>
          </select>

          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="input-field"
          />

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
