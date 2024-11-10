// @ts-ignore
import NextAuth, { AuthOptions, Session, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import type { ApiResponse, CredentialsInput, UserT } from "@/types/next-auth";

const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        emailOrUserName: { label: "Email or Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await fetch(
            `https://api.azaiza.com/api/user/auth/login`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                emailOrUserName: credentials?.emailOrUserName,
                password: credentials?.password,
              }),
            }
          );

          const data: ApiResponse = await response.json();

          if (data.statusCode >= 400) {
            throw new Error(data.message);
          }

          return {
            accessToken: data.data.accessToken,
            refreshToken: data.data.refreshToken,
            isEmailVerified: data.data.isEmailVerified,
            user: data.data.user,
          } as User;
        } catch (error) {
          throw new Error(
            error instanceof Error ? error.message : "Authentication failed"
          );
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          const response = await fetch(
            `https://api.azaiza.com/api/user/auth/google`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ token: account.id_token }),
            }
          );

          const data: ApiResponse = await response.json();

          if (data.statusCode >= 400) {
            throw new Error(data.message);
          }

          Object.assign(user, {
            accessToken: data.data.accessToken,
            refreshToken: data.data.refreshToken,
            isEmailVerified: data.data.isEmailVerified,
            isNewUser: data.data.user.createdAt === data.data.user.updatedAt,
            userDetails: data.data.user,
          });
        } catch (error) {
          return false;
        }
      }
      return true;
    },

    async jwt({ token, user, account }): Promise<JWT> {
      if (user && account?.provider === "google") {
        return {
          ...token,
          isNewUser: user.isNewUser,
          accessToken: user.accessToken!,
          refreshToken: user.refreshToken!,
          isEmailVerified: user.userDetails!.isEmailVerified,
          user: user.userDetails!,
        };
      } else if (user && account?.provider === "credentials") {
        return {
          ...token,
          accessToken: user.accessToken!,
          refreshToken: user.refreshToken!,
          isEmailVerified: user.isEmailVerified!,
          user: user.user!,
        };
      }
      return token;
    },

    async session({ session, token }): Promise<Session> {
      return {
        ...session,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        isEmailVerified: token.isEmailVerified,
        isNewUser: token.isNewUser,
        user: token.user,
      };
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
