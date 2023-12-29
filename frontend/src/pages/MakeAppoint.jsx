// FormComponent.js
import { useState,useEffect } from "react";
import "../style/Form.css";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const MakeAppoint = () => {
  const [branch, setBranch] = useState([]);
  const [dentist, setDentist] = useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    status: "",
    address: "",
    phonenumber: "",
    gender: "",
    dob: "",
    branch: "",
    dentist: "",
  });
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
          <h3>Create Appointment</h3>
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
            Status:
            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          </label>
          <div>
          <label htmlFor="branch">Branch:</label>
          <select id="branch" name="branch" onChange={handleChange}>
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
          <select id="dentist" name="dentist" onChange={handleChange}>
            <option value="">Select dentist</option>
            {dentist.map((b) => (
              <option key={b.DENTISTID} value={b.DENTISTID}>
                {b.FULLNAME}
              </option>
            ))}
          </select>
        </div>
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
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default MakeAppoint;
