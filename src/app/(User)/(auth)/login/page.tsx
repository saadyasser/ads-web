"use client";

import { Button, GoogleIcon, Input } from "@/components";
import AuthFormWrapper from "@/features/UserManagement/components/AuthFormWrapper";
import { signIn, signOut, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CircleExclamationIcon } from "@/lib/@react-icons";
import Link from "next/link";
import Cookies from "js-cookie";

// Define Zod schema for form validation
const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field is required" })
    .refine(
      (value) => {
        // Check if the value is a valid email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Check if the value is a valid username format (alphanumeric and at least 3 characters)
        const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;

        return emailRegex.test(value) || usernameRegex.test(value);
      },
      {
        message:
          "Must be a valid email or a username with at least 3 characters",
      }
    ),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

// Infer the type from the schema
type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const { status: sessionStat, data: sessionData } = useSession();
  const [backendError, setBackendError] = useState<string | null | undefined>();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  // Handle normal login with credentials
  const onSubmit = async (data: LoginFormValues) => {
    const { email, password } = data;
    try {
      const response = await signIn("credentials", {
        emailOrUserName: email,
        password,
        redirect: false,
      });
      if (response && response?.status >= 400 && response?.status < 500) {
        setBackendError(response?.error);
      }
      if (response && response?.status >= 200 && response?.status < 300) {
        router.push("/");
      }
    } catch (err) {
      console.log("Login error:", err);
      // @ts-expect-error unknown compatibility
      setBackendError(err);
    }
  };
  // Handle Google login
  const handleGoogleSignIn = async () => {
    try {
      const response = await signIn("google", {
        redirect: false,
      });
      console.log("🚀 ~ handleGoogleSignIn ~ response:", response);
      if (response && response?.status >= 400 && response?.status < 500) {
        setBackendError(response?.error);
      }
      if (response && response?.status >= 200 && response?.status < 300) {
        router.push("/");
      }
    } catch (err) {
      // @ts-expect-error unknown compatibility
      setBackendError(err);
    }
  };

  return (
    <AuthFormWrapper
      title="Login"
      description={
        <p className="mb-4 italic">
          Fill the following information to access your <b>ADS</b> account!
        </p>
      }
      ctaQuestion="Don’t have an account?"
      ctaLinkText="Create an account"
      ctaLink="/sign-up"
    >
      {backendError && (
        <div className="flex items-center gap-2 p-2 mb-6 text-center rounded-lg text-danger-dark bg-danger-light">
          <div className="p-2 rounded-lg bg-danger-light-hover">
            <CircleExclamationIcon size={26} className=" text-danger-dark" />
          </div>
          <p className="text-sm font-medium">{backendError}</p>
        </div>
      )}
      <div className="pt-1 space-y-2 xl:space-y-2">
        <form
          className="flex flex-col space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="Email or Username"
            type="text"
            floatLabel
            placeholder="i.e. john@mail.com or ahmeduxui"
            {...register("email")}
            error={!!errors.email?.message}
            errorMessage={errors.email?.message}
            autoComplete="email"
          />

          <Input
            label="Password"
            type="password"
            floatLabel
            placeholder="******"
            {...register("password")}
            error={!!errors.password?.message}
            errorMessage={errors.password?.message}
            autoComplete="password"
          />
          <div className="flex items-center justify-end gap-2 mt-2">
            <Link
              href="/forget-password"
              className="text-primary z-20 font-semibold text-[12px] hover:text-primary-hover active:text-primary-active "
            >
              Forgot password?
            </Link>
          </div>

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
