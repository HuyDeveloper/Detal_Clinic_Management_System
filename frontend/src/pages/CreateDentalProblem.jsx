import { useContext, useState } from "react";
import Header from "../components/Header";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateDentalProblem() {
  const { cusid } = useContext(AuthContext);
  const [description, setDescrtipion] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log(description);
    axios
      .post("http://localhost:3000/dental/create-dental-problem", {
        cusId: cusid,
        description: description,
      })
      .then((res) => {
        if (res.data.message === "Success") {
          alert("Add dental problem success");
          navigate("/all-patients");
        }
      });
  };

  return (
    <>
      <Header />
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>Add Dental Problem</h1>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescrtipion(e.target.value)}
          style={{
            padding: "10px",
            margin: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "500px",
          }}
        />
        <button
          onClick={handleSubmit}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}
