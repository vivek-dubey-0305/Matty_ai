import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import Razorpay from "razorpay";

import { errorMiddleware } from "./middlewares/error.middleware.js";

// Routers
import userRouter from "./routes/user.route.js";
import activityRouter from "./routes/activityLog.route.js";
import adminRouter from "./routes/admin.route.js";
import designRouter from "./routes/design.route.js";
import templateRouter from "./routes/template.route.js";
import favoriteRouter from "./routes/favorite.route.js";
import analyticsRouter from "./routes/analytics.route.js";
import aiRouter from "./routes/ai.route.js";
import paymentRouter from "./routes/payment.route.js";

config({ path: "./.env" });

const app = express();

// ----------------------------
// Razorpay Instance
// ----------------------------
export const instance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});

// ----------------------------
// Middlewares
// ----------------------------
app.use(express.json({ limit: "16mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ----------------------------
// CORS Configuration
// ----------------------------
const allowedOrigins = process.env.CORS_ORIGIN?.split(",") || [];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  })
);

// Allow preflight requests
// app.options("*", cors());

// ----------------------------
// API Routes
// ----------------------------
app.use("/api/v1/users", userRouter);
app.use("/api/v1/activity", activityRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/designs", designRouter);
app.use("/api/v1/templates", templateRouter);
app.use("/api/v1/favorites", favoriteRouter);
app.use("/api/v1/analytics", analyticsRouter);
app.use("/api/v1/ai", aiRouter);
app.use("/api/v1/payment", paymentRouter);

// ----------------------------
// Error Handler
// ----------------------------
app.use(errorMiddleware);

// ----------------------------
// Default Route (Optional)
// ----------------------------
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Matty AI Backend is running 🚀",
  });
});

export default app;

// *===================================

export { app };
