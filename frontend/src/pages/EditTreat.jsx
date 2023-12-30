// FormComponent.js
import { useState,useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import "../style/Form.css";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const EditTreat = () => {
  const {treatment}=useContext(AuthContext);
  console.log("treatment");
  console.log(treatment);
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
  const requestData = {
    params: { id: treatment.TREATMENTID },
    formData: formData, // Assuming formData is already defined
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi dữ liệu hoặc thực hiện xử lý dữ liệu ở đây
    axios
      .put("http://localhost:3000/treatment/updateTreat",formData, {
        params: { id: treatment.TREATMENTID },
        // Additional configuration options if needed
      })
      .then((response) => {
        console.log(response);
        setFormData({});
        alert("Update Treatment successfully!");
        navigate("/treatment");
      });
  };

  return (
    <>
      <Header />
      <div>
        <form className="container-edit" onSubmit={handleSubmit}>
          <h3>Update Treatment </h3>
          <label>
            TITLE:
            <input
              type="text"
              name="TITLE"
              placeholder={treatment.TITLE}
              value={formData.TITLE}
              onChange={handleChange}
            />
          </label>
          <label>
          DESCRIPTION:
            <input
              type="text"
              name="DESCRIPTION"
              placeholder={treatment.DESCRIPTION}
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

export default EditTreat;
