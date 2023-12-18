import { useState } from "react";

export default function CreateTreatmentPlan() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    gender: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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

  // Event handler for Surface dropdown
  const handleSurfaceChange = (event) => {
    setSelectedSurface(event.target.value);
  };

  return (
    <div>
      <h3>Select treatments:</h3>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Dentist:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
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
          <button type="submit">Submit</button>
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
        </form>
      </div>
    </div>
  );
}
