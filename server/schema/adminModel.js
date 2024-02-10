import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({

    name:String,
    role:Number,
    email:String,
    paddword:String
},{timestamps:true});

export default mongoose.model('Admin',adminSchema)