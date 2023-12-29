import { Router } from "express";
import {
  getAllRoomByDental,
  getAllModePayment,
  createDentalProblem,
} from "../controller/dental.controllers.js";

const router = Router();

router.get("/modepayment", getAllModePayment);
router.get("/:id", getAllRoomByDental);
router.post("/create-dental-problem", createDentalProblem);

export default router;
