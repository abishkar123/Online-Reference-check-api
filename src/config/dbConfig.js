import mongoose from "mongoose";
export const connectDB = () =>{
    try{
        const connstr = "mongodb://localhost:27017/Candidate";
        const conn = mongoose.connect(connstr);

        conn 
        ?console.log(" Mongo connected")
        :console.log("Unable to connect Mongo");

    } catch(error){
        console.log(error);
    }
}