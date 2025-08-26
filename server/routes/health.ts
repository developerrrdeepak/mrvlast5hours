import { RequestHandler } from "express";
import Database from "../lib/database";

interface HealthResponse {
  status: "healthy" | "unhealthy";
  timestamp: string;
  services: {
    database: "connected" | "disconnected";
    server: "running";
  };
  message: string;
}

export const healthCheck: RequestHandler = async (req, res) => {
  try {
    const db = Database.getInstance();
    const isDatabaseHealthy = await db.healthCheck();
    
    const response: HealthResponse = {
      status: isDatabaseHealthy ? "healthy" : "unhealthy",
      timestamp: new Date().toISOString(),
      services: {
        database: isDatabaseHealthy ? "connected" : "disconnected",
        server: "running"
      },
      message: isDatabaseHealthy 
        ? "All services are operational" 
        : "Database connection issues detected"
    };

    const statusCode = isDatabaseHealthy ? 200 : 503;
    res.status(statusCode).json(response);
  } catch (error) {
    console.error("Health check error:", error);
    
    const response: HealthResponse = {
      status: "unhealthy",
      timestamp: new Date().toISOString(),
      services: {
        database: "disconnected",
        server: "running"
      },
      message: "System health check failed"
    };

    res.status(503).json(response);
  }
};
