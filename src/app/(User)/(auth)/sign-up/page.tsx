"use client";

import { Button, GoogleIcon, Input } from "@/components";
import AuthFormWrapper from "@/features/UserManagement/components/AuthFormWrapper";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { CircleExclamationIcon } from "@/lib/@react-icons";
import Cookies from "js-cookie";

const signUpSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" }),
    userName: z
      .string()
      .min(1, { message: "Username is required" })
      .regex(/^[a-z0-9._'-]+$/, {
        message:
          "Username can only contain letters, numbers, or [- , _ , ' , .]",
      }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/[@$!%*?&#]/, {
        message:
          "Password must contain at least one special character (e.g., @$!%*?&#)",
      }),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignUpFormValues = z.infer<typeof signUpSchema>;

const signUpUser = async (data: SignUpFormValues) => {
  Cookies.set("pass", data.password);
  const response = await axios.post(
    "https://api.azaiza.com/api/user/auth/signup",
    data
  );
  return response.data;
};

const SignUp = () => {
  const { data: sessionData, update } = useSession();
  const [backendError, setBackendError] = useState<string | null | undefined>();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({ resolver: zodResolver(signUpSchema) });

  const signUpMutation = useMutation(signUpUser, {
    onSuccess: async (resData) => {
      Cookies.set("email", resData?.data?.user?.email);
      Cookies.set("_id", resData?.data?.user?._id);
      const password = Cookies.get("pass");
      const response = await signIn("credentials", {
        emailOrUserName: resData?.data?.user.email,
        password: password,
        redirect: false,
      });

      //   @ts-expect-error data not found
      if (response?.data?.message) {
        setBackendError(response.error);
      } else {
        console.log("🚀 ~ onSuccess: ~ response:", response);
        router.push("/user-verification");
      }
    },
    onError: (error) => {
      //@ts-expect-error response not found
      setBackendError(error?.response.data?.message);
    },
  });

  const onSubmit = async (data: SignUpFormValues) => {
    setBackendError(null);
    signUpMutation.mutate(data);
  };

  return (
    <AuthFormWrapper
      title="Register"
      description={
        <p className="italic">
          Fill in the information to create your new <b>ADS</b> account!
        </p>
      }
      ctaQuestion="Already have an account?"
      ctaLinkText="Login Now"
      ctaLink="/login"
    >
      {backendError && (
        <div className="flex items-center gap-2 p-2 mb-6 text-center rounded-lg text-danger-dark bg-danger-light">
          <div className="p-2 rounded-lg bg-danger-light-hover">
            <CircleExclamationIcon size={26} className=" text-danger-dark" />
          </div>
          <p className="text-sm font-medium">{backendError}</p>
        </div>
      )}
      <div className="space-y-3">
        <form className="space-y-1" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email"
            type="email"
            placeholder="i.e. john@mail.com"
            {...register("email")}
            error={!!errors.email?.message}
            errorMessage={errors.email?.message}
            containerClassname="md:m-0"
            autoComplete="email"
          />
          <Input
            label="User Name"
            type="text"
            placeholder="ahmedazy.uxui"
            {...register("userName")}
            error={!!errors.userName?.message}
            errorMessage={errors.userName?.message}
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
          <Input
            label="Confirm Your Password"
            type="password"
            placeholder="******"
            {...register("confirmPassword")}
            error={!!errors.confirmPassword?.message}
            errorMessage={errors.confirmPassword?.message}
            autoComplete="password"
          />
          <Button
            type="submit"
            className="w-full mb-2"
            disabled={isSubmitting || signUpMutation.isLoading}
          >
            {isSubmitting || signUpMutation.isLoading
              ? "Signing up..."
              : "Sign Up"}
          </Button>
          <p className="text-sm text-center">
            By clicking “Register” you agree to our{" "}
            <Link
              href="/"
              className="italic font-medium underline underline-offset-1"
            >
              terms of use
            </Link>{" "}
            and{" "}
            <Link
              href="/"
              className="italic font-medium underline underline-offset-1"
            >
              privacy policy
            </Link>
            .
          </p>
        </form>
        <div className="flex flex-col items-center gap-6 pt-3">
          <div className="relative w-full">
            <hr className="w-full text-background-light" />
            <p className="absolute px-1 text-sm font-medium text-center bg-white text-background-dark inset-x-1/4 md:inset-x-1/3 -top-2.5">
              Or Continue With
            </p>
          </div>
          <Button
            intent="custom"
            type="button"
            onClick={() =>
              signIn("google", { callbackUrl: "/", redirect: true })
            }
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

export default SignUp;
