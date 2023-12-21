import * as db from "../config/Database.js"

export const getAllMedicine = async() => {
    const query = { text: `SELECT * FROM MEDICINE`};
    const result = await db.executeQuery(query)
    return result[0];
}

export const addMedicine = async(medicine) => {   
    const query = { 
        text: `insert into MEDICINE (MEDICINE, MEDICINEPRICE, TYPEOFMEDICINE) values (
        '${medicine.MEDICINE}',
        ${medicine.MEDICINEPRICE},
        '${medicine.TYPEOFMEDICINE}')`
    }; 
    db.executeQuery(query)
    return 0;
}

export const deleteMedicine = async(name) => {
    const query = { text: `delete from MEDICINE 
                    where MEDICINE = '${name}'`};
                    db.executeQuery(query);
    return 0;
}

export const updateMedicine = async(medicine, name) => {
    const query = { text: `Update MEDICINE  
                SET MEDICINE = '${medicine.MEDICINE}',
                MEDICINEPRICE = '${medicine.MEDICINEPRICE}', 
                TYPEOFMEDICINE = '${medicine.TYPEOFMEDICINE}',
                Where MEDICINE = '${name}'
               `};
    db.executeQuery(query)
    return 0;
}

