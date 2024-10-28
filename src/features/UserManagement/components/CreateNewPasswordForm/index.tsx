"use client";
import { useForm, SubmitHandler, FieldError } from "react-hook-form";
import React, { useEffect } from "react";
import { Button, Input } from "@/components";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

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
  const recoverToken = Cookies.get("recoverToken");

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
        console.error("Error:", error.message);
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        containerClassname="mb-6"
        label="Password"
        type="password"
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

      <Button
        type="submit"
        className="w-full !py-4"
        disabled={mutation.isLoading}
      >
        Send Verification Code
      </Button>
    </form>
  );
};

export default CreateNewPasswordForm;
