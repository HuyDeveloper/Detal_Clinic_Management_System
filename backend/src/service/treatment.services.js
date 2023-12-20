import * as db from "../config/Database.js"

export const getSelectTreatmentByCusId = async(id) => {
    const query = { text: `SELECT * FROM SELECT_TREATMENT WHERE CUSID = ${id}`};
    const result = await db.executeQuery(query)
    return result[0];
}

export const getDetailSelectTreatmentById = async(id) => {
    const query = { text: `SELECT * 
    FROM SELECT_TREATMENT se
    join CUSTOMER c on c.CUSID = se.CUSID
    join TREATMENT t on t.TREATMENTID = se.TREID
    WHERE se.STID = ${id}`};
    const result = await db.executeQuery(query)
    return result[0];
}
