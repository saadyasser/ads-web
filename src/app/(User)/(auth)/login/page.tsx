import { Input } from "@/components";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  Otp,
} from "@/components/ui/input-otp";
import React from "react";

const Login = () => {
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
    </div>
  );
};

export default Login;
