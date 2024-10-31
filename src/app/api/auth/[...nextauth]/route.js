// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const user = {
          emailOrUserName: credentials.emailOrUserName,
          password: credentials.password,
        };
        if (user) {
          const response = await fetch(
            `https://api.azaiza.com/api/user/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                emailOrUserName: user.emailOrUserName,
                password: user.password,
              }),
            }
          );
          const data = await response.json();
          if (!data.ok) {
            throw new Error(data?.message);
          }
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("Provider", account, user, profile);
      console.log("Provider", account.provider);
      // handling google auth
      if (account.provider === "google") {
        const response = await fetch(
          `https://api.azaiza.com/api/user/auth/google`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token: account?.access_token,
            }),
          }
        );
        const data = await response.json();
        console.log("🚀 ~ signIn ~ data:", data);
        if (!data.ok || data.statusCode >= 400) {
          throw new Error(data?.message);
        }
        return user;
      } else {
        return null;
      }
    },
    // return true; // Allow sign-in
  },
  async session({ session, token }) {
    console.log("🚀 ~ session ~ token:", token);
    console.log("🚀 ~ session ~ session:", session);

    return session;
  },
  pages: {
    signIn: "/login",
    // newUser: "/sign-up",
    // "signOut":false,
    // "error": "/[...nextauth]/error",
    // "verify": "/[...nextauth]/verify/[...params]",
    // "account": "/[...nextauth]/account",
    // "api/auth/callback": "/api/auth/callback",
  },
});

export { handler as GET, handler as POST };
