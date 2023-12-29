import { Router } from "express";
import {
  getAllMedicineController,
  addMedicineController,
  deleteMedicineController,
  updateMedicineController,
  getDetailMedicineController,
  getDetailToothController,
} from "../controller/medicine.controllers.js";

const router = Router();

router.get("/", getAllMedicineController);
router.post("/", addMedicineController);
router.delete("/", deleteMedicineController);
router.put("/", updateMedicineController);

router.get("/detail/:stid", getDetailMedicineController);
router.get("/detail-tooth/:stid", getDetailToothController);

export default router;
