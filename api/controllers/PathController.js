import Path from "../models/Path.js";
import Location from "../models/Location.js";

export const CreatePath = async (req, res, next) => {

    const newPath = new Path(req.body);
    const location = await Location.findById(newPath.LocationDep)
    const location1 = await Location.findById(newPath.LocationArr)
    
    try {
        if(location !=null && location1 != null)
        {
            newPath.arrname=location1.name;
            newPath.depname=location.name;
            const savedPath = await newPath.save();
            res.status(200).json(savedPath);
        }
        else
            res.status(200).json("Locations Doesn't exist");
              
    } catch (err) {
        next(err);
    }
  };
  export const UpdatePath = async (req, res, next) => {
    const updatedPath = await Path.findByIdAndUpdate(req.params.id, { $set: req.body}, {new:true})

    try {
            res.status(200).json(updatedPath);
    } catch (err) {
        next(err);
    }
  };

  export const DeletePath = async (req, res, next) => {
    try {
        await Path.findByIdAndDelete(req.params.id)
        res.status(200).json("Path Deleted");
        
    } catch (err) {
        next(err);
    }
  };

  export const GetPath = async (req, res, next) => {
    try {
        const path = await Path.findById(req.params.id)
        res.status(200).json(path);
        
    } catch (err) {
        next(err);
    }
  };

  export const GetPathNorm = async (req, res, next) => {
    try {
        const path = await Path.find()
        res.status(200).json(path);
        
    } catch (err) {
        next(err);
    }
  };

  export const GetPaths = async (req, res, next) => {
    const { min, max,limit, ...others } = req.query;
    try {
        const Paths = await Path.find({
                 ...others,
                 min_price: {$lte: max, $gte: min},
               }).limit(limit);
        res.status(200).json(Paths);
    } catch (err) {
        next(err);
    }
  };

  export const GetPathsFeat = async (req, res, next) => {
    const featured = req.query.featured === 'true';
    const limit = req.query.limit;
    try {
        const Paths = await Path.find({
                 featured:featured,
               }).limit(parseInt(limit));
        res.status(200).json(Paths);
    } catch (err) {
        next(err);
    }
  };

  export const countPath = async (req, res, next) => {
    
    try {
        const PathCount = await Path.countDocuments();
        res.status(200).json(PathCount);
        
    } catch (err) {
        next(err);
    }
  };