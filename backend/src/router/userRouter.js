
import * as userController from '../controller/userController.js';

import Router from "express";

const router = Router();

router.get('/', userController.getAlluser);
router.get('/login', userController.loginUser);
router.post('/register', userController.registerUser);
router.put('/update', userController.updateUser);
router.delete('/admin',userController.deleteAccountUser);
router.put('/admin',userController.ManageAccountUser);


export default router;