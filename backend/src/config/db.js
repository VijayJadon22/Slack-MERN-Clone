import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectToDB = async () => {
    try {
        const conn = await mongoose.connect(ENV.MONGO_URI);
        console.log(`Connected To DB: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error connecting to MONGODB: ${error}`);
        process.exit(1);
    }
}