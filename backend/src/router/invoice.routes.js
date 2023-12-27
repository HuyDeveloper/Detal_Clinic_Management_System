import {Router} from "express";
import * as invoiceController from "../controller/invoice.controller.js";
const router = Router();

router.get('/', invoiceController.getAllInvoiceController);
router.get('/:id', invoiceController.getInvoiceByIdController);
export default router;