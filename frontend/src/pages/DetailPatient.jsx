import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import "../style/detailPatient.css";
import { useNavigate } from "react-router-dom";
export default function DetailPatient() {
  const { cusid } = useContext(AuthContext);
  const [treatment, setTreatment] = useState([]);
  const [detalProblem, setDetalProblem] = useState([]);

  useEffect(() => {
    console.log(cusid);

    axios
      .get(`http://localhost:3000/treatment/customer/${cusid}`)
      .then((response) => {
        console.log(response.data);
        setTreatment(response.data);
      });

    axios
      .get(`http://localhost:3000/treatment/detalProblem/${cusid}`)
      .then((response) => {
        console.log(response.data);
        setDetalProblem(response.data);
      });
  }, []);
  const { setTreatmentID } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = (id) => {
    setTreatmentID(id);
    navigate("/detail-invoice");
  };
  return (
    <div>
      <Header />
      <div className="two-column-container">
        <div className="left-column">
          <div className="column-title">Treatments</div>
          {treatment.map((item, index) => {
            const stateClass =
              {
                DONE: "active-item",
                CANCLED: "inactive-item",
                INIT: "pending-item",
              }[item.TREATMENTSTATE] || "";

            return (
              <div key={index} className={`treatment-item ${stateClass}`}>
                <p>STID: {item.STID}</p>
                <p>CREATEDDATE: {item.CREATEDDATE}</p>
                <p>TITLE: {item.TITLE}</p>
                <button
                  onClick={() => handleClick(item.STID)}
                  className="button-view-detail"
                >
                  View detail
                </button>
                <hr />
              </div>
            );
          })}
        </div>
        <div className="right-column">
          <div className="column-title">Dental Problem</div>
          {detalProblem.map((item, index) => (
            <div key={index} className="dental-problem-item">
              <p>DATE: {item.NOTEDDATE}</p>
              <p>DESCRIPTION: {item.DESCRIPTION}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
