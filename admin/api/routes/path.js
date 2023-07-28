import express from "express";
import { CreatePath, DeletePath, GetPath, GetPathNorm, GetPaths, GetPathsFeat, UpdatePath,countPath } from "../controllers/PathController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/",verifyAdmin, CreatePath)
//update
router.put("/:id", UpdatePath)
//delete
router.delete("/:id",verifyAdmin, DeletePath)
//get
router.get("/find/:id", GetPath)
//getAll
router.get("/", GetPaths)
router.get("/feat", GetPathsFeat)
router.get("/norm", GetPathNorm)
router.get("/count", countPath)

export default router