import { RequestHandler } from "express";
import {
  AuthUser,
  Farmer,
  Admin,
  LoginResponse,
  EnhancedFarmerRegistration,
  FarmerPasswordRequest,
  FarmerLoginRequest,
} from "@shared/auth";

// Mock data storage - in production, use a proper database
let farmers: Farmer[] = [];
let admins: Admin[] = [
  {
    id: "admin-1",
    email: "developerrdeepak@gmail.com",
    name: "Admin",
    role: "admin",
    createdAt: new Date(),
  },
];

// OTP storage - in production, use Redis or similar
let otpStorage: Record<string, { otp: string; expires: number }> = {};

// Mock session storage - in production, use proper session management
let sessions: Record<string, AuthUser> = {};

// Generate random OTP
function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Generate simple token - in production, use JWT
function generateToken(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// Send OTP email (mock implementation)
async function sendOTPEmail(email: string, otp: string): Promise<boolean> {
  // In production, integrate with email service like SendGrid, SES, etc.
  console.log(`\n🔐 [OTP GENERATED] for ${email}: ${otp}`);
  console.log(`⏰ Valid for 5 minutes\n`);
  return true;
}

export const sendOTP: RequestHandler = async (req, res) => {
  try {
    const { email } = req.body;

    console.log(`🔐 [SEND OTP] Request for email: ${email}`);

    if (!email) {
      console.log("❌ [SEND OTP] Email is missing");
      return res
        .status(400)
        .json({ success: false, message: "Email is required" });
    }

    const otp = generateOTP();
    const expires = Date.now() + 5 * 60 * 1000; // 5 minutes

    // Store OTP
    otpStorage[email] = { otp, expires };

    // Send OTP email
    const emailSent = await sendOTPEmail(email, otp);

    if (emailSent) {
      console.log(`✅ [SEND OTP] OTP sent successfully to ${email}`);

      // In development/test mode, include OTP in response
      const response: any = {
        success: true,
        message: "OTP sent successfully",
      };

      // Only include OTP in response for development/testing
      if (
        process.env.NODE_ENV !== "production" ||
        process.env.DEBUG_AUTH === "true"
      ) {
        response.otp = otp;
      }

      res.json(response);
    } else {
      console.log(`❌ [SEND OTP] Failed to send email to ${email}`);
      res.status(500).json({ success: false, message: "Failed to send OTP" });
    }
  } catch (error) {
    console.error("❌ [SEND OTP] Error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const verifyOTP: RequestHandler = async (req, res) => {
  try {
    const { email, otp, registrationData } = req.body;

    console.log(`🔐 [OTP VERIFICATION] Request for email: ${email}`);

    if (!email || !otp) {
      console.log("❌ [OTP VERIFICATION] Missing email or OTP");
      return res
        .status(400)
        .json({ success: false, message: "Email and OTP are required" });
    }

    const storedOTP = otpStorage[email];

    console.log(`🔍 [OTP VERIFICATION] for ${email}:`);
    console.log(`   Provided OTP: ${otp}`);
    console.log(`   Stored OTP: ${storedOTP?.otp || "Not found"}`);
    console.log(`   Current time: ${Date.now()}`);
    console.log(`   Expires at: ${storedOTP?.expires || "N/A"}`);

    if (!storedOTP) {
      console.log(`❌ [OTP VERIFICATION] No OTP found for ${email}`);
      return res
        .status(400)
        .json({ success: false, message: "OTP not found or expired" });
    }

    if (Date.now() > storedOTP.expires) {
      console.log(`❌ [OTP VERIFICATION] OTP expired for ${email}`);
      delete otpStorage[email];
      return res.status(400).json({ success: false, message: "OTP expired" });
    }

    if (storedOTP.otp !== otp) {
      console.log(
        `❌ [OTP VERIFICATION] Invalid OTP for ${email}. Expected: ${storedOTP.otp}, Got: ${otp}`,
      );
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    // OTP verified, create or find farmer
    let farmer = farmers.find((f) => f.email === email);

    if (!farmer) {
      // Calculate estimated income based on registration data
      let estimatedIncome = 0;
      if (registrationData) {
        const landSizeInHectares =
          registrationData.landUnit === "acres"
            ? registrationData.landSize * 0.405
            : registrationData.landSize;
        const baseIncome = landSizeInHectares * 1000; // ₹1000 per hectare base
        const practiceMultiplier =
          1 + registrationData.sustainablePractices.length * 0.1;
        estimatedIncome = Math.round(baseIncome * practiceMultiplier);
      }

      farmer = {
        id: `farmer-${Date.now()}`,
        email,
        verified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        // Enhanced registration data
        ...(registrationData && {
          name: registrationData.name,
          phone: registrationData.phone,
          farmName: registrationData.farmName,
          landSize: registrationData.landSize,
          landUnit: registrationData.landUnit,
          farmingType: registrationData.farmingType,
          primaryCrops: registrationData.primaryCrops,
          irrigationType: registrationData.irrigationType,
          location: {
            address: registrationData.address,
            pincode: registrationData.pincode,
            state: registrationData.state,
            district: registrationData.district,
            latitude: registrationData.latitude,
            longitude: registrationData.longitude,
          },
          aadhaarId: registrationData.aadhaarNumber,
          panNumber: registrationData.panNumber,
          bankAccountNumber: registrationData.bankAccountNumber,
          ifscCode: registrationData.ifscCode,
          interestedProjects: registrationData.interestedProjects,
          sustainablePractices: registrationData.sustainablePractices,
          estimatedIncome,
        }),
      };
      farmers.push(farmer);

      console.log(
        `🌾 [FARMER CREATED] ${farmer.name || email} with estimated income: ₹${estimatedIncome}`,
      );
    }

    // Create session
    const token = generateToken();
    const user: AuthUser = {
      type: "farmer",
      farmer,
    };

    sessions[token] = user;

    // Clean up OTP
    delete otpStorage[email];

    const response: LoginResponse = {
      success: true,
      user,
      token,
    };

    res.json(response);
  } catch (error) {
    console.error("Verify OTP error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const adminLogin: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(`🔐 [ADMIN LOGIN] Attempt for email: ${email}`);

    if (!email || !password) {
      console.log("❌ [ADMIN LOGIN] Missing email or password");
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required" });
    }

    // Get admin credentials from environment variables or fallback to defaults
    const validEmail = process.env.ADMIN_EMAIL || "developerrdeepak@gmail.com";
    const validPassword = process.env.ADMIN_PASSWORD || "IITdelhi2023@";

    console.log(`🔍 [ADMIN LOGIN] Checking against admin email: ${validEmail}`);

    // Check credentials
    if (email === validEmail && password === validPassword) {
      let admin = admins.find((a) => a.email === email);

      // If admin doesn't exist in memory, create one
      if (!admin) {
        admin = {
          id: "admin-1",
          email: validEmail,
          name: "Admin",
          role: "admin",
          createdAt: new Date(),
        };
        admins = [admin]; // Replace the array with current admin
      }

      // Create session
      const token = generateToken();
      const user: AuthUser = {
        type: "admin",
        admin,
      };

      sessions[token] = user;

      const response: LoginResponse = {
        success: true,
        user,
        token,
      };

      console.log(`✅ [ADMIN LOGIN] Successful login for ${email}`);
      res.json(response);
    } else {
      console.log(`❌ [ADMIN LOGIN] Invalid credentials for ${email}`);
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("❌ [ADMIN LOGIN] Error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const verifyToken: RequestHandler = async (req, res) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "No token provided" });
    }

    const user = sessions[token];

    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid token" });
    }

    res.json({ success: true, user });
  } catch (error) {
    console.error("Verify token error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const updateProfile: RequestHandler = async (req, res) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "No token provided" });
    }

    const user = sessions[token];

    if (!user || user.type !== "farmer") {
      return res
        .status(401)
        .json({ success: false, message: "Invalid token or user type" });
    }

    const updates = req.body;
    const farmerIndex = farmers.findIndex((f) => f.id === user.farmer?.id);

    if (farmerIndex === -1) {
      return res
        .status(404)
        .json({ success: false, message: "Farmer not found" });
    }

    // Recalculate estimated income if relevant fields are updated
    let estimatedIncome = farmers[farmerIndex].estimatedIncome;
    if (updates.landSize || updates.landUnit || updates.sustainablePractices) {
      const landSize = updates.landSize || farmers[farmerIndex].landSize || 0;
      const landUnit =
        updates.landUnit || farmers[farmerIndex].landUnit || "acres";
      const practices =
        updates.sustainablePractices ||
        farmers[farmerIndex].sustainablePractices ||
        [];

      const landSizeInHectares =
        landUnit === "acres" ? landSize * 0.405 : landSize;
      const baseIncome = landSizeInHectares * 1000;
      const practiceMultiplier = 1 + practices.length * 0.1;
      estimatedIncome = Math.round(baseIncome * practiceMultiplier);
    }

    // Update farmer data
    farmers[farmerIndex] = {
      ...farmers[farmerIndex],
      ...updates,
      estimatedIncome,
      updatedAt: new Date(),
    };

    // Update session
    const updatedUser: AuthUser = {
      type: "farmer",
      farmer: farmers[farmerIndex],
    };

    sessions[token] = updatedUser;

    console.log(
      `📝 [PROFILE UPDATED] ${farmers[farmerIndex].name} - New estimated income: ₹${estimatedIncome}`,
    );

    res.json({ success: true, user: updatedUser });
  } catch (error) {
    console.error("Update profile error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const logout: RequestHandler = async (req, res) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (token && sessions[token]) {
      delete sessions[token];
    }

    res.json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Get all farmers (admin only)
export const getFarmers: RequestHandler = async (req, res) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "No token provided" });
    }

    const user = sessions[token];

    if (!user || user.type !== "admin") {
      return res
        .status(403)
        .json({ success: false, message: "Admin access required" });
    }

    res.json({ success: true, farmers });
  } catch (error) {
    console.error("Get farmers error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Farmer password registration
export const farmerPasswordRegister: RequestHandler = async (req, res) => {
  try {
    const { email, password, name, phone } = req.body as FarmerPasswordRequest;

    console.log(`👨‍🌾 [FARMER REGISTER] Registration attempt for: ${email}`);

    if (!email || !password) {
      console.log("❌ [FARMER REGISTER] Missing email or password");
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required" });
    }

    if (password.length < 6) {
      console.log("❌ [FARMER REGISTER] Password too short");
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }

    // Check if farmer already exists
    const existingFarmer = farmers.find((f) => f.email === email);
    if (existingFarmer) {
      console.log(`❌ [FARMER REGISTER] Farmer already exists: ${email}`);
      return res.status(400).json({
        success: false,
        message: "Farmer already registered with this email",
      });
    }

    // Create new farmer
    const farmer: Farmer = {
      id: `farmer-${Date.now()}`,
      email,
      name: name || email.split("@")[0],
      phone,
      verified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      estimatedIncome: 0,
    };

    farmers.push(farmer);

    // Store password (in production, hash this!)
    otpStorage[`password_${email}`] = {
      otp: password,
      expires: Date.now() + 365 * 24 * 60 * 60 * 1000,
    }; // 1 year

    // Create session
    const token = generateToken();
    const user: AuthUser = {
      type: "farmer",
      farmer,
    };

    sessions[token] = user;

    console.log(
      `✅ [FARMER REGISTER] Farmer registered successfully: ${email}`,
    );

    const response: LoginResponse = {
      success: true,
      user,
      token,
    };

    res.json(response);
  } catch (error) {
    console.error("❌ [FARMER REGISTER] Error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Farmer password login
export const farmerPasswordLogin: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body as FarmerLoginRequest;

    console.log(`👨‍🌾 [FARMER LOGIN] Login attempt for: ${email}`);

    if (!email || !password) {
      console.log("❌ [FARMER LOGIN] Missing email or password");
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required" });
    }

    // Find farmer
    const farmer = farmers.find((f) => f.email === email);
    if (!farmer) {
      console.log(`❌ [FARMER LOGIN] Farmer not found: ${email}`);
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    // Check password (in production, compare hashed passwords!)
    const storedPassword = otpStorage[`password_${email}`];
    if (!storedPassword || storedPassword.otp !== password) {
      console.log(`❌ [FARMER LOGIN] Invalid password for: ${email}`);
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    // Create session
    const token = generateToken();
    const user: AuthUser = {
      type: "farmer",
      farmer,
    };

    sessions[token] = user;

    console.log(`✅ [FARMER LOGIN] Farmer logged in successfully: ${email}`);

    const response: LoginResponse = {
      success: true,
      user,
      token,
    };

    res.json(response);
  } catch (error) {
    console.error("❌ [FARMER LOGIN] Error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Social Authentication (Google OAuth implementation)
export const socialAuth: RequestHandler = async (req, res) => {
  try {
    const { provider } = req.params;
    const { access_token, credential } = req.body;

    console.log(`🔗 [SOCIAL AUTH] ${provider} authentication attempt`);

    if (provider === "google") {
      try {
        // Import Google OAuth library
        const { OAuth2Client } = await import("google-auth-library");

        // Initialize Google OAuth client
        const client = new OAuth2Client(
          process.env.GOOGLE_CLIENT_ID || "your-google-client-id",
          process.env.GOOGLE_CLIENT_SECRET || "your-google-client-secret",
          process.env.GOOGLE_REDIRECT_URI || "http://localhost:8080/api/auth/social/google/callback"
        );

        let ticket;
        let payload;

        if (credential) {
          // Handle Google ID Token (from Google Sign-In)
          console.log("🔐 [GOOGLE AUTH] Verifying Google ID token");
          ticket = await client.verifyIdToken({
            idToken: credential,
            audience: process.env.GOOGLE_CLIENT_ID || "your-google-client-id",
          });
          payload = ticket.getPayload();
        } else if (access_token) {
          // Handle Access Token
          console.log("🔐 [GOOGLE AUTH] Verifying Google access token");
          const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`);
          if (!response.ok) {
            throw new Error("Invalid access token");
          }
          payload = await response.json();
        } else {
          // Generate OAuth URL for redirect-based flow
          const authUrl = client.generateAuthUrl({
            access_type: 'offline',
            scope: ['openid', 'email', 'profile'],
            include_granted_scopes: true,
          });

          console.log("🔗 [GOOGLE AUTH] Generated auth URL for redirect");
          return res.json({
            success: true,
            redirectUrl: authUrl,
            message: "Redirect to Google for authentication"
          });
        }

        if (!payload || !payload.email) {
          throw new Error("Unable to get user information from Google");
        }

        console.log(`✅ [GOOGLE AUTH] User verified: ${payload.email}`);

        // Find or create farmer
        let farmer = farmers.find((f) => f.email === payload.email);

        if (!farmer) {
          // Create new farmer from Google profile
          farmer = {
            id: `farmer-${Date.now()}`,
            email: payload.email!,
            name: payload.name || payload.given_name + " " + payload.family_name,
            verified: true,
            createdAt: new Date(),
            updatedAt: new Date(),
            estimatedIncome: 0,
          };
          farmers.push(farmer);

          console.log(`🌾 [GOOGLE AUTH] New farmer created: ${farmer.name} (${farmer.email})`);
        } else {
          console.log(`🌾 [GOOGLE AUTH] Existing farmer logged in: ${farmer.name} (${farmer.email})`);
        }

        // Create session
        const token = generateToken();
        const user: AuthUser = {
          type: "farmer",
          farmer,
        };

        sessions[token] = user;

        const response: LoginResponse = {
          success: true,
          user,
          token,
        };

        res.json(response);

      } catch (googleError) {
        console.error("❌ [GOOGLE AUTH] Error:", googleError);

        // For development/demo purposes, create a mock successful response
        if (process.env.NODE_ENV !== "production") {
          console.log("🔧 [GOOGLE AUTH] Creating demo user for development");

          const demoEmail = "demo.farmer@gmail.com";
          let farmer = farmers.find((f) => f.email === demoEmail);

          if (!farmer) {
            farmer = {
              id: `farmer-demo-${Date.now()}`,
              email: demoEmail,
              name: "Demo Farmer (Google)",
              verified: true,
              createdAt: new Date(),
              updatedAt: new Date(),
              estimatedIncome: 15000,
            };
            farmers.push(farmer);
          }

          const token = generateToken();
          const user: AuthUser = {
            type: "farmer",
            farmer,
          };

          sessions[token] = user;

          return res.json({
            success: true,
            user,
            token,
            message: "Demo Google login successful! 🎉",
          });
        }

        res.status(400).json({
          success: false,
          message: "Google authentication failed. Please try again or use email/OTP login.",
        });
      }
    } else {
      // Other providers (Facebook, GitHub, Twitter) - placeholder
      res.json({
        success: false,
        message: `${provider} integration coming soon! Google login is available, or use email/password authentication.`,
      });
    }
  } catch (error) {
    console.error(`❌ [SOCIAL AUTH] Error:`, error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Social OAuth callback handler
export const socialCallback: RequestHandler = async (req, res) => {
  try {
    const { provider } = req.params;
    const { code, state, error } = req.query;

    console.log(`🔗 [SOCIAL CALLBACK] ${provider} callback received`);

    if (error) {
      console.error(`❌ [SOCIAL CALLBACK] OAuth error:`, error);
      return res.redirect(`${process.env.CLIENT_URL || 'http://localhost:8080'}?auth_error=${error}`);
    }

    if (provider === "google" && code) {
      try {
        // Import Google OAuth library
        const { OAuth2Client } = await import("google-auth-library");

        // Initialize Google OAuth client
        const client = new OAuth2Client(
          process.env.GOOGLE_CLIENT_ID || "your-google-client-id",
          process.env.GOOGLE_CLIENT_SECRET || "your-google-client-secret",
          process.env.GOOGLE_REDIRECT_URI || "http://localhost:8080/api/auth/social/google/callback"
        );

        // Exchange code for tokens
        const { tokens } = await client.getToken(code as string);
        client.setCredentials(tokens);

        // Get user info
        const { data } = await client.request({
          url: "https://www.googleapis.com/oauth2/v2/userinfo"
        });

        const userInfo = data as any;

        if (!userInfo.email) {
          throw new Error("Unable to get user email from Google");
        }

        console.log(`✅ [GOOGLE CALLBACK] User verified: ${userInfo.email}`);

        // Find or create farmer
        let farmer = farmers.find((f) => f.email === userInfo.email);

        if (!farmer) {
          farmer = {
            id: `farmer-${Date.now()}`,
            email: userInfo.email,
            name: userInfo.name || `${userInfo.given_name} ${userInfo.family_name}`,
            verified: true,
            createdAt: new Date(),
            updatedAt: new Date(),
            estimatedIncome: 0,
          };
          farmers.push(farmer);

          console.log(`🌾 [GOOGLE CALLBACK] New farmer created: ${farmer.name} (${farmer.email})`);
        }

        // Create session
        const token = generateToken();
        const user: AuthUser = {
          type: "farmer",
          farmer,
        };

        sessions[token] = user;

        // Redirect to frontend with token
        const clientUrl = process.env.CLIENT_URL || 'http://localhost:8080';
        res.redirect(`${clientUrl}/farmer-dashboard?token=${token}&auth_success=true`);

      } catch (googleError) {
        console.error("❌ [GOOGLE CALLBACK] Error:", googleError);
        const clientUrl = process.env.CLIENT_URL || 'http://localhost:8080';
        res.redirect(`${clientUrl}?auth_error=google_callback_failed`);
      }
    } else {
      // Other providers
      const clientUrl = process.env.CLIENT_URL || 'http://localhost:8080';
      res.redirect(`${clientUrl}?auth_error=provider_not_supported`);
    }
  } catch (error) {
    console.error(`❌ [SOCIAL CALLBACK] Error:`, error);
    const clientUrl = process.env.CLIENT_URL || 'http://localhost:8080';
    res.redirect(`${clientUrl}?auth_error=callback_failed`);
  }
};

// Update farmer status (admin only)
export const updateFarmerStatus: RequestHandler = async (req, res) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "No token provided" });
    }

    const user = sessions[token];

    if (!user || user.type !== "admin") {
      return res
        .status(403)
        .json({ success: false, message: "Admin access required" });
    }

    const { farmerId, status } = req.body;
    const farmerIndex = farmers.findIndex((f) => f.id === farmerId);

    if (farmerIndex === -1) {
      return res
        .status(404)
        .json({ success: false, message: "Farmer not found" });
    }

    farmers[farmerIndex].verified = status === "verified";
    farmers[farmerIndex].updatedAt = new Date();

    res.json({ success: true, farmer: farmers[farmerIndex] });
  } catch (error) {
    console.error("Update farmer status error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
