"use client";

import { AuthFormWrapper } from "@/features/UserManagement/components";
import ForgetPasswordForm from "@/features/UserManagement/components/ForgetPasswordForm";
import VerificationCodeSent from "@/features/UserManagement/components/VerificationFormSent";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie"; // Import js-cookie
import CreateNewPasswordForm from "@/features/UserManagement/components/CreateNewPasswordForm";
import { useRouter } from "next/navigation";
import axios from "axios";

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

  const [isResending, setIsResending] = useState(false);
  const resendCode = async () => {
    const email = Cookies.get("email");
    setIsResending(true);
    const response = await axios.post(
      "https://api.azaiza.com/api/user/password/forgot",
      {
        email,
      }
    );
    setIsResending(false);
  };
  return (
    <>
      {isFlowCompleted ? (
        <AuthFormWrapper
          isSuccess={true}
          title="Successfully Changed Password"
          description={
            <p>
              Your password has been changed successfully.
              <br />
              Use your new password to log in.
            </p>
          }
          ctaLinkText="Back to Login"
          ctaLink="/login"
        />
      ) : !!hasRecoverToken ? (
        <CreateNewPasswordForm
          onSuccess={() => {
            setIsFlowCompleted(true);
          }}
        />
      ) : hasId ? (
        <VerificationCodeSent
          resendStatus="FORGET"
          handleSuccess={() => {
            onVerificationCodeSentSuccess();
          }}
        />
      ) : (
        <AuthFormWrapper
          title="Reset Your Password"
          description="Enter your email address to recover your password!"
          ctaQuestion="Remember your password?"
          catAction={resendCode}
          ctaLinkText="Back to Login"
        >
          <ForgetPasswordForm onSuccess={onForgetPasswordSuccess} />
        </AuthFormWrapper>
      )}
    </>
  );
};

export default ForgetPasswordFlow;
