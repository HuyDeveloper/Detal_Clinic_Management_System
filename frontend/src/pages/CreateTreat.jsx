// FormComponent.js
import { useState } from "react";
import "../style/Form.css";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateTreatment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    TITLE: "",
    DESCRIPTION: "",

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
      .post("http://localhost:3000/treatment/addTreat", formData)
      .then((response) => {
        console.log(response);
        setFormData({});
        alert("Create Treatment successfully!");
        navigate("/treatment");
      });
  };

  return (
    <>
      <Header />
      <div>
        <form className="container-edit" onSubmit={handleSubmit}>
          <h3>Create Medicine </h3>
          <label>
            TITLE:
            <input
              type="text"
              name="TITLE"
              value={formData.TITLE}
              onChange={handleChange}
            />
          </label>
          <label>
          DESCRIPTION:
            <input
              type="text"
              name="DESCRIPTION"
              value={formData.DESCRIPTION}
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

export default CreateTreatment;
