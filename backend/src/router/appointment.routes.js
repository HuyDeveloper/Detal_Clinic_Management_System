import * as appointmentController from "../controller/appointment.controllers.js";
import Router from "express";

const router = Router();

router.get(
  "/searchByDentist",
  appointmentController.searchAppointmentByDentist
);
router.post(
  "/addAppoint",
  appointmentController.addAppointbyDentist
);
router.get(
  "/searchByCustomer",
  appointmentController.searchAppointmentByCustomer
);
router.put("/edit-appointment", appointmentController.editAppointment);
router.get("/searchByDate", appointmentController.searchAppointmentByDate);
router.get(
  "/searchByDentalClinic",
  appointmentController.searchAppointmentByDentalClinic
);

//get all appointment
router.get("/all", appointmentController.getAllAppointment);
//Delete appointment
router.delete("/:id", appointmentController.deleteAppointment);
//Edit appointment
router.put("/:id", appointmentController.updateAppointment);

//get detail appointment
router.get("/detail/:id", appointmentController.getAppointmentById);
export default router;
