// CreateUser.jsx
import Header from "../components/Header";
import { useState } from "react";
import "../style/createUser.css"; // Import the CSS file for styling
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const [formData, setFormData] = useState({
    fullname: "",
    nationalid: "",
    address: "",
    phonenumber: "",
    usertype: "",
    gender: "",
    username: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, e.g., send data to the server
    console.log("Form submitted:", formData);
    axios
      .post("http://localhost:3000/user/create-staff-dentist", formData)
      .then((res) => {
        if (res.data.message === "Success") {
          alert("User created successfully");
          navigate("/");
        }
      });
  };

  return (
    <div>
      <Header />
      <div className="container-create">
        <div className="form">
          <div
            style={{
              marginRight: "50px",
            }}
          >
            <label htmlFor="fullname">Full Name:</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
            />

            <br />

            <label htmlFor="nationalid">National ID:</label>
            <input
              type="text"
              id="nationalid"
              name="nationalid"
              value={formData.nationalid}
              onChange={handleChange}
              required
            />

            <br />

            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />

            <br />

            <label htmlFor="phonenumber">Phone Number:</label>
            <input
              type="text"
              id="phonenumber"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="usertype">User Type:</label>
            <select
              id="usertype"
              name="usertype"
              value={formData.usertype}
              onChange={handleChange}
            >
              <option value="">Select User Type</option>
              <option value="STAFF">STAFF</option>
              <option value="DENTIST">DENTIST</option>
            </select>

            <br />

            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
              <option value="OTHERS">OTHERS</option>
            </select>

            <br />

            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button className="btn-sb" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
