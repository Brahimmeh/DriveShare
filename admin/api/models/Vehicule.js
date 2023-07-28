import mongoose from 'mongoose';
const { Schema } = mongoose;

const VehiculeSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    seats_nbr: {
      type: Number,
      required: true,
    },
    min_price:{
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    img_path: {
      type: [String],
      required: true,
    },
    luxe: {
      type: Boolean,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    unavailableDates: {type: [Date]},
  });
  
  export default mongoose.model("Vehicule", VehiculeSchema)