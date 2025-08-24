import serverless from "serverless-http";
import { createServer } from "../../server";

// Create the Express app
const app = createServer();

// Add some logging for debugging
app.use((req, res, next) => {
  console.log(`🌐 [NETLIFY API] ${req.method} ${req.path}`, {
    headers: req.headers,
    body: req.method !== "GET" ? req.body : undefined,
  });
  next();
});

// Export the serverless handler
export const handler = serverless(app, {
  binary: false,
});
