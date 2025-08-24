import express from "express";

export function createMinimalServer() {
  const app = express();
  
  app.use(express.json());
  
  app.get("/api/test", (req, res) => {
    res.json({ message: "Test endpoint working" });
  });
  
  return app;
}
