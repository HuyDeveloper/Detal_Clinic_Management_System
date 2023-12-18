import * as db from "../config/Database.js";

export async function searchAppointmentByDentist() {
  const query = {
    text: `select *
          from APPOINTMENT 
          join [USER] on DENID = USERID`,
  };
  const result = await db.executeQuery(query);
  return result[0];
}

export async function searchAppointmentByCustomer() {
  const query = {
    text: `select *
          from APPOINTMENT a
          join CUSTOMER c on a.CUSID = c.CUSID`,
  };
  const result = await db.executeQuery(query);
  return result[0];
}

export async function searchAppointmentByDentalClinic() {
  const query = {
    text: `select *
          from APPOINTMENT 
          join DENTAL_CLINIC on BRANCH = DENTALID`,
  };
  const result = await db.executeQuery(query);
  return result[0];
}

export async function searchAppointmentByDate(date) {
  const query = {
    text: `select *
          from APPOINTMENT 
          where APPDATE = ${date}`,
  };
  const result = await db.executeQuery(query);
  return result[0];
}

export async function deleteAppointment(id) {
  const query = {
    text: `delete from APPOINTMENT where APPID = ${id}`,
  };
  const result = await db.executeQuery(query);
  return result;
}

export async function updateAppointment(id) {
  const query = {
    text: `update APPOINTMENT set APPSTATE = 1 where APPID = ${id}`,
  };
  const result = await db.executeQuery(query);
  console.log(result);
  return result;
}
