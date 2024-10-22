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
  const { status } = useSession();
  return (
    <AuthFormWrapper
      title="Reset Your Password"
      description="Enter your email address to recover your password!"
      ctaQuestion="Remember your password?"
      ctaLinkText="Back to Login"
      ctaLink="/"
    >
      <span>Test Form Content</span>
    </AuthFormWrapper>
  );
};

export default Login;
