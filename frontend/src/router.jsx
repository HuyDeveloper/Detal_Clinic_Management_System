import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ListAppointment from "./pages/ListAppointment.jsx";
import ListPatient from "./pages/ListPatient.jsx";
import CreatePatientRecord from "./pages/CreatePatientRecord.jsx";
import CreateTreatmentPlan from "./pages/CreateTreatmentPlan.jsx";
import DetailAppointment from "./pages/DetailAppointment.jsx";
import EditAppoitment from "./pages/EditAppointment.jsx";
import CreateInvoice from "./pages/CreateInvoice.jsx";
import EditPatitent from "./pages/EditPatitent.jsx";
import DetailPatient from "./pages/DetailPatient.jsx";
import InvoiceBySTID from "./pages/InvoiceBySTID.jsx";
import CreateUser from "./pages/CreateUser.jsx";
import EditTreatmentPlan from "./pages/EditTreatmentPlan.jsx";
import CreateDentalProblem from "./pages/CreateDentalProblem.jsx";
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
    path: "/edit-treatment-plan",
    element: <EditTreatmentPlan />,
  },
  {
    path: "/create-invoice",
    element: <CreateInvoice />,
  },
]);
export default Router;
