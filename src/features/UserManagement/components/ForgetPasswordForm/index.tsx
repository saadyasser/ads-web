"use client";
import { useForm, SubmitHandler, FieldError } from "react-hook-form";
import React from "react";
import { Button, Input } from "@/components";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type Inputs = {
  email: string;
};

const ForgetPasswordForm = () => {
  const mutation = useMutation((formData: Inputs) =>
    axios.post("https://api.azaiza.com/api/user/password/forgot", formData)
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (isValid) {
      console.log("success");
      mutation.mutate(data, {
        onSuccess: (response) => {
          console.log("Form submitted successfully!", response.data);
        },
        onError: (error) => {
          console.error("Error submitting the form:", error);
        },
      });
    } else {
      console.log("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        containerClassname="mb-6"
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
        Send Verification Code
      </Button>
    </form>
  );
};

export default ForgetPasswordForm;
