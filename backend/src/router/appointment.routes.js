import * as appointmentController from "../controller/appointment.controllers.js"
import Router from "express";

const router = Router();

router.get('/searchByDentist', appointmentController.searchAppointmentByDentist)
router.get('/searchByCustomer', appointmentController.searchAppointmentByCustomer)
router.get('/searchByDate', appointmentController.searchAppointmentByDate)
router.get('/searchByDentalClinic', appointmentController.searchAppointmentByDentalClinic)

export default router;
