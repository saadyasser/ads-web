"use client";
import { useForm, SubmitHandler, FieldError } from "react-hook-form";
import React from "react";
import { Button, Input } from "@/components";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";

type Inputs = {
  email: string;
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

const ForgetPasswordForm = ({ onSuccess = () => {} }) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>();

  const mutation = useMutation<ApiResponse, any, Inputs>(
    (formData: Inputs) =>
      axios.post("https://api.azaiza.com/api/user/password/forgot", formData),
    {
      onSuccess: (response) => {
        Cookies.set("_id", response.data.data._id); // Save the user's _id in a cookie
        Cookies.set("email", watch("email"));
        onSuccess();
      },
      onError: (error) => {
        console.log("Success:", error.message);
      },
    }
  );

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
        label="Email"
        type="email"
        placeholder="Enter your email address"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Enter a valid email address",
          },
        })} // Directly call register here
        error={!!errors.email} // Mark input as error if validation fails
        errorMessage={(errors.email as FieldError)?.message} // Extract message from FieldError
      />

      <Button
        type="submit"
        className="w-full !py-4"
        disabled={mutation.isLoading}
      >
        {mutation.status === "loading"
          ? "Sending..."
          : "Send Verification Code"}
      </Button>
    </form>
  );
};

export default ForgetPasswordForm;
