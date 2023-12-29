import { useState } from "react";
import "../style/LoginForm.css";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
// User Login info
const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];
  
  const errors = {
    uname: "exist username",
    pass: "invalid password"
  };
const Signup = () => {
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [errorMess,setErrorMess] = useState("");
    const [isSubmit,setIsSubmit] = useState(false);
    // Generate JSX code for error message
        const renderErrorMessage = (name) =>
        name === errorMess.name && (
        <div className="error">{errorMess.message}</div>
);
    const handleLogin=(event)=>{
        //handle Login
        event.preventDefault();
        if(password!==confirmPassword){
          setErrorMess({ name: "pass", message: errors.pass });
          return;
      }

        axios.post("http://localhost:3000/user/register",{
          username:username,
          password:password
        }).then((response) => {
         
          console.log(response.data);
          navigate("/login")
          

              // Invalid password
         
        })
        .catch((error) => {
          console.log(error);
          setErrorMess({ name: "uname", message: errors.uname });
        
        });

    }
    const renderForm =  (
        <div className="bodyfa" style={{backgroundImage:`url("https://t3.ftcdn.net/jpg/02/16/47/22/360_F_216472247_cT66WDoS0fp1s3wC7eaykMJNDGVbOBPq.jpg")`,
                                        backgroundSize:"cover",
                                        backgroundRepeat:"no-repeat",
                                        width:"100%",
                                        height:"100vh",
    }}
        >

        
        <div className="body">
            <h2 style={{color:"#0C5B36"}}>Sign-Up</h2>
      <form>
        <label >
            
          <div className="label-title">
                Username:
          </div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {renderErrorMessage("uname")}
        </label>
        <br />
        <label >
          <div className="label-title">
                Password:
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
        </label>
        <br />

        <label >
          <div className="label-title" style={{marginLeft:5}}>
              Confirm Password:
          </div>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          
          <div>{renderErrorMessage("pass")}</div>
        </label>


        <br />
        <button type="submit" onClick={handleLogin} className="signup-btn">
          Sign-Up
        </button>
      </form>

       </div>
       </div>

    );

    return(
       <div>
        <Header/>
              {isSubmit ? navigate("/login"):
              renderForm}
        <Footer/>
       </div>
    )
}
export default Signup;