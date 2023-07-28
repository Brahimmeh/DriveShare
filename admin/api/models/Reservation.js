import mongoose from 'mongoose';
const { Schema } = mongoose;

const ReservationSchema = new mongoose.Schema({
    UserID: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    UserName:{
      type: String,
      required: true,
    },
    ItemId:{
      type: Schema.Types.ObjectId,
      required: true,
    },
    ItemTitle: {
      type: String,
      required: true,
    },
    Amount:{
      type: Number,
      required: true,
    },
    Duration:{
        type: Number,
        required: true,
      },
    Additional: {
      type: String,
    },
    StartDate: {
        type: String,
        required: true,
      },
    EndDate: {
        type: String,
        required: true,
      },
      IsConfirmed: {
        type: Boolean,
        required: true,
      }
  },
        { timestamps:true }
  );
  
  export default mongoose.model("Reservation", ReservationSchema)