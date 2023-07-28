import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import vehiculeRoute from "./routes/vehicule.js"
import hotelRoute from "./routes/hotel.js"
import userRoute from "./routes/user.js"
import locationroute from "./routes/location.js"
import pathroute from "./routes/path.js"
import reservroute from "./routes/reservation.js"
import cookieParser from "cookie-parser"
import cors from "cors"
const app = express()
dotenv.config()

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };

  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });

  app.use(cors());
//middlewares
app.use(cookieParser())
app.use(express.json());
app.use("/auth", authRoute);
app.use("/vehicule", vehiculeRoute);
app.use("/hotel", hotelRoute);
app.use("/location", locationroute);
app.use("/path", pathroute);
app.use("/user", userRoute);
app.use("/reservation", reservroute);


app.listen(8800, () => {
    connect();
    console.log("Connected to backend.");
  });