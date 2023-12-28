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
  const handleEdit = (id) => {
    setTreatmentID(id);
    navigate("/edit-treatment-plan");
  };
  const handleDone = (id) => {
    axios
      .patch(`http://localhost:3000/treatment/updateStateTreatment/${id}`, {
        state: "DONE",
      })
      .then((res) => {
        if (res.data.message === "Success") {
          alert("Done treatment success");
          navigate("/all-patients");
        }
      });
  };

  const handleCancle = (id) => {
    axios
      .patch(`http://localhost:3000/treatment/updateStateTreatment/${id}`, {
        state: "CANCLED",
      })
      .then((res) => {
        if (res.data.message === "Success") {
          alert("Cancle treatment success");
          navigate("/all-patients");
        }
      });
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
                <div>
                  <p>STID: {item.STID}</p>
                  <p>CREATEDDATE: {item.CREATEDDATE}</p>
                  <p>TITLE: {item.TITLE}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <button
                    onClick={() => handleEdit(item.STID)}
                    className="button-edit-treatment"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleClick(item.STID)}
                    className="button-view-detail"
                  >
                    View detail
                  </button>
                  <button
                    onClick={() => handleDone(item.STID)}
                    className="button-done-treatment"
                  >
                    Done
                  </button>
                  <button
                    onClick={() => handleCancle(item.STID)}
                    className="button-cancle-treatment"
                  >
                    Canceled
                  </button>
                </div>
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
