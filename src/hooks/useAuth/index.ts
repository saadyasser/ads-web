"use client";

import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function useRequireAuth(options?: {
  requireVerified?: boolean;
  requirePublisher?: boolean;
}): Session | null {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null;
  }

  if (!session) {
    router.push("/login");
  }

  if (options?.requireVerified && !session?.user.isEmailVerified) {
    router.push("/verify-account");
  }

  if (options?.requirePublisher && session?.user.role !== "publisher") {
    router.push("/");
  }

  return session;
}

export function useRequireGuest(): boolean | null {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null;
  }

  if (session) {
    router.push("/");
  }

  return true;
}

export function useOptionalAuth(): {
  session: Session | null;
  status: "authenticated" | "loading" | "unauthenticated";
} {
  const { data: session, status } = useSession();
  return { session, status };
}
