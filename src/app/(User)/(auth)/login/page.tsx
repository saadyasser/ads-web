"use client";
import { Button, Input } from "@/components";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  Otp,
} from "@/components/ui/input-otp";
import AuthFormWrapper from "@/features/UserManagement/components/AuthFormWrapper";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Login = () => {
  const { status, data } = useSession();
  console.log(data);

  return (
    <AuthFormWrapper
      title="Reset Your Password"
      description="Enter your email address to recover your password!"
      ctaQuestion="Remember your password?"
      ctaLinkText="Back to Login"
      ctaLink="/"
    >
      <span
        className="mb-6"
        onClick={() => {
          signIn("google");
        }}
      >
        Test Form Content
      </span>
      <span
        className="mb-6"
        onClick={() => {
          signOut();
        }}
      >
        Sign Out
      </span>
    </AuthFormWrapper>
  );
};

export default Login;
