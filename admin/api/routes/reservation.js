import express from "express";
import { CreateReservation, DeleteReservation, GetReservation, GetReservations, UpdateReservation } from "../controllers/ReservController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/",CreateReservation)
//update
router.put("/:id",UpdateReservation)
//delete
router.delete("/:id",DeleteReservation)
//get
router.get("/:id", GetReservation)
//getAll
router.get("/", GetReservations)

export default router