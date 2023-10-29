import mongoose from "mongoose";
import colors from "colors";

const connectdb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to mongodb`.bgGreen.white);
  } catch (error) {
    console.log(`Error in mongodb`.bgRed.white, error);
  }
};

export default connectdb;
