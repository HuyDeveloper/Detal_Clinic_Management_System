import * as data from '../dataCheatSheet.js'
import fs from "fs";

export async function ACCOUNT(req, res) {

    const result = [];
        for (const e of data.data) {
            const query = `
                INSERT INTO account (username, password, isactived)
                VALUES ('${e.USERNAME}', '${e.PASSWORD}', '${e.ISACTIVED}')
            `;
            result.push(query)
        }
        const sql = result.join('\n');

        console.log(sql);
        fs.writeFile('ACCOUNT.txt', sql,  function(err) {
            if (err) {
                return console.error(err);
            }
        })
        res.status(201).json('success');
}

export async function USER (req, res) {

    const result = [];
        for (const e of data.data) {
            e.PHONENUMBER = e.PHONENUMBER.replace(/-/g, '');
            const query = `
                INSERT INTO USER_INFO  (FULLNAME , NATIONALID , ADDRESS	,PHONENUMBER ,GENDER ,USERTYPE ,USERNAME )
                VALUES ('${e.FULLNAME}', '${e.NATIONALID}', '${e.ADDRESS}','${e.PHONENUMBER}', '${e.GENDER}', '${e.USERTYPE}','${e.USERNAME}')
            `;
            result.push(query)
        }
        const sql = result.join('\n');

        console.log(sql);
        fs.writeFile('USER.txt', sql,  function(err) {
            if (err) {
                return console.error(err);
            }
        })
        res.status(201).json('success');

}



export async function CUSTOMER(req, res) {

    const result = [];
        for (const e of data.data) {
            e.PHONENUMBER = e.PHONENUMBER.replace(/-/g, '');
            const query = `
                INSERT INTO CUSTOMER (FULLNAME , ADDRESS, PHONENUMBER,GENDER,DOB )
                VALUES ('${e.FULLNAME}', '${e.ADDRESS}', '${e.PHONENUMBER}','${e.GENDER}', '${e.DOB}')
            `;
            result.push(query)
        }
        const sql = result.join('\n');

        console.log(sql);
        fs.writeFile('CUSTOMER.txt', sql,  function(err) {
            if (err) {
                return console.error(err);
            }
        })
        res.status(201).json('success');
}

export async function DENTAL_CLINIC(req, res) {

    const result = [];
        for (const e of data.data) {
                const query = `
                    INSERT INTO DENTAL_CLINIC (DENTALNAME, ADDRESS)
                    VALUES ('${e.DENTALNAME}', '${e.ADDRESS}')
                `;
                result.push(query)
        }
        const sql = result.join('\n');

        console.log(sql);
        fs.writeFile('DENTAL_CLINIC.txt', sql,  function(err) {
            if (err) {
                return console.error(err);
            }
        })
        res.status(201).json('success');
}



export async function ROOM(req, res) {

    const result = [];
        for (const e of data.data) {
            if(e.ID % 3 ==0){
                let ROOMID = '';
                if(e.ROOMID % 2 == 0 ){
                     ROOMID = 'R' + e.ROOMID.toString()
                }
                else{
                    ROOMID = 'L' + e.ROOMID.toString()
                }
                const query = `
                    INSERT INTO ROOM (ROOMID , FLOOR ,DENTALID)
                    VALUES ('${ROOMID}', '${e.FLOOR}','${e.ID}')
                `;
                result.push(query)
            }
        }
        const sql = result.join('\n');

        console.log(sql);
        fs.writeFile('ROOM.txt', sql,  function(err) {
            if (err) {
                return console.error(err);
            }
        })
        res.status(201).json('success');
}


export async function APPOINTMENT(req, res) {

    const result = [];
    let ROOMID = '';
        for (const e of data.data) {
            if(e.ID % 3 ==0){
                if(e.ROOMID % 2 == 0 ){
                    ROOMID = 'R' + e.ROOMID.toString()
               }
               else{
                   ROOMID = 'L' + e.ROOMID.toString()
               }
                const query = `
                INSERT INTO APPOINTMENT (APPDATE, APPTIME ,APPSTATE,ROOM,BRANCH,CUSID,DENID)
                VALUES ('${e.APPDATE}', '${e.APPTIME}','${e.APPSTATE}', '${ROOMID}','${e.ID}', '${e.ID}','${e.ID}')
            `;
            result.push(query)
            }
        }
        const sql = result.join('\n');

        fs.writeFile('APPOINTMENT.txt', sql,  function(err) {
            if (err) {
                return console.error(err);
            }
        })
        res.status(201).json('success');
}



export async function TREATMENT(req, res) {

    const result = [];
        for (const e of data.data) {
                const query = `
                    INSERT INTO TREATMENT (TITLE , DESCRIPTION)
                    VALUES ('${e.TITLE}', '${e.DESCRIPTION}')
                `;
            result.push(query)
        }
        const sql = result.join('\n');

        console.log(sql);
        fs.writeFile('TREATMENT.txt', sql,  function(err) {
            if (err) {
                return console.error(err);
            }
        })
        res.status(201).json('success');
}

export async function SELECT_TREATMENT(req, res) {

    const result = [];
        for (const e of data.data) {
            if(e.ID % 3 ==0){
                const query = `
                    INSERT INTO SELECT_TREATMENT (NOTE,TIMEOFREEX,DENID,CUSID,TREID,TREATMENTSTATE)
                    VALUES ('${e.NOTE}', '${e.TIMEOFREEX}','${e.ID}', '${e.ID}','${e.ID}', '${e.TREATMENTSTATE}')
                `;
            result.push(query)
            }
        }
        const sql = result.join('\n');

        console.log(sql);
        fs.writeFile('SELECT_TREATMENT.txt', sql,  function(err) {
            if (err) {
                return console.error(err);
            }
        })
        res.status(201).json('success');
}


export async function TOOTH_PRICE(req, res) {

    const result = [];
        for (const e of data.data) {
                const query = `
                    INSERT INTO TOOTH_PRICE (TREATMENTID , TOOTHID , CURRENTPRICE)
                    VALUES ('${e.ID}', '1', '${e.CURRENTPRICE}')
                `;
            result.push(query)
        }
        const sql = result.join('\n');

        console.log(sql);
        fs.writeFile('TOOTH_PRICE.txt', sql,  function(err) {
            if (err) {
                return console.error(err);
            }
        })
        res.status(201).json('success');
}


// export async function SELECT_TOOTH(req, res) {

//     const result = [];
//         for (const e of data.data) {
//                 const query = `
//                     INSERT INTO SELECT_TOOTH (TREATMENTID , TOOTHID , CURRENTPRICE)
//                     VALUES ('${e.ID}', '1', '${e.CURRENTPRICE}')
//                 `;
//             result.push(query)
//         }
//         const sql = result.join('\n');

//         console.log(sql);
//         fs.writeFile('input.txt', sql,  function(err) {
//             if (err) {
//                 return console.error(err);
//             }
//         })
//         res.status(201).json('success');
// }


export async function DENTAL_PROBLEM(req, res) {

    const result = [];
        for (const e of data.data) {
                const query = `
                    INSERT INTO DENTAL_PROBLEM (CUSID , DESCRIPTION)
                    VALUES ('${e.ID}','${e.DESCRIPTION}')
                `;
            result.push(query)
        }
        const sql = result.join('\n');

        console.log(sql);
        fs.writeFile('DENTAL_PROBLEM.txt', sql,  function(err) {
            if (err) {
                return console.error(err);
            }
        })
        res.status(201).json('success');
}


export async function MEDICINE(req, res) {

    const result = [];
        for (const e of data.data) {
                const query = `
                    INSERT INTO MEDICINE (MEDICINE , MEDICINEPRICE , TYPEOFMEDICINE)
                    VALUES ('Paradon${e.ID}','20','Thuoc xo')
                `;
            result.push(query)
        }
        const sql = result.join('\n');

        console.log(sql);
        fs.writeFile('MEDICINE.txt', sql,  function(err) {
            if (err) {
                return console.error(err);
            }
        })
        res.status(201).json('success');
}


// export async function DETAIL_MEDICINE(req, res) {

//     const result = [];
//         for (const e of data.data) {
//                 const query = `
//                     INSERT INTO DETAIL_MEDICINE (MEDICINE , QUANTITY  , MEDICINEPRICE)
//                     VALUES ('Panadol','20.000','Thuoc xo')
//                 `;
//             result.push(query)
//         }
//         const sql = result.join('\n');

//         console.log(sql);
//         fs.writeFile('input.txt', sql,  function(err) {
//             if (err) {
//                 return console.error(err);
//             }
//         })
//         res.status(201).json('success');
// }

export async function INVOICE(req, res) {

    const result = [];
        for (const e of data.data) {
                const query = `
                    INSERT INTO INVOICE (MPID , STID, TOTALPRICE,TOTALPRICEMEDICINE,TOTALTOOTHPRICE, PAID ,CHANGE ,NOTE)
                    VALUES ('1','1','12','12','12','12','12','${e.DESCRIPTION}')
                `;
            result.push(query)
        }
        const sql = result.join('\n');

        console.log(sql);
        fs.writeFile('INVOICE.txt', sql,  function(err) {
            if (err) {
                return console.error(err);
            }
        })
        res.status(201).json('success');
}
