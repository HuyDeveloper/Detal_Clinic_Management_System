// FormComponent.js
import { useState } from "react";
import "../style/Form.css";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateMedicine = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    MEDICINE: "",
    MEDICINEPRICE: "",
    TYPEOFMEDICINE: "",

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
      .post("http://localhost:3000/medicine", formData)
      .then((response) => {
        console.log(response);
        setFormData({});
        alert("Create Medicine successfully!");
        navigate("/medicine");
      });
  };

  return (
    <>
      <Header />
      <div>
        <form className="container-edit" onSubmit={handleSubmit}>
          <h3>Create Medicine </h3>
          <label>
            Name:
            <input
              type="text"
              name="MEDICINE"
              value={formData.MEDICINE}
              onChange={handleChange}
            />
          </label>
          <label>
            Price:
            <input
              type="text"
              name="MEDICINEPRICE"
              value={formData.MEDICINEPRICE}
              onChange={handleChange}
            />
          </label>
          <label>
            Type:
            <input
              type="text"
              name="TYPEOFMEDICINE"
              value={formData.TYPEOFMEDICINE}
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

export default CreateMedicine;
