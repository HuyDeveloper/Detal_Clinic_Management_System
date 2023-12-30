import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ListAppointment from "./pages/ListAppointment.jsx";
import ListPatient from "./pages/ListPatient.jsx";
import CreatePatientRecord from "./pages/CreatePatientRecord.jsx";
import CreateTreatmentPlan from "./pages/CreateTreatmentPlan.jsx";
import DetailAppointment from "./pages/DetailAppointment.jsx";
import EditAppoitment from "./pages/EditAppointment.jsx";

import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import InforUser from "./pages/InforUser.jsx";
import MakeAppoint from "./pages/MakeAppoint.jsx";
import Medicine from "./pages/Medicine.jsx";
import EditMedicine from "./pages/EditMedicine.jsx";
import CreateMedicine from "./pages/CreateMedicine.jsx";
import ListInvoice from "./pages/ListInvoice.jsx";
import DetailInvoice from "./pages/DetailInvoice.jsx";
import ViewStaff from "./pages/ViewStaff.jsx";
import ViewDentist from "./pages/ViewDentist.jsx";
import SumAppBy from "./pages/SumAppBy.jsx";

import CreateInvoice from "./pages/CreateInvoice.jsx";
import EditPatitent from "./pages/EditPatitent.jsx";
import DetailPatient from "./pages/DetailPatient.jsx";
import InvoiceBySTID from "./pages/InvoiceBySTID.jsx";
import CreateUser from "./pages/CreateUser.jsx";
import EditTreatmentPlan from "./pages/EditTreatmentPlan.jsx";
import CreateDentalProblem from "./pages/CreateDentalProblem.jsx";
import Treatment from "./pages/Treatment.jsx";
import CreateTreatment from "./pages/CreateTreat.jsx";
import EditTreat from "./pages/EditTreat.jsx";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/all-appointments",
    element: <ListAppointment />,
  },
  {
    path: "/all-appointments/edit",
    element: <EditAppoitment />,
  },
  {
    path: "/all-appointments/detail",
    element: <DetailAppointment />,
  },
  {
    path: "/all-patients",
    element: <ListPatient />,
  },
  {
    path: "/all-patients/edit",
    element: <EditPatitent />,
  },
  {
    path: "/all-patients/detail",
    element: <DetailPatient />,
  },
  {
    path: "/detail-invoice",
    element: <InvoiceBySTID />,
  },
  {
    path: "/create-dental-problem",
    element: <CreateDentalProblem />,
  },
  {
    path: "/create-patient-records",
    element: <CreatePatientRecord />,
  },
  {
    path: "/create-staff-dentist",
    element: <CreateUser />,
  },
  {
    path: "/all-patients/create-treatment-plan",
    element: <CreateTreatmentPlan />,
  },
  {

    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/inforuser",
    element: <InforUser />,
  },
  {
    path: "/make-appoint",
    element: <MakeAppoint />,
  },
  {
    path: "/medicine",
    element: <Medicine />,
  },
  {
    path: "/medicine/edit",
    element: <EditMedicine />,
  },
  {
    path: "/medicine/create",
    element: <CreateMedicine />,
  },
  {
    path: "/invoice",
    element: <ListInvoice />,
  },
  {
    path: "/invoice/detail",
    element: <DetailInvoice />,
  },
  {
    path: "/staff",
    element: <ViewStaff />,
  },
  {
    path: "/dentist",
    element: <ViewDentist />,
  },
  {
    path: "/sumappby",
    element: <SumAppBy />,
  },
  {
    path: "/edit-treatment-plan",
    element: <EditTreatmentPlan />,
  },
  {
    path: "/create-invoice",
    element: <CreateInvoice />,
  },
  {
    path: "/treatment",
    element: <Treatment />,
  },
  {
    path: "/treatment/create",
    element: <CreateTreatment />,
  },
  {
    path: "/treatment/edit",
    element: <EditTreat />,
  },
]);
export default Router;
