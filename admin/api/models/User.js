import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique:true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique:true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    img_path: {
      type: [String],
      required: true,
    },
  },
  { timestamps:true }
  );
  
  export default mongoose.model("Users", UserSchema)