import * as db from "../config/Database.js"

export const getAllInvoice = async() => {
    const query = { text: `SELECT * FROM INVOICE I
    JOIN SELECT_TREATMENT S on S.STID=I.STID
    JOIN CUSTOMER C on S.CUSID=C.CUSID`};
    const result = await db.executeQuery(query)
    return result[0];
}
export const getInvoiceById = async(id) => {
    const query = { text: `use DC_SYSTEM;
    SELECT * FROM INVOICE I
    JOIN MODE_PAYMENT M on I.MPID=M.MPID
    JOIN SELECT_TREATMENT S on S.STID=I.STID
    JOIN CUSTOMER C on S.CUSID=C.CUSID
    WHERE INVOICEID  = ${id}`};
    const result = await db.executeQuery(query)
    return result[0];
}
