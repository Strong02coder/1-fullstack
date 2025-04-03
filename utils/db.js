import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const connectDB = () => {
  mongoose
  .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("MongoDB Database connected");
    })
    .catch((error) => {
      console.log("Error connecting to MongoDB", error);
    });
};

export default connectDB;