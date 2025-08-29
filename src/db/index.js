import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {
        const conninst = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
        console.log(`\n MongoDB connected !! DB HOST: ${conninst.connection.host} `);
    } catch (error) {
        console.error("ERROR",error)
        process
    }
}  

export default connectDB;

