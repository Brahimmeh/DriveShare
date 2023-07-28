import User from "../models/User.js";
  export const UpdateUser = async (req, res, next) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body}, {new:true})
    
    try {
        res.status(200).json(updatedUser);
        
    } catch (err) {
        next(err);
    }
  };

  export const DeleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User Deleted");
        
    } catch (err) {
        next(err);
    }
  };

  export const GetUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user);
        
    } catch (err) {
        next(err);
    }
  };

  export const GetUsers = async (req, res, next) => {
    try {
        const Users = await User.find()
        res.status(200).json(Users);
        
    } catch (err) {
        next(err);
    }
  };