import Hotel from "../models/Hotel.js";
export const CreateHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);
    
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
        
    } catch (err) {
        next(err);
    }
  };
  export const UpdateHotel = async (req, res, next) => {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body}, {new:true})
    
    try {
        res.status(200).json(updatedHotel);
        
    } catch (err) {
        next(err);
    }
  };

  export const DeleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel Deleted");
        
    } catch (err) {
        next(err);
    }
  };

  export const GetHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel);
        
    } catch (err) {
        next(err);
    }
  };

  export const GetHotelNorm = async (req, res, next) => {
    try {
        const hotel = await Hotel.find();
        res.status(200).json(hotel);
        
    } catch (err) {
        next(err);
    }
  };

  export const GetHotels = async (req, res, next) => {
    const { city,min,max, ...others } = req.query;
    try {
        const Hotels = await Hotel.find({
            ...others,
            city:city,
            minPrice: {$lte: max, $gte: min},
          });
        res.status(200).json(Hotels);
        
    } catch (err) {
        next(err);
    }
  };

  export const countHotel = async (req, res, next) => {
    
    try {
        const HotelCount = await Hotel.countDocuments();
        res.status(200).json(HotelCount);
        
    } catch (err) {
        next(err);
    }
  };