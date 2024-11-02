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
import Cookies from "js-cookie";
import AuthFormWrapper from "../AuthFormWrapper";
import { useSession } from "next-auth/react";

type Inputs = {
  code: string;
  _id: string;
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

const VerificationCodeSent = ({
  onSuccess = () => {},
  resendStatus,
}: {
  onSuccess?: () => void;
  resendStatus: "FORGET" | "VERIFICATION";
}) => {
  const mutation = useMutation<ApiResponse, any, Inputs>(
    (formData: Inputs) =>
      axios.post(
        "https://api.azaiza.com/api/user/password/verify-code",
        formData
      ),
    {
      onSuccess: (response) => {
        Cookies.set("recoverToken", response.data.data.recoverToken); // Save the user's _id in a cookie
        onSuccess();
      },
      onError: (error: any) => {
        const errResponse = error.response?.data as ErrorResponse;
        setErrorMessage(errResponse.message);
      },
    }
  );

  const [errorMessage, setErrorMessage] = useState("");

  const _id = Cookies.get("_id");

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<Inputs>({ defaultValues: { code: "", _id: _id } });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (isValid) {
      console.log("success");
      mutation.mutate(data);
    }
  };

  const [isResending, setIsResending] = useState(false);
  const { data: user } = useSession();

  const resendCode = async () => {
    setIsResending(true);
    if (resendStatus === "VERIFICATION") {
      const response = await axios.get(
        "https://api.azaiza.com/api/user/profile/verify",
        {
          headers: {
            // @ts-expect-error access token is not defined
            Authorization: `Bearer ${user?.accessToken}`,
          },
        }
      );
      setIsResending(false);
    } else {
      const email = Cookies.get("email");
      setIsResending(true);
      const response = await axios.post(
        "https://api.azaiza.com/api/user/password/forgot",
        {
          email,
        }
      );
      setIsResending(false);
    }
  };

  return (
    <AuthFormWrapper
      title="Enter Verification Code"
      description="Please enter the verification code sent to your email."
      ctaQuestion="Didn't receive the code?"
      ctaLinkText={isResending ? "Resending..." : "Resend Code"}
      catAction={() => {
        resendCode();
      }}
      ctaLink="/"
    >
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
        <input type="hidden" {...register("_id")} value={_id} />
        <Button
          type="submit"
          className="w-full !py-4"
          disabled={mutation.isLoading || !!errors.code || !isValid}
        >
          {mutation.status === "loading"
            ? "Submiting..."
            : "Send Verification Code"}
        </Button>
      </form>
    </AuthFormWrapper>
  );
};

export default VerificationCodeSent;
