import Vehicule from "../models/Vehicule.js";
export const CreateVehicule = async (req, res, next) => {
    const newVehicule = new Vehicule(req.body);
    
    try {
        const savedVehicule = await newVehicule.save();
        res.status(200).json(savedVehicule);
        
    } catch (err) {
        next(err);
    }
  };

  export const UpdateVehicule = async (req, res, next) => {
    const updatedVehicule = await Vehicule.findByIdAndUpdate(req.params.id, { $set: req.body}, {new:true})
    
    try {
        res.status(200).json(updatedVehicule);
        
    } catch (err) {
        next(err);
    }
  };

  export const DeleteVehicule = async (req, res, next) => {
    try {
        await Vehicule.findByIdAndDelete(req.params.id)
        res.status(200).json("Vehicule Deleted");
        
    } catch (err) {
        next(err);
    }
  };

  export const GetVehicule = async (req, res, next) => {
    try {
        const vehicule = await Vehicule.findById(req.params.id)
        res.status(200).json(vehicule);
        
    } catch (err) {
        next(err);
    }
  };

  export const GetVehiculeNorm = async (req, res, next) => {
    try {
        const vehicule = await Vehicule.find();
        res.status(200).json(vehicule);
        
    } catch (err) {
        next(err);
    }
  };

  export const GetVehicules = async (req, res, next) => {
    const { type,limit,sn,min,max, ...others } = req.query;
    try {
      const Vehicules = await Vehicule.find({
        ...others,
        type: type,
        seats_nbr: { $gte: sn},
        min_price: {$lte: max, $gte: min},
      }).limit(limit);
        res.status(200).json(Vehicules);
        
    } catch (err) {
        next(err);
    }
  };

  export const countBytype = async (req, res, next) => {
    const types = req.query.types.split(",")
    try {
        const list = await Promise.all(
            types.map((type) => {
              return Vehicule.countDocuments({ type: type });
            })
          );
        res.status(200).json(list);
        
    } catch (err) {
        next(err);
    }
  };