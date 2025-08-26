import type { Handler } from "@netlify/functions";

// Import individual route handlers directly to avoid Express dependencies
import { sendOTP, verifyOTP, adminLogin, verifyToken, updateProfile, logout } from "../../server/routes/auth";
import { healthCheck } from "../../server/routes/health";

// Simple request/response adapter to make Express route handlers work with Netlify
function createNetlifyHandler(expressHandler: any): Handler {
  return async (event, context) => {
    try {
      // Parse the API path from the Netlify function path
      const path = event.path.replace("/.netlify/functions/api", "");
      const method = event.httpMethod;
      
      console.log(`🌐 [NETLIFY] ${method} ${path}`);

      // Create mock Express request/response objects
      const req: any = {
        method,
        path,
        url: path,
        headers: event.headers,
        body: event.body ? JSON.parse(event.body) : {},
        query: event.queryStringParameters || {},
        params: {},
      };

      let responseData: any = {};
      let statusCode = 200;

      const res: any = {
        status: (code: number) => {
          statusCode = code;
          return res;
        },
        json: (data: any) => {
          responseData = data;
          return res;
        },
        send: (data: any) => {
          responseData = data;
          return res;
        },
      };

      const next = (error?: any) => {
        if (error) {
          throw error;
        }
      };

      // Route the request to appropriate handler
      if (path === "/api/health" && method === "GET") {
        await healthCheck(req, res, next);
      } else if (path === "/api/ping" && method === "GET") {
        responseData = {
          message: process.env.PING_MESSAGE ?? "pong",
          timestamp: new Date().toISOString(),
          environment: process.env.NODE_ENV || "production",
        };
      } else if (path === "/api/auth/send-otp" && method === "POST") {
        await sendOTP(req, res, next);
      } else if (path === "/api/auth/verify-otp" && method === "POST") {
        await verifyOTP(req, res, next);
      } else if (path === "/api/auth/admin-login" && method === "POST") {
        await adminLogin(req, res, next);
      } else if (path === "/api/auth/verify" && method === "GET") {
        await verifyToken(req, res, next);
      } else if (path === "/api/auth/update-profile" && method === "PUT") {
        await updateProfile(req, res, next);
      } else if (path === "/api/auth/logout" && method === "POST") {
        await logout(req, res, next);
      } else {
        // 404 for unknown routes
        statusCode = 404;
        responseData = {
          success: false,
          message: `API endpoint not found: ${method} ${path}`,
          timestamp: new Date().toISOString(),
          availableEndpoints: [
            "GET /api/ping",
            "GET /api/health", 
            "POST /api/auth/send-otp",
            "POST /api/auth/verify-otp",
            "POST /api/auth/admin-login",
            "GET /api/auth/verify",
            "PUT /api/auth/update-profile",
            "POST /api/auth/logout",
          ],
        };
      }

      return {
        statusCode,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        },
        body: JSON.stringify(responseData),
      };
    } catch (error) {
      console.error("🚨 [NETLIFY ERROR]", error);
      
      return {
        statusCode: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          success: false,
          message: "Internal server error",
          error: process.env.NODE_ENV !== "production" ? error.message : undefined,
          timestamp: new Date().toISOString(),
        }),
      };
    }
  };
}

// Handle OPTIONS requests for CORS
export const handler: Handler = async (event, context) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      },
      body: "",
    };
  }

  const apiHandler = createNetlifyHandler(null);
  return apiHandler(event, context);
};
