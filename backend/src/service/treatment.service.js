import * as db from "../config/Database.js";

export async function addTreatment(payload) {
  console.log(payload);
  const query = {
    text: `insert into SELECT_TREATMENT (NOTE, TIMEOFREEX, DENID, CUSID, TREID, TREATMENTSTATE) OUTPUT INSERTED.STID values (
            '${payload.note}',
            '${payload.timeofreex}',
            ${payload.denid},
            ${payload.cusid},
            ${payload.treid},
            'INIT')`,
  };
  const result = await db.executeQuery(query);
  return result;
}

export async function addTooth(stID, payload, tooth_price) {
  const query = {
    text: `insert into SELECT_TOOTH (STID, TOOTHID, SURFACE, TOOTHPRICE ) values (
            ${stID},
            ${payload.toothid},
            '${payload.surface}',
            ${tooth_price})`,
  };
  const result = await db.executeQuery(query);
  return result;
}

export async function addMedicine(stID, payload) {
  const queryMedicinePrice = {
    text: `select MEDICINEPRICE from MEDICINE where MEDICINE = '${payload.medicine}'`,
  };
  const medicinePrice = await db.executeQuery(queryMedicinePrice);
  const total = medicinePrice[0][0].MEDICINEPRICE * payload.quantity;
  console.log(total);
  const query = {
    text: `insert into DETAIL_MEDICINE (STID , MEDICINE , QUANTITY , MEDICINEPRICE ) values (
                ${stID},
                '${payload.medicine}',
                ${payload.quantity},
                ${total})`,
  };
  const result = await db.executeQuery(query);
  return result;
}

export async function createInvoice(invoice) {
  const {
    mpid,
    paid,
    note,
    totalToothPrice,
    totalMedicinePrice,
    stid,
    totalprice,
    change,
  } = invoice;
  const query = {
    text: `insert into INVOICE (MPID , TOTALTOOTHPRICE, TOTALPRICEMEDICINE , STID, TOTALPRICE, PAID,CHANGE, NOTE) values (
                ${mpid},
                ${totalToothPrice},
                ${totalMedicinePrice},
                ${stid},
                ${totalprice},
                ${paid},
                ${change},
                '${note}')`,
  };
  const result = await db.executeQuery(query);
  return result;
}


export async function getAllTreatments() {
  const query = {
    text: `select * from TREATMENT`,
  };
  const result = await db.executeQuery(query);
  return result;
}

export async function getAllTooth() {
  const query = {
    text: `select * from TOOTH`,
  };
  const result = await db.executeQuery(query);
  return result;
}

export async function getAllSurface() {
  const query = {
    text: `select * from SURFACE_POSITION`,
  };
  const result = await db.executeQuery(query);
  return result;
}

export async function findToothPriceInTOOTH_PRICE(treid, toothid) {
  const query = {
    text: `select CURRENTPRICE from TOOTH_PRICE where TOOTHID = ${toothid} and TREATMENTID = ${treid}`,
  };
  const result = await db.executeQuery(query);
  return result;
}
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
