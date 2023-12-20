import {Router} from "express";
import * as treatmentController from "../controller/treatment.controller.js";

const router = Router();

router.get('/customer/:id', treatmentController.getSelectTreatmentByCusId);
router.get('/:id', treatmentController.getDetailSelectTreatmentById);
router.post("/add", treatmentController.addTreatment);
router.post("/createInvoice", treatmentController.createInvoice);

export default router;
