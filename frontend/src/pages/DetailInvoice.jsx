
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
  import { useState,useContext,useEffect } from "react";
  import { AuthContext } from "../contexts/AuthContext";
  import "../style/Form.css";
  import Header from "../components/Header";
  import axios from "axios";
  import { useNavigate } from "react-router-dom";
  import "../style/Loginform.css";
  import Footer from "../components/Footer";
  function convertDate(dateString) {
    const convertedDate = new Date(dateString);
    return convertedDate.toLocaleDateString("en-US"); // Chuyển đổi thành "MM/DD/YYYY"
  }
  
  
  export default function DetailInvoice() {

      
      const{invoiceID}=useContext(AuthContext);
      console.log(invoiceID);
      
      const [data, setData] = useState([]);
        const dateString = "2022-12-12T00:00:00.000Z";
        const convertedDate = new Date(dateString);

        console.log(convertedDate);
        function convertTime(dateString) {
            const date = new Date(dateString);
            const hours = date.getUTCHours().toString().padStart(2, "0");
            const minutes = date.getUTCMinutes().toString().padStart(2, "0");
            return `${hours}:${minutes}`;
        }
      useEffect(() => {
        axios
          .get(`http://localhost:3000/invoice/${invoiceID}`)
          .then((response) => {
            // Chuyển đổi dữ liệu trước khi cập nhật state
            const convertedData = response.data.invoice.map((item) => ({
              ...item,
              PAIDTIME: convertTime(item.PAIDTIME),
                TIMEOFREEX: convertDate(item.TIMEOFREEX),
              // Thêm các trường chuyển đổi khác nếu cần
            }));
    
            // console.log(convertedData[0].INVOICEID);
       
            setData(convertedData);
            
          })
          .catch((error) => {
            console.error("Error fetching data:", error.message);
          });
      }, []);

      console.log(data[0]);  



    return (
      <section style={{ backgroundColor: '#eee' }}>
          <Header />
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol>
              <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                <MDBBreadcrumbItem>
                  <a href="#">Invoice</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>Detail Invoice</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>
  
          <MDBRow>
           
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>INVOICEID</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                        {/* <MDBCardText className="text-muted">{data[0].INVOICEID}</MDBCardText> */}
              
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>TOTALTOOTHPRICE</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                    {/* <MDBCardText className="text-muted">{data[0].TOTALTOOTHPRICE}</MDBCardText> */}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>TOTALPRICEMEDICINE</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                    {/* <MDBCardText className="text-muted">{data[0].TOTALPRICEMEDICINE}</MDBCardText> */}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>TOTALPRICE</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                    {/* <MDBCardText className="text-muted">{data[0].TOTALPRICE}</MDBCardText> */}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>PAID</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                    {/* <MDBCardText className="text-muted">{data[0].PAID}</MDBCardText> */}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>PAID</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                    {/* <MDBCardText className="text-muted">{data[0].PAID}</MDBCardText> */}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>CHANGE</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                    {/* <MDBCardText className="text-muted">{data[0].CHANGE}</MDBCardText> */}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>TIMEOFREEX</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                    {/* <MDBCardText className="text-muted">{data[0].TIMEOFREEX}</MDBCardText> */}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>TREATMENTSTATE</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                    {/* <MDBCardText className="text-muted">{data[0].TREATMENTSTATE}</MDBCardText> */}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>FULLNAME</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                    {/* <MDBCardText className="text-muted">{data[0].FULLNAME}</MDBCardText> */}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>NOTE</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                    {/* <MDBCardText className="text-muted">{data[0].NOTE[0]}</MDBCardText> */}
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
                  <button type="submit" onClick={()=>null} className="login-btn" style={{marginLeft:300}}>
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
        <button type="submit" onClick={()=>null} className="login-btn"/>
        <Footer/>
      </section>
    );
  }