import express from "express";
import color from 'colors';
import connectDb from "./db.js";
import cors from 'cors'
import dotenv from 'dotenv'
import router from "./routes/userRoute.js";

const app = express();
connectDb();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use('/api', router)

const PORT  = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server Running on Port ${PORT}`.bgWhite);
})


