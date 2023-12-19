import { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
export default function CreateTreatmentPlan() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    gender: "",
    dob: "",
  });
  const [dentist, setDentist] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/user/get-all-dentist").then((response) => {
      setDentist(response.data.dentist);
      console.log(response.data.dentist);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [selectedDentist, setSelectedDentist] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi dữ liệu hoặc thực hiện xử lý dữ liệu ở đây
    console.log("Form data submitted:", formData);
  };
  const initialOptions = ["Option 1", "Option 2", "Option 3"];
  const [checkedOptions, setCheckedOptions] = useState(
    initialOptions.reduce((options, option) => {
      options[option] = false;
      return options;
    }, {})
  );

  const handleCheckboxChange = (option) => {
    setCheckedOptions({
      ...checkedOptions,
      [option]: !checkedOptions[option],
    });
  };
  const toothOptions = ["Incisor", "Canine", "Premolar", "Molar"];
  const surfaceOptions = ["Mesial", "Distal", "Occlusal", "Buccal", "Lingual"];

  // State to manage selected options
  const [selectedTooth, setSelectedTooth] = useState("");
  const [selectedSurface, setSelectedSurface] = useState("");

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
          <div>
            <label htmlFor="dentist">Dentist:</label>
            <select id="dentist" name="dentist" onChange={handleDentistChange}>
              <option value="">Select dentist</option>
              {dentist.map((b) => (
                <option key={b.DENTISTID} value={b.DENTISTID}>
                  {b.FULLNAME}
                </option>
              ))}
            </select>
          </div>
          <label>
            Re-examination time:
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </label>
          <label>
            Note:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </label>

          <div>
            {initialOptions.map((option) => (
              <label key={option}>
                <input
                  type="checkbox"
                  checked={checkedOptions[option]}
                  onChange={() => handleCheckboxChange(option)}
                />
                {option}
              </label>
            ))}
            <p>
              Checked options:{" "}
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
                {toothOptions.map((tooth) => (
                  <option key={tooth} value={tooth}>
                    {tooth}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Select Surface:
              <select value={selectedSurface} onChange={handleSurfaceChange}>
                <option value="">Select Surface</option>
                {surfaceOptions.map((surface) => (
                  <option key={surface} value={surface}>
                    {surface}
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
