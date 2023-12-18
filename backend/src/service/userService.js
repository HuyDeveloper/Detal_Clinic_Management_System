import * as userDAL from '../DAL/userDAL.js';
import * as db from "../config/Database.js"

export async function getAlluser() {
      const user = await userDAL.getAlluser();
      return user;
}

export async function getAllDentist() {
      const query = { 
            text: `SELECT * from [user] join DENTIST on USERID = DENTISTID`
        };
      const result = await db.executeQuery(query)
      return result[0];
}

export async function getAllStaff() {
      const query = { 
            text: `SELECT * from [user] join STAFF on USERID = STAFFID`
        };
      const result = await db.executeQuery(query)
      return result[0];
}

export async function getuserByUserName(username) {
      const user = await userDAL.getuserByUserName(username);
      return user;
}



export async function registerUser(username, password) {
      const registerUser = await userDAL.registerUser(username, password);
      return registerUser;
}


export async function updateUser(userid,fullname,nationalid,address ,phonenumber,gender,usertype,username) {
      const registerUser = await userDAL.updateUser(userid,fullname,nationalid,address ,phonenumber,gender,usertype,username) ;
      return registerUser;
}

export async function deleteAccountUser(username) {
      const registerUser = await userDAL.deleteAccountUser(username) ;
      return registerUser;
}

export async function ManageAccountUser(username, isactived) {
      const registerUser = await userDAL.ManageAccountUser(username,isactived) ;
      return registerUser;
}


