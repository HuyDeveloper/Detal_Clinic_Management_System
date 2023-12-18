import Router from "express";
import * as treatmentController from "../controller/treatment.controller.js";
const router = Router();

router.post("/add", treatmentController.addTreatment);

export default router;
