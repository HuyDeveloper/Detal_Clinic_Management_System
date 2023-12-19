import * as db from "../config/Database.js"

export const getAllRoomByDental = async(id) => {
    const query = { text: `SELECT * FROM ROOM WHERE DENTALID = ${id}`};
    const result = await db.executeQuery(query)
    return result[0];
}