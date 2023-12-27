// const { ConnectionPool, Request } = require('mssql');
import pkg from "mssql";
const { ConnectionPool, Request } = pkg;

// Thông tin kết nối đến cơ sở dữ liệu
const dbConfig = {
  user: "thailv",
  password: "123456",
  server: `WINDOWS-PC\\USER01`,
  database: "DC_SYSTEM",
  connectionLimit: 10,
  port: 1433,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

const poolClient = new ConnectionPool(dbConfig);

export async function executeQuery(sql) {
  let connection;

  try {
    connection = await poolClient.connect();
    const request = new Request(connection);
    const result = await request.query(sql.text);
    return result.recordsets;
  } catch (error) {
    console.error("Error during query:", error);
    throw error;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}
export default executeQuery;
