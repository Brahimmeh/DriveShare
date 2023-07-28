import Location from "../models/Location.js";
export const CreateLocation = async (req, res, next) => {
    const newLocation = new Location(req.body);
    
    try {
        const savedLocation = await newLocation.save();
        res.status(200).json(savedLocation);
        
    } catch (err) {
        next(err);
    }
  };
  export const UpdateLocation = async (req, res, next) => {
    const updatedLocation = await Location.findByIdAndUpdate(req.params.id, { $set: req.body}, {new:true})
    
    try {
        res.status(200).json(updatedLocation);
        
    } catch (err) {
        next(err);
    }
  };

  export const DeleteLocation = async (req, res, next) => {
    try {
        await Location.findByIdAndDelete(req.params.id)
        res.status(200).json("Location Deleted");
        
    } catch (err) {
        next(err);
    }
  };

  export const GetLocation = async (req, res, next) => {
    try {
        const location = await Location.findById(req.params.id)
        res.status(200).json(location);
        
    } catch (err) {
        next(err);
    }
  };

  export const GetLocations = async (req, res, next) => {
    try {
        const Locations = await Location.find()
        res.status(200).json(Locations);
        
    } catch (err) {
        next(err);
    }
  };