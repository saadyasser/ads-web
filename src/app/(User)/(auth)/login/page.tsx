"use client";
import { Button, Input } from "@/components";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  Otp,
} from "@/components/ui/input-otp";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Login = () => {
  const { status } = useSession();
  return (
    <div>
      <Input
        containerClassname="mb-4"
        name="username"
        label="Username"
        type="text"
        placeholder="Enter name"
        success={true}
      />
      <Input
        containerClassname="mb-4"
        name="email"
        label="Email"
        type="email"
        placeholder="enter Email"
        error={true}
      />
      <Input
        name="password"
        label="Password"
        type="password"
        placeholder="enter name"
      />
      <Otp />
      <>
        {status === "unauthenticated" ? (
          <>
            <div
              className="px-6 py-4 border-[1px] border-green-500 mb-2"
              onClick={() => {
                signIn("google");
              }}
            >
              Sign in with Google
            </div>
            <div
              className="px-6 py-4 border-[1px] border-green-500 mb-2"
              onClick={() => {
                signIn("credentials");
              }}
            >
              Sign in with Credentials
            </div>
          </>
        ) : (
          <div
            className="px-6 py-4 border-[1px] border-red-500"
            onClick={() => {
              signOut();
            }}
          >
            Sign Out
          </div>
        )}
      </>
      <div>{status}</div>
    </div>
  );
};

export default Login;
