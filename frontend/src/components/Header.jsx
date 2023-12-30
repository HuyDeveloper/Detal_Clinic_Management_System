import "../App.css";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext.jsx";
import { useContext } from "react";

const Header = () => {
  const navigate = useNavigate();
  const {isValid,user,setIsValid,setUser} = useContext(AuthContext);
  const handleHome = () => {
    navigate("/");
  };
  const handleAppointment = () => {
    navigate("/all-appointments");
  };
  const logout=()=>{
    setUser({});
    setIsValid(false);
    localStorage.removeItem("user");
    navigate("/");

  };
  const handlePatient = () => {
    navigate("/all-patients");
  
  };
  return (
    <div style={{ backgroundColor: "#4446b7" }}>
      <header className="app-header">
        <img className="logo" src="../public/logo.png" onClick={handleHome} />
        <div className="nav-left">
          <div className="nav-item" onClick={handleAppointment}>
            Appointments
          </div>
          <div className="nav-item">Admins</div>
          <div className="nav-item" onClick={()=> navigate("/staff")}>Staffs</div>
          <div className="nav-item" onClick={()=> navigate("/dentist")}>Dentists</div>
          <div className="nav-item" onClick={handlePatient}>
            Patients
          </div>
        </div>
        <div className="nav-right">
          <div className="dropdown">
            <button className="dropbtn">
              <FontAwesomeIcon icon={faList} />
              Others
            </button>
            <div className="dropdown-content">
              <div className="nav-item" onClick={()=> navigate("/medicine")}>Medicine</div>
              <div className="nav-item" onClick={()=> navigate("/treatment")}>Treatment</div>
              <div className="nav-item">Dental Clinic</div>
            </div>
          </div>
          { isValid ? 
            <div className="dropdown">
            <button className="dropbtn">
              Hello {user.USERNAME}
            </button>
            <div className="dropdown-content">
              <button className="nav-item" style={{backgroundColor:"#4446b7"}} onClick={()=>navigate("/inforuser")}>Profile</button>
              <button className="nav-item" style={{ backgroundColor:"#4446b7"}} onClick={logout}>Logout</button>
              
            </div>
          </div> :
           
            <button className="signupBtn" onClick={()=>navigate("/login")}>Log In</button>}
            { isValid ? <button className="login-btn" onClick={logout}> Logout </button> : 
              <button className="signupBtn" onClick={()=>navigate("/signup")}>Sign Up</button>}
        </div>
      </header>
    </div>
  );
};

export default Header;
