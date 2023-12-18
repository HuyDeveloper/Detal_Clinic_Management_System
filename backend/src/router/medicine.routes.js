import {Router} from "express";
import { getAllMedicineController , addMedicineController, deleteMedicineController, updateMedicineController} from "../controller/medicine.controllers.js";

const router = Router();

router.get('/', getAllMedicineController);
router.post('/', addMedicineController);
router.delete('/', deleteMedicineController);
router.put('/', updateMedicineController);




export default router;