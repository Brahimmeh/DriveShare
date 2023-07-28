import Reservation from "../models/Reservation.js";
export const CreateReservation = async (req, res, next) => {
    const newReservation = new Reservation(req.body);
    newReservation.IsConfirmed=false;
    
    try {
        const savedReservation = await newReservation.save();
        res.status(200).json(savedReservation);
        
    } catch (err) {
        next(err);
    }
  };
  export const UpdateReservation = async (req, res, next) => {
    const updatedReservation = await Reservation.findByIdAndUpdate(req.params.id, { $set: req.body}, {new:true})
    
    try {
        res.status(200).json(updatedReservation);
        
    } catch (err) {
        next(err);
    }
  };

  export const DeleteReservation = async (req, res, next) => {
    try {
        await Reservation.findByIdAndDelete(req.params.id)
        res.status(200).json("Reservation Deleted");
        
    } catch (err) {
        next(err);
    }
  };

  export const GetReservation = async (req, res, next) => {
    try {
        const reservation = await Reservation.findById(req.params.id)
        res.status(200).json(reservation);
        
    } catch (err) {
        next(err);
    }
  };

  export const GetReservations = async (req, res, next) => {
    try {
        const Reservations = await Reservation.find()
        res.status(200).json(Reservations);
        
    } catch (err) {
        next(err);
    }
  };