import { useState,useContext,useEffect } from "react";
import "../style/Form.css";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/Loginform.css";
import Footer from "../components/Footer";
import { AuthContext } from "../contexts/AuthContext.jsx";
// User Login info

  
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
const Login = () => {
    const navigate = useNavigate();
    const { user,setUser } = useContext(AuthContext);
    const { isValid,setIsValid } = useContext(AuthContext);
    let nameSub='';
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [errorMess,setErrorMess] = useState("");
    const [isSubmit,setIsSubmit] = useState(false);
    // Generate JSX code for error message
        const renderErrorMessage = (name) =>
        name === errorMess.name && (
        <div className="error">{errorMess.message}</div>
);
    const HandleLogin=(event)=>{
        //handle Login

        event.preventDefault();
        if(username === "" || password === ""){
            alert("Username and password cannot be empty");
            return;
        }
        

          
          axios.post("http://localhost:3000/user/login",{
            username:username,
            password:password
          }).then((response) => {
            nameSub=response.data.user_info[0].USERNAME;
            console.log("user");
            console.log(nameSub);
            console.log("response");
            console.log(response.data.user_info[0].USERNAME);
            setIsValid(true);
            setUser(response.data.user_info[0]);
            localStorage.setItem("user",JSON.stringify(response.data.user_info[0]));
              
            setIsSubmit(true)
                // Invalid password
           
          })
          .catch((error) => {
            console.log(error);
            setErrorMess({ name: "pass", message: errors.pass });
          
          });
          
        
        
        // Compare user info

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
            <h2 style={{color:"#0C5B36"}}>Login</h2>
      <form>
        <label >
            
          <div className="label-title">
                Username:
          </div>
          <input style={{width:"200px"}}
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
          <input style={{width:"200px"}}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {renderErrorMessage("pass")}
        </label>
        <br />
        <button type="submit" onClick={HandleLogin} className="login-btn" style={{marginLeft:"300px"}}>
          Login
        </button>

      </form>
        <div className="text">
            Dont have an account?
        </div>
        <div className="signup-btn">
            <button onClick={()=>navigate("/signup")}>Sign Up</button>
        </div>

       </div>
       </div>

    );

    return(
       <div>
        <Header/>
              {isSubmit ? navigate("/") : renderForm}
        <Footer/> 
       </div>
    )
}

export default Login;