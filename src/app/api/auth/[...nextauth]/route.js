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
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const response = await fetch(
          `https://api.azaiza.com/api/user/auth/google`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: account.id_token }),
          }
        );

        const data = await response.json();
        if (data.statusCode >= 400) {
          throw new Error(data?.message);
        } else {
          // Merge API response into `user` so `jwt` callback receives it
          user.accessToken = data.data.accessToken;
          user.refreshToken = data.data.refreshToken;
          user.isEmailVerified = data.data.isEmailVerified;
          user.isNewUser = data.data.isNewUser;
          user.userDetails = data.data.user;
        }
      }
      return true;
    },

    async jwt({ token, user, account }) {
      if (user && account?.provider === "google") {
        token.isNewUser = user.isNewUser;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.isEmailVerified = user.userDetails.isEmailVerified;
        token.user = user.userDetails;
      } else if (user && account?.provider === "credentials") {
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
      session.isNewUser = token.isNewUser;
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
