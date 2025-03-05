import mongoose from "mongoose";

const dbConnect= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        console.log("MongoDB connected SUCCESSFULLY...")
    } catch (error) {

        if (error instanceof Error) {
            console.log("MongoDB connection FAILED...", error.message);
        } else {
            console.log("MongoDB connection FAILED...");
        }
        process.exit(1);
    }
}

export default dbConnect;