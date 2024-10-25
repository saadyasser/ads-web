"use client";

import {
  AuthFormWrapper,
  CreateNewPasswordForm,
} from "@/features/UserManagement/components";
import ForgetPasswordForm from "@/features/UserManagement/components/ForgetPasswordForm";
import VerificationCodeSent from "@/features/UserManagement/components/VerificationFormSent";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie"; // Import js-cookie

const ForgetPassword = () => {
  const [hasId, setHasId] = useState(() => {
    const id = Cookies.get("_id");
    return !!id;
  });
  const [hasRecoverToken, setRecoverToken] = useState(() => {
    const recoverToken = Cookies.get("recoverToken");
    return !!recoverToken;
  });

  return (
    <>
      {!!hasRecoverToken ? (
        <CreateNewPasswordForm />
      ) : hasId ? (
        <AuthFormWrapper
          title="Enter Verification Code"
          description="Please enter the verification code sent to your email."
          ctaQuestion="Didn't receive the code?"
          ctaLinkText="Resend Code"
          ctaLink="/login"
        >
          <VerificationCodeSent />
        </AuthFormWrapper>
      ) : (
        <AuthFormWrapper
          title="Reset Your Password"
          description="Enter your email address to recover your password!"
          ctaQuestion="Remember your password?"
          ctaLinkText="Back to Login"
          ctaLink="/login"
        >
          <ForgetPasswordForm />
        </AuthFormWrapper>
      )}
    </>
  );
};

export default ForgetPassword;
