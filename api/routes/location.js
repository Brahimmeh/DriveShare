import express from "express";
import { CreateLocation, DeleteLocation, GetLocation, GetLocations, UpdateLocation } from "../controllers/LocationController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/", CreateLocation)
//update
router.put("/:id", UpdateLocation)
//delete
router.delete("/:id", DeleteLocation)
//get
router.get("/:id", GetLocation)
//getAll
router.get("/", GetLocations)

export default router