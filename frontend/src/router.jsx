import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ListAppointment from "./pages/ListAppointment.jsx";
import ListPatient from "./pages/ListPatient.jsx";
import CreatePatientRecord from "./pages/CreatePatientRecord.jsx";
import CreateTreatmentPlan from "./pages/CreateTreatmentPlan.jsx";
import DetailAppointment from "./pages/DetailAppointment.jsx";
import EditAppoitment from "./pages/EditAppointment.jsx";
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
    path: "/create-patient-records",
    element: <CreatePatientRecord />,
  },
  {
    path: "/all-patients/create-treatment-plan",
    element: <CreateTreatmentPlan />,
  },
]);
export default Router;
