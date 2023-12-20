import express from "express";
import userRouter from "./router/userRouter.js";
import medicineRouter from "./router/medicine.routes.js";
import appointmentRouter from "./router/appointment.routes.js";
import treatmentRouter from "./router/treatment.routes.js";
import dentalRouter from "./router/dental.routes.js";
import cors from "cors";
class App {
  constructor() {
    this.app = express();
    this.plugin();
    this.routes();
  }

  plugin() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.app.route("/").get((req, res, next) => {
      console.log("here!!!!");
      res.send("hiii");
      next();
    });
    this.app.use(cors());
    this.app.use("/user", userRouter);
    this.app.use("/appointment", appointmentRouter);
    this.app.use("/medicine", medicineRouter);
    this.app.use("/treatment", treatmentRouter);
    this.app.use("/dental", dentalRouter);
  }
}

const port = 3000;
const app = new App().app;

app.listen(port, () => {
  console.log("the server is listen to port: " + port);
});
