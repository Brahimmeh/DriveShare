import express from "express";
import Vehicule from "../models/Vehicule.js";
import { CreateVehicule, DeleteVehicule, GetVehicule, GetVehiculeNorm, GetVehicules, UpdateVehicule, countBytype } from "../controllers/VehiculeController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/", CreateVehicule)
//update
router.put("/:id", UpdateVehicule)
//delete
router.delete("/:id", DeleteVehicule)
//get
router.get("/find/:id", GetVehicule)
//getAll
router.get("/", GetVehicules)
router.get("/norm", GetVehiculeNorm)
router.get("/countBytype", countBytype)

export default router