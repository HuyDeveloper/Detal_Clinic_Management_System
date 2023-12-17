import mssql from "mssql"

var sql = mssql;

var config = {
  server: "LAPTOP-4CMF04M0",
  user: 'sa',
  password: 'suyoung02',
  database: 'DC_SYSTEM',
  port: 1433,
  options: {
    trustServerCertificate: true
  }
}
const pool = new sql.ConnectionPool(config);
async function connectToDatabase() {
  try {
    await sql.connect(config);
    

    await pool.connect();

    // Create a request object
    
    console.log('Connected to the database');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}

await connectToDatabase()

export default pool;