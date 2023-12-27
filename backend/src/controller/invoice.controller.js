import * as invoiceService from "../service/invoice.services.js";
export const getAllInvoiceController = async (req,res) => {
    const listInvoice = await invoiceService.getAllInvoice();
    return res.json({
        message: "Success",
        listInvoice
    })
}
export const getInvoiceByIdController = async (req,res) => {
    const id = req.params.id;
    const invoice = await invoiceService.getInvoiceById(id);
    return res.json({
        message: "Success",
        invoice
    })
}