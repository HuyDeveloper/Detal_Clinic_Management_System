// FormComponent.js
import { useState,useEffect } from "react";
import "../style/Form.css";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const MakeAppoint = () => {
  const [branch, setBranch] = useState([]);
  const [dentist, setDentist] = useState([]);
  const [appdate, setAppdate] = useState([]);
  const [apptime, setApptime] = useState([]);
  const [appstate, setAppstate] = useState([]);
  const [room, setRoom] = useState([]);
  const [cusid, setCusid] = useState([]);
  const [denid, setDenid] = useState([]);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const convertTime = (hour, minute) => { 
    //convert time to 24h format
    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;
    return hour + ":" + minute;
  }
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    appdate: "",
    apptime:"",
    appstate: "",
    room: "",
    branch: "",
    cusid: "",
    denid: "",

  });
  useEffect(() => {
    axios.get("http://localhost:3000/user/get-all-branch").then((response) => {
      setBranch(response.data.branch);
     
    });
    axios.get("http://localhost:3000/user/get-all-dentist").then((response) => {
      setDentist(response.data.dentist);
  
    });
    axios.get("http://localhost:3000/appointment/room").then((response) => {
      setRoom(response.data.result);
    });
  }, []);



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(appdate);
    console.log(convertTime(hour,minute));
    console.log(appstate);
    console.log(room);
    console.log(branch);
    console.log(cusid);
    console.log(denid);

    // Gửi dữ liệu hoặc thực hiện xử lý dữ liệu ở đây
    axios
      .post("http://localhost:3000/appointment/addAppoint", {
        appdate: appdate,
      apptime:convertTime(hour,minute),
      appstate: appstate,
      room: room,
      branch: branch,
      cusid: cusid,
      denid: denid,
      })
      .then((response) => {
        console.log(response);
        alert("Create appointmnet successfully!");
        navigate("/");
      });
  };

  return (
    <>
      <Header />
      <div>
        <form className="container-edit" onSubmit={handleSubmit}>
          <h3>Create Appointment</h3>
          <label>
            Appdate:
            <input
              type="date"
              name="appdate"
              value={appdate}
              onChange={(e)=>setAppdate(e.target.value)}
            />
          </label>
          <label>
            AppTime:
            <div className="inputs">
                            <input type='number' id="hourInput" placeholder='Hour' min='0' max='23' onChange={(e)=>setHour(e.target.value)}
                            
                            />
                            <input type='number' id="minuteInput" placeholder='Min' min='0' max='59' onChange={(e)=>setMinute(e.target.value)}/>
                            
                        </div>
          </label>

          <label>
            AppState:
            <input
              type="text"
              name="appstate"
              value={appstate}
              onChange={(e)=>setAppstate(e.target.value)}
            />
          </label>
          <div>
          <label htmlFor="branch">Branch:</label>
          <select id="branch" name="branch" onChange={(e)=>setBranch(e.target.value)}>
            <option value="">Select Branch</option>
            <option key="3" value="3">3</option>
            <option key="6" value="6">6</option>
            <option key="9" value="9">9</option>
            <option key="12" value="12">12</option>
            <option key="15" value="15">15</option>
            <option key="18" value="18">18</option>
            <option key="21" value="21">21</option>
            <option key="24" value="24">24</option>
          </select>
        </div>
        <div>
          <label htmlFor="room">Room:</label>
          <select id="room" name="room" onChange={(e)=>setRoom(e.target.value)}>
            <option value="">Select Room</option>
            {/* {room.map((b) => (
              <option key={b.ROOMID} value={b.ROOMID}>
                {b.ROOMID}
              </option>
            ))} */}
            <option key="L3" value="L3">L3</option>
            <option key="R6" value="R6">R6</option>
            <option key="L9" value="L9">L9</option>
            <option key="R12" value="R12">R12</option>
            <option key="L15" value="L15">L15</option>
            <option key="R18" value="R18">R18</option>
            <option key="L21" value="L21">L21</option>
            <option key="R24" value="R24">R24</option>
          </select>
        </div>

        <div>
          <label htmlFor="dentist">Dentist:</label>
          <select id="dentist" name="dentist" onChange={(e)=>setDenid(e.target.value)}>
            <option value="">Select dentist</option>
            {dentist.map((b) => (
              <option key={b.DENTISTID} value={b.DENTISTID}>
                {b.FULLNAME}
              </option>
            ))}
          </select>
        </div>
          <label>
            CusID:
            <input
              type="text"
              name="cusid"
              value={cusid}
              onChange={(e)=>setCusid(e.target.value)}
            />
          </label>
          
          <button className="green-button" type="submit">
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default MakeAppoint;
