import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { AuthContext } from "../contexts/AuthContext";
import "../App.css";
import { useNavigate } from "react-router-dom";
export default function CreateInvoice() {
  const [selectedMode, setModeSelected] = useState("");
  const [mode, setMode] = useState([]);
  const { sTreatmentID } = useContext(AuthContext);
  const [totalMedicinePrice, setTotalMedicinePrice] = useState(0);
  const [totalToothPrice, setTotalToothPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paid, setPaid] = useState("");
  const [change, setChange] = useState(0);
  const [note, setNote] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3000/dental/modepayment").then((response) => {
      setMode(response.data);
    });

    axios
      .get(`http://localhost:3000/medicine/detail/${sTreatmentID}`)
      .then((response) => {
        console.log(response.data.listMedicine[0].MEDICINEPRICE);
        setTotalMedicinePrice(response.data.listMedicine[0].MEDICINEPRICE);
      });
    axios
      .get(`http://localhost:3000/medicine/detail-tooth/${sTreatmentID}`)
      .then((response) => {
        console.log(response.data.tooth[0].TOOTHPRICE);
        setTotalToothPrice(response.data.tooth[0].TOOTHPRICE);
      });
  }, []);

  useEffect(() => {
    setTotalPrice(totalMedicinePrice + totalToothPrice);
  }, [totalMedicinePrice, totalToothPrice]);

  const handleModeChange = (event) => {
    setModeSelected(event.target.value);
  };
  const navigate = useNavigate();
  const handlePaidChange = (e) => {
    const newPaid = parseFloat(e.target.value);
    setPaid(newPaid);

    // Tính toán và cập nhật giá trị change
    const newChange = newPaid - totalPrice;
    setChange(newChange >= 0 ? newChange : 0);
  };
  const handleSubmit = () => {
    const data = {
      mpid: selectedMode,
      paid: paid,
      note: note,
      totalToothPrice: totalToothPrice,
      totalMedicinePrice: totalMedicinePrice,
      stid: sTreatmentID,
      totalprice: totalPrice,
      change: change,
    };
    axios
      .post("http://localhost:3000/treatment/createInvoice", data)
      .then((response) => {
        console.log(response.data);
        if (response.data.message === "Success") {
          alert("Create invoice successfully");
          navigate("/");
        }
      });
  };
  return (
    <>
      <Header />
      <div className="invoice-container">
        <h3>Invoice</h3>
        <div className="price-section">
          <div>
            <strong>Total Medicine Price:</strong> {totalMedicinePrice}
          </div>
          <div>
            <strong>Total Tooth Price:</strong> {totalToothPrice}
          </div>
          <div>
            <strong>Total Price:</strong> {totalPrice}
          </div>
        </div>
        <label htmlFor="mode">Mode Payment:</label>
        <select
          id="mode"
          name="mode"
          value={selectedMode}
          onChange={handleModeChange}
        >
          <option value="">Select mode payment</option>
          {mode.map((b) => (
            <option key={b.MPID} value={b.MPID}>
              {b.MODE}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Paid"
          value={paid}
          onChange={handlePaidChange}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="input-field"
        />
        <div className="change-section">
          <strong>Change:</strong> {change}
        </div>
        <button
          className="green-button"
          style={{ width: "100%" }}
          onClick={handleSubmit}
        >
          Ok
        </button>
      </div>
    </>
  );
}
