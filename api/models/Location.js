import mongoose from 'mongoose';
const { Schema } = mongoose;

const LocationSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longtitude: {
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
  });
  
  export default mongoose.model("Location", LocationSchema)