import axios from "axios";
import "../App.css";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
function convertDate(dateString) {
  const convertedDate = new Date(dateString);
  return convertedDate.toLocaleDateString("en-US"); // Chuyển đổi thành "MM/DD/YYYY"
}

export default function ListPatient() {
  const navigate = useNavigate();

  const { setCusIDSelectTreatment } = useContext(AuthContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/user/get-all-patient").then((response) => {
      const convertedData = response.data.result.map((item) => ({
        ...item,
        DOB: convertDate(item.DOB),
        // Thêm các trường chuyển đổi khác nếu cần
      }));

      setData(convertedData);
    });
  }, []);
  const handleClick = () => {
    navigate("/create-patient-records");
  };
  const handleEdit = (id) => {
    setCusIDSelectTreatment(id);
    navigate("/all-patients/edit");
  };
  const handleDetail = (id) => {
    setCusIDSelectTreatment(id);
    navigate("/all-patients/detail");
  };

  const handlecreateTreatmentPlan = (id) => {
    setCusIDSelectTreatment(id);
    navigate("/all-patients/create-treatment-plan");
  };
  return (
    <div>
      <Header />
      <div className="table-container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h3>Patient Information</h3>
          <button
            className="blue-button"
            style={{ marginBottom: "15px" }}
            onClick={handleClick}
          >
            <FontAwesomeIcon
              icon={faPlusSquare}
              style={{ marginRight: "15px" }}
            />
            Create new patient
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Phone number</th>
              <th>Address</th>
              <th>DOB</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.CUSID}>
                <td>{item.CUSID}</td>
                <td>{item.FULLNAME}</td>
                <td>{item.GENDER}</td>
                <td>{item.PHONENUMBER}</td>
                <td>{item.ADDRESS}</td>
                <td>{item.DOB}</td>
                <td>
                  <button
                    className="yellow-button"
                    onClick={() => handleDetail(item.CUSID)}
                  >
                    Detail
                  </button>
                  <button
                    className="gray-button"
                    onClick={() => handleEdit(item.CUSID)}
                  >
                    Edit
                  </button>
                  <button
                    className="blue-button"
                    onClick={() => handlecreateTreatmentPlan(item.CUSID)}
                  >
                    Create treatment plan
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
