import * as db from "../config/Database.js";

export async function searchAppointmentByDentist() {
  const query = {
    text: `select 
    A.APPID,
    A.APPDATE,
    A.APPTIME,
    A.APPSTATE,
    c.FULLNAME AS CUSTOMER_NAME,
    u.USERNAME
          from APPOINTMENT a
          join CUSTOMER c on a.CUSID = c.CUSID
          join USER_INFO u on DENID = u.USERID`,
  };
  const result = await db.executeQuery(query);
  return result[0];
}

export async function addAppointbyDentist(
  appdate,
  apptime,
  appstate,
  room,
  branch,
  cusid,
  denid
) {
  const query = {
    text: ` INSERT INTO APPOINTMENT (APPDATE, APPTIME ,APPSTATE,ROOM,BRANCH,CUSID,DENID)
                 VALUES ('${appdate}','${apptime}','${appstate}', '${room}','${branch}','${cusid}','${denid}')`,
  };
  const result = await db.executeQuery(query);
  return result[0];
}

export async function searchAppointmentByCustomer() {
  const query = {
    text: `select 
    A.APPID,
    A.APPDATE,
    A.APPTIME,
    A.APPSTATE,
    c.FULLNAME AS CUSTOMER_NAME
          from APPOINTMENT a
          join CUSTOMER c on a.CUSID = c.CUSID`,
  };
  const result = await db.executeQuery(query);
  return result[0];
}

export async function searchAppointmentByDentalClinic() {
  const query = {
    text: `select 
    A.APPID,
    A.APPDATE,
    A.APPTIME,
    A.APPSTATE,
    c.FULLNAME AS CUSTOMER_NAME,
    D.DENTALNAME 
          from APPOINTMENT A
          join CUSTOMER c on a.CUSID = c.CUSID
          join DENTAL_CLINIC D on A.BRANCH = D.DENTALID`,
  };
  const result = await db.executeQuery(query);
  return result[0];
}

export async function searchAppointmentByDate(date) {
  console.log(date);
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
          join USER_INFO U on U.USERID = A.DENID AND U.USERTYPE = 'DENTIST'`,
  };
  const result = await db.executeQuery(query);
  return result[0];
}

export async function getAppointmentById(id) {
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
          join USER_INFO U on U.USERID = A.DENID AND U.USERTYPE = 'DENTIST'
          where APPID = ${id}`,
  };
  const result = await db.executeQuery(query);
  return result[0];
}

export async function editAppointment(appointment) {
  console.log(appointment);
  const query = {
    text: `UPDATE APPOINTMENT SET APPSTATE = '${appointment.state}', ROOM = '${appointment.room}', BRANCH = ${appointment.branch}, DENID = '${appointment.dentist}', APPDATE = '${appointment.date}', APPTIME = '${appointment.time}' WHERE APPID = ${appointment.appid}`,
  };
  const result = await db.executeQuery(query);
  console.log(result);
  return result;
}
