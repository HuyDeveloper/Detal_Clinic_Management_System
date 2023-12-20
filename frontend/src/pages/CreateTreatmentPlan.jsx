import { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import "../App.css";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
export default function CreateTreatmentPlan() {
  const { cusid } = useContext(AuthContext);
  const [initialOptions, setOptions] = useState([]);
  const [dentist, setDentist] = useState([]);
  const [medicine, setMedicine] = useState([]);
  const [tooth, setTooth] = useState([]);
  const [surface, setSurface] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [note, setNote] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3000/user/get-all-dentist").then((response) => {
      setDentist(response.data.dentist);
    });
    axios.get("http://localhost:3000/treatment/all").then((response) => {
      setOptions(response.data.treatments[0]);
    });
    axios.get("http://localhost:3000/medicine").then((response) => {
      setMedicine(response.data.listMedicine);
    });
    axios.get("http://localhost:3000/treatment/all-tooth").then((response) => {
      setTooth(response.data.tooth[0]);
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

  const [checkedOptions, setCheckedOptions] = useState(
    initialOptions.reduce((options, option) => {
      options[option - 1] = false;
      return options;
    }, {})
  );

  const handleCheckboxChange = (option) => {
    setCheckedOptions({
      ...checkedOptions,
      [option]: !checkedOptions[option],
    });
  };
  // State to manage selected options
  const [selectedDentist, setSelectedDentist] = useState("");
  const [selectedTooth, setSelectedTooth] = useState("");
  const [selectedSurface, setSelectedSurface] = useState("");
  const [selectedMedicine, setSelectedMedicine] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  // Event handler for Tooth dropdown
  const handleToothChange = (event) => {
    setSelectedTooth(event.target.value);
  };
  const handleDentistChange = (event) => {
    setSelectedDentist(event.target.value);
  };
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
    const treid = Object.keys(checkedOptions).filter(
      (key) => checkedOptions[key] === true
    );
    // Gửi dữ liệu hoặc thực hiện xử lý dữ liệu ở đây
    console.log(
      selectedDentist,
      selectedTooth,
      selectedSurface,
      selectedMedicine,
      treid[0],
      quantity,
      note,
      selectedDate, //loi
      cusid
    );
    axios
      .post("http://localhost:3000/treatment/add", {
        denid: selectedDentist,
        toothid: selectedTooth,
        surface: selectedSurface,
        medicine: selectedMedicine,
        treid: treid[0],
        quantity: quantity,
        note: note,
        timeofreex: selectedDate,
        cusid: cusid,
      })
      .then((response) => {
        console.log(response.data);
        setTreatmentID(response.data.stID);
        if (response.data.message === "Success") {
          navigate("/create-invoice");
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
        <h3>Create treatment plan:</h3>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "45%" }}>
              <label htmlFor="dentist">Dentist:</label>
              <select
                id="dentist"
                name="dentist"
                value={selectedDentist}
                onChange={handleDentistChange}
              >
                <option value="">Select dentist</option>
                {dentist.map((b) => (
                  <option key={b.DENTISTID} value={b.DENTISTID}>
                    {b.FULLNAME}
                  </option>
                ))}
              </select>
            </div>
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

          <div>
            {initialOptions.map((option) => (
              <label key={option.TREATMENTID}>
                <input
                  type="checkbox"
                  checked={checkedOptions[option.TREATMENTID]}
                  onChange={() => handleCheckboxChange(option.TREATMENTID)}
                />
                {option.TITLE}
              </label>
            ))}
            <p>
              Treatment selected:{" "}
              {Object.keys(checkedOptions)
                .filter((option) => checkedOptions[option])
                .join(", ")}
            </p>
          </div>
          <div>
            <label>
              Select Tooth:
              <select value={selectedTooth} onChange={handleToothChange}>
                <option value="">Select Tooth</option>
                {tooth.map((tooth) => (
                  <option key={tooth.TOOTHID} value={tooth.TOOTHID}>
                    {tooth.TOOTHNAME}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Select Surface:
              <select value={selectedSurface} onChange={handleSurfaceChange}>
                <option value="">Select Surface</option>
                {surface.map((surface) => (
                  <option key={surface.SHORTNAME} value={surface.SHORTNAME}>
                    {surface.REALNAME}
                  </option>
                ))}
              </select>
            </label>

            <p>
              Selected Tooth: {selectedTooth}
              <br />
              Selected Surface: {selectedSurface}
            </p>
          </div>
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
