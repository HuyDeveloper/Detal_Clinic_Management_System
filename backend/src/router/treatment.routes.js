import {Router} from "express";
import {getSelectTreatmentByCusId , getDetailSelectTreatmentById} from "../controller/treatment.controllers.js";

const router = Router();

router.get('/customer/:id', getSelectTreatmentByCusId);
router.get('/:id', getDetailSelectTreatmentById);

