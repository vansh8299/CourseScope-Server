import app from "./app.js"; //.js is mandatory
import { connectDB } from "./config/database.js";
import cloudinary from "cloudinary";
import RazorPay from "razorpay";
import nodeCron from "node-cron";
import { Stats } from "./models/Stats.js";
connectDB();
//Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});
// Razorpay
export const instance = new RazorPay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});
//Node Cron
nodeCron.schedule("0 0 0 1 *  *", async () => {
  try {
    await Stats.create({});
  } catch (error) {
    console.log(error);
  }
}); //second minute hour day month year   this function will run 24*7 on every date 1st this function will call

app.listen(process.env.PORT, () => {
  console.log(`Server is working on port: ${process.env.PORT}`);
});
