import express from "express";
import { CreateHotel, DeleteHotel, GetHotel, GetHotelNorm, GetHotels, UpdateHotel, countHotel } from "../controllers/HotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/",verifyAdmin, CreateHotel)
//update
router.put("/:id", UpdateHotel)
//delete
router.delete("/:id",verifyAdmin, DeleteHotel)
//get
router.get("/fnd/:id", GetHotel)
//getAll
router.get("/", GetHotels)
router.get("/norm", GetHotelNorm)
router.get("/count", countHotel)

export default router