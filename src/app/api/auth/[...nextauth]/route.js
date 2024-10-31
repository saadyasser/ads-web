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
        if (!data.ok) {
          throw new Error(data?.message);
        }
        return { id: data.id, name: data.name, email: data.email };
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
      return true; // Allow sign-in
    },

    async jwt({ token, user, account, profile }) {
      // If it's the first time, add user, profile, and account to the token
      if (user) {
        token.user = user;
        token.account = account;
        token.profile = profile;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = token.user;
      session.account = token.account;
      session.profile = token.profile;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
