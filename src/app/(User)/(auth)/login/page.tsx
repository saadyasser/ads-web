"use client";

import { Button, GoogleIcon, Input } from "@/components";
import AuthFormWrapper from "@/features/UserManagement/components/AuthFormWrapper";
import { signIn, signOut, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";

// Define Zod schema for form validation
const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

// Infer the type from the schema
type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const { status, data } = useSession();

  const {
    register, // To register inputs with React Hook Form
    handleSubmit, // To handle form submission
    formState: { errors, isSubmitting }, // Get form state
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema), // Use Zod schema for validation
  });

  // Handle normal login with credentials
  const onSubmit = async (data: LoginFormValues) => {
    const { email, password } = data;
    const response = await signIn("credentials", {
      emailOrUserName: email,
      password,
      redirect: true,
      callbackUrl: "/",
    });

    if (response?.error) {
      console.error("Login error:", response.error);
    } else {
      console.log("Login successful:", response);
    }
  };

  // Handle Google login
  const handleGoogleSignIn = async () => {
    await signIn("google", { callbackUrl: "/", redirect: true });
  };

  return (
    <AuthFormWrapper
      title="Login"
      description={
        <p className="italic">
          Fill the following information to access your <b>ADS</b> account!
        </p>
      }
      ctaQuestion="Don’t have an account?"
      ctaLinkText="Create an account"
      ctaLink="/sign-up"
    >
      <div className="space-y-3">
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email"
            type="email"
            placeholder="i.e. john@mail.com"
            {...register("email")}
            error={!!errors.email?.message}
            errorMessage={errors.email?.message}
            autoComplete="email"
          />

          <Input
            label="Password"
            type="password"
            placeholder="******"
            {...register("password")}
            error={!!errors.password?.message}
            errorMessage={errors.password?.message}
            autoComplete="password"
          />

          <Button type="submit" className="w-full mb-2" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </form>
        <div className="flex flex-col items-center gap-6 pt-6">
          <div className="relative w-full">
            <hr className="w-full text-background-light" />
            <p className="absolute px-1 text-sm font-medium text-center bg-white text-background-dark inset-x-1/4 md:inset-x-1/3 -top-2.5">
              Or Continue With
            </p>
          </div>

          <Button
            intent="custom"
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full p-4 font-medium text-center transition-all border bg-background-light border-border text-accent-dark hover:bg-background-light/50"
          >
            <GoogleIcon />
            <span>Google</span>
          </Button>
        </div>
      </div>
    </AuthFormWrapper>
  );
};

export default Login;
