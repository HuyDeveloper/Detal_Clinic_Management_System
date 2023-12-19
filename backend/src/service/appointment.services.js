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

export async function updateAppointment(id, appointment) {
  const query = {
    text: `update APPOINTMENT set APPSTATE = ${appointment.appstate}, ROOM = ${appointment.room}, BRANCH = ${appointment.branch}, DENID = ${appointment.dentist}  where APPID = ${id}`,
  };
  const result = await db.executeQuery(query);
  console.log(result);
  return result;
}
export async function getAllAppointment() {
  const query = {
    text: `select 
    A.APPID,
    A.APPDATE,
    A.APPTIME,
    A.APPSTATE,
    D.DENTALNAME AS DENTAL_CLINIC_NAME,
    U.FULLNAME AS DENTIST_NAME,
    C.FULLNAME AS CUSTOMER_NAME,
    R.ROOMID,
    D.DENTALNAME
          from APPOINTMENT A
          join ROOM R on R.ROOMID = A.ROOM
          join CUSTOMER C on C.CUSID = A.CUSID
          join DENTAL_CLINIC D on D.DENTALID = A.BRANCH
          join [USER] U on U.USERID = A.DENID AND U.USERTYPE = 'DENTIST'`,
  };
  const result = await db.executeQuery(query);
  return result[0];
}
