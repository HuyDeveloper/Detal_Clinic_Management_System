import { useEffect, useState,useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import "../App.css";

import Header from "../components/Header";
import axios from "axios";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";


export default function Medicine() {
  const [data, setData] = useState([]);
  const {setMedicineId}=useContext(AuthContext);
 
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get("http://localhost:3000/medicine")
      .then((response) => {
        // Chuyển đổi dữ liệu trước khi cập nhật state
        

        console.log(response.data.listMedicine);
        setData(response.data.listMedicine);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      });
  }, []);

  const deleteMedicine = (id) => {
    axios
      .delete(`http://localhost:3000/medicine`, { params: { name: id } })
      .then((response) => {
        console.log(response);
        setData(data.filter((item) => item.MEDICINE !== id));
        alert("Delete Medicine successfully!");
      })
      .catch((error) => {
        console.error("Error deleting data:", error.message);
      });
  };

  const handleEdit = (med) => {
    setMedicineId(med)
    navigate("/medicine/edit");
  };
  return (
    <div>
      <Header />
      <h3>Medicine</h3>
      <div style={{textAlign:"end"}}>

      
      <button
            className="blue-button"
            style={{ marginBottom: "15px",marginRight:"200px" }}
            onClick={()=>navigate("/medicine/create")}
          >
            <FontAwesomeIcon
              icon={faPlusSquare}
              style={{ marginRight: "15px" }}
            />
            Create new Medicine
          </button>
          </div>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>PRICE</th>
              <th>TYPE</th>
             
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.MEDICINE}>
                <td>{item.MEDICINE}</td>
                <td>{item.MEDICINEPRICE}</td>
                <td>{item.TYPEOFMEDICINE}</td>
                <td>
                  <button className="gray-button" onClick={()=>handleEdit(item)}>
                    Edit
                  </button>
                  <button
                    className="red-button"
                    onClick={() => deleteMedicine(item.MEDICINE)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
