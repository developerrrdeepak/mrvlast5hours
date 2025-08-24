import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import {
  sendOTP,
  verifyOTP,
  adminLogin,
  verifyToken,
  updateProfile,
  logout,
  getFarmers,
  updateFarmerStatus,
  farmerPasswordRegister,
  farmerPasswordLogin,
} from "./routes/auth";

export function createGradualServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Simple routes first
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Authentication routes - add one by one to test
  app.post("/api/auth/send-otp", sendOTP);

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || "development",
    });
  });

  return app;
}
