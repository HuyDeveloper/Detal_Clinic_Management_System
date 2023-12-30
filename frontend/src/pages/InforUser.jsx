
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem

} from 'mdb-react-ui-kit';
import { useState } from "react";
import "../style/Form.css";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/Loginform.css";
import { AuthContext } from "../contexts/AuthContext.jsx";
import { useContext } from "react";
import Footer from "../components/Footer";


export default function InforUser() {
    const navigate = useNavigate();
    const {user,setUser}=useContext(AuthContext);
    const [name,setName] = useState("");
    const [address,setAddress] = useState("");
    const [phonenumber,setPhonenumber] = useState("");
    const  [gender,setGender] = useState("");
    const [nationalId,setNationalId] = useState("");
    const [formData, setFormData] = useState({
      userid: "",
      fullname: "",
      nationalid: "",
      address: "",
      phonenumber: "",
      gender: "",
      usertype: "",
      username: "",


  
    });

    
    const handleSubmit=()=>{
      if(gender!="Female"&&gender!="Male"){
        alert("Gender value invalid")
        return;
      }
      if(phonenumber.length!=10){
        alert("Phone number must contain 10 digits")
        return;
      }
      axios
      .put("http://localhost:3000/user/update",{
        userid: user.USERID,
        fullname: name,
        nationalid: nationalId,
        address: address,
        phonenumber: phonenumber,
        gender: gender,
        usertype: user.USERTYPE,
        username: user.USERNAME,
      })
      .then((response) => {
        console.log(response);
        setUser({ USERID: user.USERID,
          FULLNAME: name,
          NATIONALID: nationalId,
          ADDRESS: address,
          PHONENUMBER: phonenumber,
          GENDER: gender,
          USERTYPE: user.USERTYPE,
          USERNAME: user.USERNAME});
        alert("Update Info successfully!");
        navigate("/");
      });

     }
  return (
    <section style={{ backgroundColor: '#eee' }}>
        <Header />
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">{user.FULLNAME}</p>
                <p className="text-muted mb-4">{user.ADDRESS}</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">Message</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

           
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <input
                        style={{border:"none",outline:"none",}}
                        type="text"
                        name="fullname"
                        placeholder={user.FULLNAME}
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
            
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <input
                        style={{border:"none",outline:"none",}}
                        type="text"
                        name="address"
                        placeholder={user.ADDRESS}
                        value={address}
                        onChange={(e)=>setAddress(e.target.value)}
                    />
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone Number</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <input
                        style={{border:"none",outline:"none",}}
                        type="text"
                        name="phonenumber"
                        placeholder={user.PHONENUMBER}
                        value={phonenumber}
                        onChange={(e)=>setPhonenumber(e.target.value)}
                    />
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Gender</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <input
                        style={{border:"none",outline:"none",}}
                        type="text"
                        name="gender"
                        placeholder={user.GENDER}
                        value={gender}
                        onChange={(e)=>setGender(e.target.value)}
                    />
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>NATIONALID</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <input
                        style={{border:"none",outline:"none",}}
                        type="text"
                        name="nationalId"
                        placeholder={user.NATIONALID}
                        value={nationalId}
                        onChange={(e)=>setNationalId(e.target.value)}
                    />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
                <button type="submit" onClick={()=>handleSubmit()} className="login-btn" style={{marginLeft:300}}>
                    Save Changes
                    </button>

            {/* <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow> */}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer/>
    </section>
  );
}