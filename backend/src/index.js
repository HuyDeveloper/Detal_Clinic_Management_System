import express from "express";
import cors from "cors";
import medicineRouter from "./route/medicine.routes.js"
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json())
app.use('/medicine', medicineRouter)
app.listen(3000);
console.log("Server running on port 3000");

