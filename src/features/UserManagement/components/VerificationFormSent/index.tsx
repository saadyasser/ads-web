"use client";
import { useForm, SubmitHandler, FieldError } from "react-hook-form";
import React, { useState } from "react";
import { Button, Input } from "@/components";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  Otp,
} from "@/components/ui/input-otp";
import { isDirty } from "zod";

type Inputs = {
  code: string;
  _id: string;
};

interface SuccessResponse {
  status: string;
  statusCode: number;
  message: string;
  data: null;
}
interface ErrorResponse {
  status: string;
  statusCode: number;
  message: string;
  data: null;
}

const VerificationCodeSent = () => {
  const mutation = useMutation((formData: Inputs) =>
    axios.post("https://api.azaiza.com/api/user/password/verify-code", formData)
  );

  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<Inputs>({ defaultValues: { code: "", _id: "123456" } });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (isValid) {
      console.log("success");
      mutation.mutate(data, {
        onSuccess: (response) => {
          console.log(mutation.data, "onsuccess");
        },
        onError: (error) => {
          setErrorMessage(mutation.error.response.data.message);
        },
      });
    }
  };

  console.log(errors, isDirty, "errors");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        control={control}
        name="code"
        rules={{
          required: "PIN is required",
          minLength: { value: 6, message: "PIN must be exactly 6 digits" },
          maxLength: { value: 6, message: "PIN must be exactly 6 digits" },
          pattern: {
            value: /^[0-9]{6}$/, // Ensures it's 6 digits
            message: "PIN must be a 6-digit number",
          },
        }}
        render={({ field }) => (
          <FormItem>
            <Otp
              errorMessage={errorMessage}
              maxLength={6}
              value={field.value} // Hook up the field value to the OTPInput
              onChange={field.onChange} // Ensure this updates the form state
              onBlur={field.onBlur}
            />
          </FormItem>
        )}
      />
      <input type="hidden" {...register("_id")} />
      <Button
        type="submit"
        className="w-full !py-4"
        disabled={mutation.isLoading || !!errors.pin || !isValid}
      >
        Send Verification Code
      </Button>
    </form>
  );
};

export default VerificationCodeSent;
