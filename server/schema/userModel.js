import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name:String,
    email:String,
    phone:Number,
    message:String
},{timestamps:true});

export default mongoose.model('users',userSchema)