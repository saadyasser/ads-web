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
      async authorize(credentials) {
        const response = await fetch(
          `https://api.azaiza.com/api/user/auth/login`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              emailOrUserName: credentials.emailOrUserName,
              password: credentials.password,
            }),
          }
        );

        const data = await response.json();
        console.log("🚀 ~ authorize ~ data:", data);
        if (data.statusCode >= 400) {
          throw new Error(data?.message);
        } else {
          return {
            accessToken: data.data.accessToken,
            refreshToken: data.data.refreshToken,
            isEmailVerified: data.data.isEmailVerified,
            user: data.data.user,
          };
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // if (account.provider === "google") {
      //   const response = await fetch(
      //     `https://api.azaiza.com/api/user/auth/google`,
      //     {
      //       method: "POST",
      //       headers: { "Content-Type": "application/json" },
      //       body: JSON.stringify({ token: account.access_token }),
      //     }
      //   );

      //   const data = await response.json();
      //   if (!data.ok || data.statusCode >= 400) {
      //     throw new Error(data?.message);
      //   }
      // }
      return { user, account, profile }; // Allow sign-in
    },

    async jwt({ token, user, account, profile, trigger }) {
      console.log("🚀 ~ jwt ~ user:", user);
      if (user && account && account.provider === "google") {
        token.accessToken = account.access_token;
        token.refreshToken = "";
        token.isEmailVerified = true;
        token.user = account;
      }
      if (user && account.provider === "credentials") {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.isEmailVerified = user.isEmailVerified;
        token.user = user.user;
      }
      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.isEmailVerified = token.isEmailVerified;
      session.user = token.user;
      console.log("🚀 ~ session ~ session:", session);

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
