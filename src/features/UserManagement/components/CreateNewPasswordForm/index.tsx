"use client";
import { useForm, SubmitHandler, FieldError } from "react-hook-form";
import React from "react";
import { Button, Input } from "@/components";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { Router } from "lucide-react";
import { useRouter } from "next/router";

type Inputs = {
  recoverToken: string;
  password: string;
  confirmPassword: string;
};

interface SuccessResponse {
  status: "success";
  statusCode: number;
  message: string;
  data: any; // Replace `any` with your actual data type if available
}

interface ErrorResponse {
  status: "failed";
  statusCode: number;
  message: string;
  data: null;
}
type ApiResponse = SuccessResponse | ErrorResponse;

export const CreateNewPasswordForm = () => {
  const router = useRouter();
  const mutation = useMutation<ApiResponse, any, Inputs>(
    (formData: Inputs) =>
      axios.post("https://api.azaiza.com/api/user/password/recover", formData),
    {
      onSuccess: (response) => {
        router.push("/login"); // Redirect to login page after successful password recovery
      },
      onError: (error) => {
        console.log("Success:", error.message);
      },
    }
  );

  const recoverToken = Cookies.get("recoverToken");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    defaultValues: {
      recoverToken,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (isValid) {
      console.log("success");
      mutation.mutate(data);
    } else {
      console.log("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        containerClassname="mb-6"
        label="Passoword"
        type="password"
        placeholder="Enter your email address"
        {...register("password", {
          required: "Password is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Enter your password",
          },
        })} // Directly call register here
        error={!!errors.password} // Mark input as error if validation fails
        errorMessage={(errors.password as FieldError)?.message} // Extract message from FieldError
      />
      <Input
        containerClassname="mb-6"
        label="Confirm Passoword"
        type="password"
        placeholder="confirm your password"
        {...register("confirmPassword", {
          required: "Confirm password is required.",
          pattern: {
            value:
              /^(?![^A-Za-z0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\S]{8,}$/,
            message: "inValid password",
          },
        })} // Directly call register here
        error={!!errors.confirmPassword} // Mark input as error if validation fails
        errorMessage={(errors.confirmPassword as FieldError)?.message} // Extract message from FieldError
      />
      <input type="hidden" name="confirmPassword" value={recoverToken} />
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
