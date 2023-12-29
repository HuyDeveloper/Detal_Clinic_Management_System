// FormComponent.js
import { useState,useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import "../style/Form.css";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateMedicine = () => {
  const {medicine}=useContext(AuthContext);
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
  const requestData = {
    params: { name: medicine.MEDICINE },
    formData: formData, // Assuming formData is already defined
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi dữ liệu hoặc thực hiện xử lý dữ liệu ở đây
    axios
      .put("http://localhost:3000/medicine",requestData)
      .then((response) => {
        console.log(response);
        setFormData({});
        alert("Update Medicine successfully!");
        navigate("/medicine");
      });
  };

  return (
    <>
      <Header />
      <div>
        <form className="container-edit" onSubmit={handleSubmit}>
          <h3>Update Medicine </h3>
          <label>
            Name:
            <input
              type="text"
              name="MEDICINE"
              placeholder={medicine.MEDICINE}
              value={formData.MEDICINE}
              onChange={handleChange}
            />
          </label>
          <label>
            Price:
            <input
              type="text"
              name="MEDICINEPRICE"
              placeholder={medicine.MEDICINEPRICE}
              value={formData.MEDICINEPRICE}
              onChange={handleChange}
            />
          </label>
          <label>
            Type:
            <input
              type="text"
              name="TYPEOFMEDICINE"
              placeholder={medicine.TYPEOFMEDICINE}
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
