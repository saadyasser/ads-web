// types/next-auth.d.ts
import { DefaultSession } from "next-auth";
import { JWT as NextAuthJWT } from "next-auth/jwt";

// User financial details type
export interface FinancialDetails {
  earnings: number;
  withdrawn: number;
}

// User statistics type
export interface Statistics {
  overallRating: number;
  productViews: number;
  favoriteCounter: number;
  downloadsCounter: number;
}

// Main user type
export interface UserT {
  _id: string;
  isEmailVerified: boolean;
  role: "user" | "publisher";
  favoriteList: string[];
  downloads: string[];
  cart: string[];
  paid: number;
  isDeleted: boolean;
  isBlocked: boolean;
  email: string;
  userName: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  bio?: string;
  displayName?: string;
  profileImage?: string;
  financialDetails: FinancialDetails;
  statistics: Statistics;
}

// API response type
export interface ApiResponse {
  statusCode: number;
  status: string;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
    user: UserT;
    isEmailVerified: boolean;
  };
}

declare module "next-auth" {
  interface Session extends DefaultSession {
    accessToken: string;
    refreshToken: string;
    isEmailVerified: boolean;
    isNewUser?: boolean;
    user: UserT;
  }

  interface User {
    accessToken?: string;
    refreshToken?: string;
    isEmailVerified?: boolean;
    isNewUser?: boolean;
    userDetails?: UserT;
    user?: UserT;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends NextAuthJWT {
    accessToken: string;
    refreshToken: string;
    isEmailVerified: boolean;
    isNewUser?: boolean;
    user: UserT;
  }
}

// Credentials type
export interface CredentialsInput {
  emailOrUserName: string;
  password: string;
}
