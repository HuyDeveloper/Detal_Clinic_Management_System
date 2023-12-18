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

export async function addTooth(stID, payload) {
  const query = {
    text: `insert into SELECT_TOOTH (STID, TOOTHID, SURFACE ) values (
            ${stID},
            ${payload.toothid},
            '${payload.surface}')`,
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
