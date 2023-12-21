export function getAlluser(){
    const query =`Select * 
                From account
               `;
    const queryObject = {
        text: query,
    };
    return queryObject;
}


export function getuserByUserName(username){
    const query =`Select * 
                From account
                Where username = '${username}'
               `;
    const queryObject = {
        text: query,
    };
    return queryObject;
}



export function addUser(username,password){
    const query =`Insert  
                Into account (username,password,isactived)
                values ('${username}','${password}','yes')
               `;
    const queryObject = {
        text: query,
    };
    return queryObject;
}


export function updateUser(userid,fullname,nationalid,address ,phonenumber,gender,usertype,username){
    const query =`Update user_info  
                SET fullname = '${fullname}',
                nationalid = '${nationalid}', 
                address = '${address}',
                phonenumber = '${phonenumber}',
                gender =   '${gender}' ,
                usertype = '${usertype}'
                Where userid = '${userid}' and username = '${username}'
               `;
    const queryObject = {
        text: query,
    };
    return queryObject;
}


export function deleteAccountUser(username){
    const query =`DELETE   
                FROM  account
                where username = '${username}'
               `;
    const queryObject = {
        text: query,
    };
    return queryObject;
}

export function ManageAccountUser(username, isactived){
    const query =`Update account
                Set isactived = '${isactived}'
                Where username = '${username}'
               `;
    const queryObject = {
        text: query,
    };
    return queryObject;
}


