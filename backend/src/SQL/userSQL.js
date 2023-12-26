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

export function getuserByUserInfoName(username){
    const query =`Select * 
                From user_info
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






//  export function getSurfaceBySpace(Spaceid:string){

//     const sql = {
//         text: `SELECT * FROM account WHERE  username =  '${Spaceid}' `,
//         values: {
//           param1: Spaceid,
//         }
//       };
//     return sql;
// }



// export function InsertReportBySurface(id:number,surfaceId:number,address:string,long:number,lat:number,report_date:Date,content:string,email:string,phone:string,state:number) {
//     const query =`INSERT INTO reports (id, surface, address, long, lat, report_date, content, email, phone, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
//                `;
//     const value = [id, surfaceId, address, long, lat, report_date, content, email, phone, state];
//     const queryObject = {
//         text: query,
//         value: value
//     };
//     return queryObject;
// }