"use client";
import VerificationCodeSent from "@/features/UserManagement/components/VerificationFormSent";
import { useRouter } from "next/navigation";
import React from "react";

const UserVerification = () => {
  const router = useRouter();
  return <VerificationCodeSent onSuccess={() => router.push("/")} />;
};

export default UserVerification;
