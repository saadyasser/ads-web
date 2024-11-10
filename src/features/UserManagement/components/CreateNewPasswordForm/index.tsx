"use client";
import { useForm, SubmitHandler, FieldError } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { Button, Input } from "@/components";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { CircleExclamationIcon } from "@/lib/@react-icons";
import AuthFormWrapper from "../AuthFormWrapper";

type Inputs = {
  password: string;
  confirmPassword: string;
  recoverToken: string;
};

interface SuccessResponse {
  status: "success";
  statusCode: number;
  message: string;
  data: any;
}

interface ErrorResponse {
  status: "failed";
  statusCode: number;
  message: string;
  data: null;
}
type ApiResponse = SuccessResponse | ErrorResponse;

const CreateNewPasswordForm = ({
  onSuccess = () => {},
}: {
  onSuccess: () => void;
}) => {
  const [backendError, setBackendError] = useState("");
  const router = useRouter();
  const recoverToken = Cookies.get("recoverToken");
  // useEffect(() => {
  if (!recoverToken || recoverToken === undefined) {
    router.push("/forget-password");
  }
  // }, [recoverToken]);
  const mutation = useMutation<ApiResponse, any, Inputs>(
    (formData: Inputs) =>
      axios.post("https://api.azaiza.com/api/user/password/recover", formData),
    {
      onSuccess: (response) => {
        Cookies.remove("_id");
        Cookies.remove("recoverToken");
        onSuccess();
      },
      onError: (error) => {
        const errResponse = error.response?.data as ErrorResponse;
        setBackendError(errResponse.message);
      },
    }
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    defaultValues: { recoverToken },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (isValid) {
      mutation.mutate(data);
    }
  };

  return (
    <AuthFormWrapper
      title="Create New Password"
      description="Create strong new password for your account, and remember don’t share it with anybody else!"
      ctaQuestion=""
      ctaLinkText=""
      catAction={() => {}}
      ctaLink="/"
    >
      {backendError && (
        <div className="flex items-center gap-2 p-2 mb-6 text-center rounded-lg text-danger-dark bg-danger-light">
          <div className="p-2 rounded-lg bg-danger-light-hover">
            <CircleExclamationIcon size={26} className=" text-danger-dark" />
          </div>
          <p className="text-sm font-medium">{backendError}</p>
        </div>
      )}
      <form
        className="flex flex-col space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="Password"
          type="password"
          floatLabel
          placeholder="Enter your password"
          {...register("password", {
            required: "Password is required",
            pattern: {
              value:
                /^(?![^A-Za-z0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\S]{8,}$/,
              message: "Enter a valid password",
            },
          })}
          error={!!errors.password}
          errorMessage={(errors.password as FieldError)?.message}
        />
        <Input
          label="Confirm Password"
          type="password"
          floatLabel
          placeholder="Confirm your password"
          {...register("confirmPassword", {
            required: "Confirm password is required",
            pattern: {
              value:
                /^(?![^A-Za-z0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\S]{8,}$/,
              message: "Enter a valid password",
            },
          })}
          error={!!errors.confirmPassword}
          errorMessage={(errors.confirmPassword as FieldError)?.message}
        />

        <input type="hidden" {...register("recoverToken")} />
        <p className="text-sm">
          Use 8 or more characters with a mix of letters, numbers and symbols.
          Must not contain your name or username.
        </p>
        <Button
          type="submit"
          className="w-full !py-4"
          disabled={mutation.isLoading}
        >
          {mutation.status === "loading"
            ? "Changinging..."
            : "Change Your Password"}
        </Button>
      </form>
    </AuthFormWrapper>
  );
};

export default CreateNewPasswordForm;
