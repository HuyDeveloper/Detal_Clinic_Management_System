import { Router } from "express";
import {
  getAllRoomByDental,
  getAllModePayment,
} from "../controller/dental.controllers.js";

const router = Router();

router.get("/modepayment", getAllModePayment);
router.get("/:id", getAllRoomByDental);

export default router;
