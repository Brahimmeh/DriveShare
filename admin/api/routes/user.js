import express from "express";
import { DeleteUser, GetUser, GetUsers, UpdateUser } from "../controllers/UserController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";


const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//   res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//   res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//   res.send("hello admin, you are logged in and you can delete all accounts")
// })

//update
router.put("/:id", UpdateUser)
//delete
router.delete("/:id",DeleteUser)
//get
router.get("/:id", GetUser)
//getAll
router.get("/", GetUsers)


export default router