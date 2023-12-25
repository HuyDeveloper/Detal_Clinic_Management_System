import { Router } from "express";
import * as treatmentController from "../controller/treatment.controller.js";

const router = Router();
router.get("/get-all-treatment", treatmentController.getAllTreatments);

router.get("/customer/:id", treatmentController.getSelectTreatmentByCusId);
router.post("/add", treatmentController.addTreatment);
router.post("/createInvoice", treatmentController.createInvoice);
router.get("/all-tooth", treatmentController.getAllTooth);
router.get("/all-surface", treatmentController.getAllSurface);
router.get("/:id", treatmentController.getDetailSelectTreatmentById);
router.get("/detalProblem/:id", treatmentController.getDetailProblemById);

router.get("/invoiceByStid/:id", treatmentController.getInvoiceByStid);
export default router;
