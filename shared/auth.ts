export interface Farmer {
  id: string;
  email: string;
  name?: string;
  phone?: string;
  aadhaarId?: string;
  farmerId?: string;
  location?: {
    latitude: number;
    longitude: number;
    address: string;
    pincode: string;
  };
  landSize?: number;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Admin {
  id: string;
  email: string;
  name: string;
  role: "admin" | "super_admin";
  createdAt: Date;
}

export interface FarmData {
  id: string;
  farmerId: string;
  soilPh?: number;
  soilMoisture?: number;
  cropType?: string;
  irrigationType?: string;
  waterUsage?: number;
  areaPlanted?: number;
  plantingDate?: Date;
  harvestDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface CarbonProject {
  id: string;
  name: string;
  type: "agroforestry" | "rice_based" | "soil_carbon" | "biomass";
  description: string;
  creditRate: number; // per hectare
  requirements: string[];
  status: "active" | "inactive" | "completed";
  participants: string[]; // farmer IDs
  createdAt: Date;
  updatedAt: Date;
}

export interface CarbonCredit {
  id: string;
  farmerId: string;
  projectId: string;
  credits: number;
  income: number;
  status: "pending" | "verified" | "rejected" | "paid";
  calculatedAt: Date;
  verifiedAt?: Date;
  paymentDate?: Date;
}

export type UserType = "farmer" | "admin";

export interface AuthUser {
  type: UserType;
  farmer?: Farmer;
  admin?: Admin;
}

export interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginResponse {
  success: boolean;
  user?: AuthUser;
  message?: string;
}

export interface OTPRequest {
  email: string;
}

export interface OTPVerification {
  email: string;
  otp: string;
}

export interface AdminLoginRequest {
  email: string;
  password: string;
}
