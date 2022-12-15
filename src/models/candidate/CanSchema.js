import mongoose from "mongoose";
const CanSchema = new mongoose.Schema(
   { name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        index: 1,

    },

    password:{
        type:Number,
        min: 1000,
        max:9999,
    },



   },
   {
    timestamps: true,
  }
);
export default mongoose.model("Candidate", CanSchema);