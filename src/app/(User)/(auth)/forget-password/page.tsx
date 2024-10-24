import { AuthFormWrapper } from "@/features/UserManagement/components";
import ForgetPasswordForm from "@/features/UserManagement/components/ForgetPasswordForm";
import VerificationCodeSent from "@/features/UserManagement/components/VerificationFormSent";
import React from "react";

const ForgetPassword = () => {
  return (
    <>
      {/* <AuthFormWrapper
        title="Reset Your Password"
        description="Enter your email address to recover your password!"
        ctaQuestion="Remember your password?"
        ctaLinkText="Back to Login"
        ctaLink="/login"
      >
        <ForgetPasswordForm />
      </AuthFormWrapper> */}
      <AuthFormWrapper
        title="Reset Your Password"
        description="Enter your email address to recover your password!"
        ctaQuestion="Remember your password?"
        ctaLinkText="Back to Login"
        ctaLink="/login"
      >
        <VerificationCodeSent />
      </AuthFormWrapper>
    </>
  );
};

export default ForgetPassword;
