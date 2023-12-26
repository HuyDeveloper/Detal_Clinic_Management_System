import * as userDAL from "../DAL/userDAL.js";
import * as db from "../config/Database.js";

export async function getAlluser() {
  const user = await userDAL.getAlluser();
  return user;
}

export async function getAllDentist() {
  const query = {
    text: `SELECT * from [user] join DENTIST on USERID = DENTISTID`,
  };
  const result = await db.executeQuery(query);
  return result[0];
}

export async function getAllStaff() {
  const query = {
    text: `SELECT * from [user] join STAFF on USERID = STAFFID`,
  };
  const result = await db.executeQuery(query);
  return result[0];
}

export async function getuserByUserName(username) {
  const user = await userDAL.getuserByUserName(username);
  return user;
}

export async function getuserByUserInfoName(username) {
  const user = await userDAL.getuserByUserInfoName(username);
  return user;
}

export async function registerUser(username, password) {
  const registerUser = await userDAL.registerUser(username, password);
  return registerUser;
}

export async function updateUser(
  userid,
  fullname,
  nationalid,
  address,
  phonenumber,
  gender,
  usertype,
  username
) {
  const registerUser = await userDAL.updateUser(
    userid,
    fullname,
    nationalid,
    address,
    phonenumber,
    gender,
    usertype,
    username
  );
  return registerUser;
}

export async function deleteAccountUser(username) {
  const registerUser = await userDAL.deleteAccountUser(username);
  return registerUser;
}

export async function ManageAccountUser(username, isactived) {
  const registerUser = await userDAL.ManageAccountUser(username, isactived);
  return registerUser;
}

export async function getAllPatient() {
  const query = {
    text: `select * from CUSTOMER`,
  };
  const result = await db.executeQuery(query);
  return result[0];
}

export async function createPatient(payload) {
  const query = {
    text: `INSERT INTO CUSTOMER (USERNAME, FULLNAME, ADDRESS, PHONENUMBER, GENDER, DOB) VALUES (
            'username',
            '${payload.fullname}',
            '${payload.address}',
            '${payload.phonenumber}',
            '${payload.gender}',
            '${payload.dob}')`,
  };
  const result = await db.executeQuery(query);
  return result[0];
}

export async function getAllBranch(payload) {
  const query = {
    text: `select * from DENTAL_CLINIC`,
  };
  const result = await db.executeQuery(query);
  return result[0];
}

export async function editPatient(patient) {
  console.log(patient);
  const query = {
    text: `UPDATE CUSTOMER
    SET FULLNAME = '${patient.fullname}',
    ADDRESS = '${patient.address}',
    PHONENUMBER = '${patient.phonenumber}',
    GENDER = '${patient.gender}',
    DOB = '${patient.dob}'
    WHERE CUSID = '${patient.cusid}'`,
  };
  const result = await db.executeQuery(query);
  return result[0];
}
