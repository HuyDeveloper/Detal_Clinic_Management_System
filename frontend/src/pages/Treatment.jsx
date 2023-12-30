import { useEffect, useState,useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import "../App.css";
import Header from "../components/Header";
import axios from "axios";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";


export default function Treatment() {
  const [data, setData] = useState([]);
  const {setTreatmentId}=useContext(AuthContext);
 
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get("http://localhost:3000/treatment/get-all-treatment")
      .then((response) => {
        // Chuyển đổi dữ liệu trước khi cập nhật state
        

        console.log(response.data.treatments);
        setData(response.data.treatments[0]);
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
        setData(data.filter((item) => item.TREATMENTID !== id));
      })
      .catch((error) => {
        console.error("Error deleting data:", error.message);
      });
  };

  const handleEdit = (treat) => {
    setTreatmentId(treat)
    navigate("/treatment/edit");
  };
  return (
    <div>
      <Header />
      <h3>Treatment</h3>
      <div style={{textAlign:"end"}}>

      
<button
      className="blue-button"
      style={{ marginBottom: "15px",marginRight:"200px" }}
      onClick={()=>navigate("/treatment/create")}
    >
      <FontAwesomeIcon
        icon={faPlusSquare}
        style={{ marginRight: "15px" }}
      />
      Create new Treatment
    </button>
    </div>
    
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>TREATMENTID</th>
              <th>TITLE</th>
              <th>DESCRIPTION</th>
             
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.TREATMENTID}>
                <td>{item.TREATMENTID}</td>
                <td>{item.TITLE}</td>
                <td>{item.DESCRIPTION}</td>

                <td>
                  <button className="gray-button" onClick={()=>handleEdit(item)}>
                    Edit
                  </button>
                  <button
                    className="red-button"
                    onClick={() => deleteMedicine(item.TREATMENTID)}
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
