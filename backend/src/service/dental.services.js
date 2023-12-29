import * as db from "../config/Database.js";

export const getAllRoomByDental = async (id) => {
  const query = { text: `SELECT * FROM ROOM WHERE DENTALID = ${id}` };
  const result = await db.executeQuery(query);
  return result[0];
};

export const getAllModePayment = async () => {
  const query = { text: `SELECT * FROM MODE_PAYMENT` };
  const result = await db.executeQuery(query);
  return result[0];
};

export const createDentalProblem = async (data) => {
  const query = {
    text: `INSERT INTO DENTAL_PROBLEM (CUSID, DESCRIPTION) VALUES ('${data.cusId}', '${data.description}')`,
  };
  const result = await db.executeQuery(query);
  return result[0];
};
