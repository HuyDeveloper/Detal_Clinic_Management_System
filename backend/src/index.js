import express from "express";
import cors from "cors";
import mssql from "mssql"

const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

dotnev.config()

var sql = mssql;

var config = {
  server: SERVER,
  user: 'sa',
  password: 'suyoung02',
  database: 'DC_SYSTEM',
  port: 1433,
  options: {
    trustServerCertificate: true
  }
}

async function connectToDatabase() {
  try {
    await sql.connect(config);
    console.log('Connected to the database');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}

await connectToDatabase()

app.listen(3000);
console.log("Server running on port 3000");

