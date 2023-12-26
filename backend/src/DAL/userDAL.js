
import * as db from '../config/Database.js';
import * as userSQL from '../SQL/userSQL.js';


export async function getAlluser() {
    const queryGetuserById = userSQL.getAlluser();
    const user = await db.executeQuery(queryGetuserById);
    return user;
}



export async function getuserByUserName(username) {
    const queryGetuserByUserName = userSQL.getuserByUserName(username);
    const user = await db.executeQuery(queryGetuserByUserName);
    return user;
}


export async function getuserByUserInfoName(username) {
   const querygetuserByUserInfoName = userSQL.getuserByUserInfoName(username);
   const user = await db.executeQuery(querygetuserByUserInfoName);
   return user;
}

export async function registerUser(username,password) {
   try {

     const queryGetuserByUserName = userSQL.addUser(username,password);
    await db.executeQuery(queryGetuserByUserName);
   } catch (error) {
    throw new Error("Account already exists"); 
   }
}

export async function updateUser(userid,fullname,nationalid,address ,phonenumber,gender,usertype,username) {
    try {
 
    const queryGetuserByUserName = userSQL.updateUser(userid,fullname,nationalid,address ,phonenumber,gender,usertype,username);
     await db.executeQuery(queryGetuserByUserName);
    } catch (error) {
     throw new Error("Update Fail"); 
    }
 }


 export async function deleteAccountUser(username) {
    try {
 
    const queryGetuserByUserName = userSQL.deleteAccountUser(username);
     await db.executeQuery(queryGetuserByUserName);
    } catch (error) {
     throw new Error("Delete Fail"); 
    }
 }

 export async function ManageAccountUser(username,isactived){
    try {
        
    const queryGetuserByUserName = userSQL.ManageAccountUser(username,isactived);
     await db.executeQuery(queryGetuserByUserName);
    } catch (error) {
     throw new Error("Update Status Accout Fail"); 
    }
 }