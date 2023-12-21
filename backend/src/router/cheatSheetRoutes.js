
import * as cheatsheetService from '../service/cheatsheetService.js';
import Router from "express";

const router = Router();

router.get('/ACCOUNT', cheatsheetService.ACCOUNT);
router.get('/USER', cheatsheetService.USER);
router.get('/CUSTOMER', cheatsheetService.CUSTOMER);
router.get('/DENTAL_CLINIC', cheatsheetService.DENTAL_CLINIC);
router.get('/ROOM', cheatsheetService.ROOM);
router.get('/APPOINTMENT', cheatsheetService.APPOINTMENT);
// router.get('/TOOTH', cheatsheetService);  -> Đã viết
router.get('/TREATMENT', cheatsheetService.TREATMENT);
router.get('/SELECT_TREATMENT', cheatsheetService.SELECT_TREATMENT);
// router.get('/SURFACE_POSITION', cheatsheetService.);  -> Đã viết
router.get('/TOOTH_PRICE', cheatsheetService.TOOTH_PRICE);
// router.get('/SELECT_TOOTH', cheatsheetService);  --> không hợp lý
router.get('/DENTAL_PROBLEM', cheatsheetService.DENTAL_PROBLEM);
router.get('/MEDICINE', cheatsheetService.MEDICINE);
// router.get('/DETAIL_MEDICINE', cheatsheetService); --> không hợp lý
// router.get('/MODE_PAYMENT', cheatsheetService);   --> Đã Viết
router.get('/INVOICE', cheatsheetService.INVOICE);



export default router;