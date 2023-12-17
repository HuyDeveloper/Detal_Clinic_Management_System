import express from "express";
import  userRouter  from "./router/userRouter.js";
import medicineRouter from "./router/medicine.routes.js"

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
    this.app.route('/').get((req, res, next) => {
      console.log("here!!!!");
      res.send("hiii");
      next();
    });

    this.app.use("/user", userRouter);
    this.app.use("/medicine", medicineRouter);
  }
}

const port = 3000;
const app = new App().app;

app.listen(port, () => {
  console.log("the server is listen to port: " + port);
});