"use client";

import { AuthFormWrapper } from "@/features/UserManagement/components";
import ForgetPasswordForm from "@/features/UserManagement/components/ForgetPasswordForm";
import VerificationCodeSent from "@/features/UserManagement/components/VerificationFormSent";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie"; // Import js-cookie
import CreateNewPasswordForm from "@/features/UserManagement/components/CreateNewPasswordForm";
import ForgetPasswordFlow from "@/features/UserManagement/components/ForgetPasswordFlow";

const ForgetPassword = () => {
  return <ForgetPasswordFlow />;
};

export default ForgetPassword;
