import * as userController from "../controller/userController.js";

import Router from "express";

const router = Router();

router.get("/", userController.getAlluser);
router.post("/login", userController.loginUser);
router.post("/register", userController.registerUser);
router.put("/update", userController.updateUser);
router.delete("/admin", userController.deleteAccountUser);
router.put("/admin", userController.ManageAccountUser);

router.get("/get-all-dentist", userController.getAllDentist);
router.get("/get-all-staff", userController.getAllStaff);
router.get("/get-all-branch", userController.getAllBranch);
router.get("/get-all-patient", userController.getAllPatient);
router.post("/create-patient", userController.createPatient); //create customer
router.put("/edit-patient", userController.editPatient); //edit customer
router.post("/create-staff-dentist", userController.createStafforDentist);
export default router;
