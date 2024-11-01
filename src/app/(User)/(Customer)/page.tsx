"use client";
import React from "react";
import { Button, Container } from "@/components";
import { useSession } from "next-auth/react";

export default function LandingPage() {
  const { data } = useSession();
  console.log("🚀 ~ LandingPage ~ data:", data);
  return (
    <>
      <Container className="flex w-full gap-2 py-[200px]">
        <div className="">lorem</div>
        <p className="text-white"> {data && JSON.stringify(data)}</p>
      </Container>
    </>
  );
}
