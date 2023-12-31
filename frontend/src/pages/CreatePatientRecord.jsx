// FormComponent.js
import { useState } from "react";
import "../style/Form.css";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreatePatientRecord = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    address: "",
    phonenumber: "",
    gender: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi dữ liệu hoặc thực hiện xử lý dữ liệu ở đây
    axios
      .post("http://localhost:3000/user/create-patient", formData)
      .then((response) => {
        console.log(response);
        setFormData({});
        alert("Create patient successfully!");
        navigate("/all-patients");
      });
  };

  return (
    <>
      <Header />
      <div>
        <form className="container-edit" onSubmit={handleSubmit}>
          <h3>Create Patient Record</h3>
          <label>
            Full Name:
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
            />
          </label>
          <label>
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHER">Other</option>
            </select>
          </label>
          <label>
            Date of Birth:
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </label>
          <button className="green-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreatePatientRecord;
