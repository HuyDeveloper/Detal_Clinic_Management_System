import {Router} from "express";
import * as treatmentController from "../controller/treatment.controller.js";

const router = Router();

router.get('/customer/:id', treatmentController.getSelectTreatmentByCusId);
router.get('/:id', treatmentController.getDetailSelectTreatmentById);
router.post("/add", treatmentController.addTreatment);
router.post("/createInvoice", treatmentController.createInvoice);

router.get("/all", treatmentController.getAllTreatments);

router.get("/all-tooth", treatmentController.getAllTooth);
router.get("/all-surface", treatmentController.getAllSurface);
export default router;
