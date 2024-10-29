"use client";

import { AuthFormWrapper } from "@/features/UserManagement/components";
import ForgetPasswordForm from "@/features/UserManagement/components/ForgetPasswordForm";
import VerificationCodeSent from "@/features/UserManagement/components/VerificationFormSent";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie"; // Import js-cookie
import CreateNewPasswordForm from "@/features/UserManagement/components/CreateNewPasswordForm";
import { useRouter } from "next/navigation";

const ForgetPasswordFlow = () => {
  const router = useRouter();
  const [isFlowCompleted, setIsFlowCompleted] = useState(false);
  const [hasId, setHasId] = useState(() => {
    const id = Cookies.get("_id");
    return !!id;
  });
  const [hasRecoverToken, setRecoverToken] = useState(() => {
    const recoverToken = Cookies.get("recoverToken");
    return !!recoverToken;
  });

  const onForgetPasswordSuccess = () => {
    setHasId(true);
  };

  const onVerificationCodeSentSuccess = () => {
    setRecoverToken(true);
  };

  return (
    <>
      {isFlowCompleted ? (
        <AuthFormWrapper
          isSuccess={true}
          title="Successfully Changed Password"
          description="Please enter the verification code sent to your email."
          ctaLinkText="Resend Code"
          ctaLink="/login"
        />
      ) : !!hasRecoverToken ? (
        <CreateNewPasswordForm
          onSuccess={() => {
            setIsFlowCompleted(true);
          }}
        />
      ) : hasId ? (
        <AuthFormWrapper
          title="Enter Verification Code"
          description="Please enter the verification code sent to your email."
          ctaQuestion="Didn't receive the code?"
          ctaLinkText="Resend Code"
          ctaLink="/login"
        >
          <VerificationCodeSent onSuccess={onVerificationCodeSentSuccess} />
        </AuthFormWrapper>
      ) : (
        <AuthFormWrapper
          title="Reset Your Password"
          description="Enter your email address to recover your password!"
          ctaQuestion="Remember your password?"
          ctaLinkText="Back to Login"
          ctaLink="/login"
        >
          <ForgetPasswordForm onSuccess={onForgetPasswordSuccess} />
        </AuthFormWrapper>
      )}
    </>
  );
};

export default ForgetPasswordFlow;
