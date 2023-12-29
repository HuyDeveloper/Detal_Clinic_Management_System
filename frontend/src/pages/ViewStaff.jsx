import { useEffect, useState,useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import "../App.css";
import DateFilterComponent from "../components/DateFilterComponent";
import Header from "../components/Header";
import axios from "axios";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";


export default function ViewStaff() {
  const [data, setData] = useState([]);
  const {setMedicineId}=useContext(AuthContext);
 
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get("http://localhost:3000/user/get-all-staff")
      .then((response) => {
        // Chuyển đổi dữ liệu trước khi cập nhật state
        

        console.log(response.data.staff);
        setData(response.data.staff);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      });
  }, []);

  const deleteMedicine = (id) => {
    axios
      .delete(`http://localhost:3000/user/get-all-staff`, { params: { name: id } })
      .then((response) => {
        console.log(response);
        setData(data.filter((item) => item.MEDICINE !== id));
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
      <h3>Staff</h3>
    
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>FULLNAME</th>
              <th>NATIONALID</th>
              <th>ADDRESS</th>
              <th>PHONENUMBER</th>
              <th>GENDER</th>
              <th>USERNAME</th>
             
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.FULLNAME}>
                <td>{item.FULLNAME}</td>
                <td>{item.NATIONALID}</td>
                <td>{item.ADDRESS}</td>
                <td>{item.PHONENUMBER}</td>
                <td>{item.GENDER}</td>
                <td>{item.USERNAME}</td>
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
