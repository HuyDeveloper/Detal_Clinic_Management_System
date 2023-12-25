import "../App.css";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const handleAppointment = () => {
    navigate("/all-appointments");
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
          <div className="nav-item">Staffs</div>
          <div className="nav-item">Dentists</div>
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
              <div className="nav-item">Medicine</div>
              <div className="nav-item">Treatment</div>
              <div className="nav-item">Dental Clinic</div>
            </div>
          </div>
          <button className="login-btn">Log In</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
