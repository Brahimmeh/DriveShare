import mongoose from 'mongoose';
const { Schema } = mongoose;

const PathSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    LocationDep:{
      type: Schema.Types.ObjectId,
      required: true,
    },
    LocationArr:{
      type: Schema.Types.ObjectId,
      required: true,
    },
    depname: {
      type: String,
      required: true,
    },
    arrname: {
      type: String,
      required: true,
    },
    min_price:{
      type: Number,
      required: true,
    },
    img_path: {
      type: [String],
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    distance: {
        type: Number,
        required: true,
      },
    isActive: {
        type: Boolean,
        default: false,
      },
    rating: {
        type: Number,
        min: 0,
        max: 10,
      },
    featured: {
      type: Boolean,
      default: false,
    },
    unavailableDates: {type: [Date]},
  });
  
  export default mongoose.model("Path", PathSchema)