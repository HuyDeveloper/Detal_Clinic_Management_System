import { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import "../App.css";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
export default function CreateTreatmentPlan() {
  const { cusid, sTreatmentID } = useContext(AuthContext);
  const [initialOptions, setOptions] = useState([]);
  const [dentist, setDentist] = useState([]);
  const [medicine, setMedicine] = useState([]);
  const [tooth, setTooth] = useState([]);
  const [surface, setSurface] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [note, setNote] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3000/medicine").then((response) => {
      setMedicine(response.data.listMedicine);
    });
    axios
      .get("http://localhost:3000/treatment/all-surface")
      .then((response) => {
        setSurface(response.data.surface[0]);
      });
    axios.get("http://localhost:3000/medicine").then((response) => {
      setMedicine(response.data.listMedicine);
    });
    console.log(cusid);
  }, []);

  // State to manage selected options
  const [selectedSurface, setSelectedSurface] = useState("");
  const [selectedMedicine, setSelectedMedicine] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  // Event handler for Tooth dropdown
  // Event handler for Surface dropdown
  const handleSurfaceChange = (event) => {
    setSelectedSurface(event.target.value);
  };
  const handleMedicineChange = (event) => {
    setSelectedMedicine(event.target.value);
  };
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const navigate = useNavigate();
  const { setTreatmentID } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi dữ liệu hoặc thực hiện xử lý dữ liệu ở đâ
    axios
      .post(
        `http://localhost:3000/treatment/updateSelectTreatment/${sTreatmentID}`,
        {
          note: note,
          timeofreex: selectedDate,
          medicine: selectedMedicine,
          quantity: quantity,
          surface: selectedSurface,
        }
      )
      .then((response) => {
        if (response.data.message === "Success") {
          alert("Success");
          navigate("/all-patients");
        }
      });
  };
  return (
    <div>
      <Header />
      <div
        className="form-container"
        style={{
          marginTop: "3rem",
        }}
      >
        <h3>Edit treatment plan:</h3>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "45%" }}>
              <div>
                <label htmlFor="date">Date:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  onChange={handleDateChange}
                />
              </div>
            </div>
            <div style={{ width: "45%" }}>
              <label style={{ marginBottom: "12px" }}>Select Surface:</label>
              <select value={selectedSurface} onChange={handleSurfaceChange}>
                <option value="">Select Surface</option>
                {surface.map((surface) => (
                  <option key={surface.SHORTNAME} value={surface.SHORTNAME}>
                    {surface.REALNAME}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <label style={{ width: "100%" }}>
            Note:
            <input
              type="text"
              name="phoneNumber"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </label>
          <label>
            Medicine:
            <select value={selectedMedicine} onChange={handleMedicineChange}>
              <option value="">Select medicine</option>
              {medicine.map((surface) => (
                <option key={surface.MEDICINE} value={surface.MEDICINE}>
                  {surface.MEDICINE}
                </option>
              ))}
            </select>
          </label>
          <label>
            Quantity:
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="green-button"
            style={{
              width: "100%",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
