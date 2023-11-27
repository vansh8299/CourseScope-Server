import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  buySubscription,
  cancelSubscription,
  getRazorPayKey,
  paymentverification,
} from "../controllers/paymentController.js";
const router = express.Router();

//Buy Subscription
router.route("/subscribe").get(isAuthenticated, buySubscription);
// Verify Payment and save reference in database
router.route("/paymentverification").post(isAuthenticated, paymentverification);

// Get Razorpay key
router.route("/razorpaykey").get(getRazorPayKey);

//Cancel SUbscription
router.route("/subscribe/cancel").delete(isAuthenticated, cancelSubscription);

export default router;
