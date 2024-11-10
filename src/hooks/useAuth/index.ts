export interface UserSession {
  id: string;
  email: string;
  role: "user" | "publisher";
  verified: boolean;
  name?: string;
}

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export function useRequireAuth(options?: {
  requireVerified?: boolean;
  requirePublisher?: boolean;
}) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null;
  }

  if (!session) {
    redirect("/login");
  }

  if (options?.requireVerified && !session?.user.isEmailVerified) {
    redirect("/verify-account");
  }

  if (options?.requirePublisher && session?.user.role !== "publisher") {
    redirect("/");
  }

  return session;
}

export function useRequireGuest() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null;
  }

  if (session) {
    redirect("/");
  }

  return true;
}

export function useOptionalAuth() {
  const { data: session, status } = useSession();
  return { session, status };
}
