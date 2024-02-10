import mongoose from "mongoose";
import color from 'colors'
import dotenv from 'dotenv'
dotenv.config();
const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB ${conn.connection.host}`.bgGreen);
    } catch (error) {
        console.log(`Database connection failed ${error}`.bgRed)
    }
};
export default connectDB;