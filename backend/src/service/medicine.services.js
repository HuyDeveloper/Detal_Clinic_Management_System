import sql from "../db.js"

export const getAllMedicine = async() => {
    const result = await sql.query`SELECT * FROM MEDICINE`;
    return result.recordset;
}

export const addMedicine = async(medicine) => {    
    sql.query("insert into MEDICINE (MEDICINE, MEDICINEPRICE, TYPEOFMEDICINE) values ('" + medicine.MEDICINE + "', " + medicine.MEDICINEPRICE + ", '" +  medicine.TYPEOFMEDICINE + "')")
    return 0;
}

export const deleteMedicine = async(name) => {
    sql.query("delete from MEDICINE where MEDICINE = '" + name + "'");
    return 0;
}

export const updateMedicine = async(medicine, name) => {
    const query = "update MEDICINE SET MEDICINE = '" + medicine.MEDICINE + "', MEDICINEPRICE = " + medicine.MEDICINEPRICE + ", TYPEOFMEDICINE = '" + medicine.TYPEOFMEDICINE + "' where MEDICINE = '" + name + "'";
    sql.query(query)
    return 0;
}