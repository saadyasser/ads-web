// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            // You can perform any custom operations after login here
            console.log("User:", user);
            console.log("Account:", account);
            console.log("Profile:", profile);

            // Example: Log the user in your database if they are new
            try {
                const response = await fetch(`${process.env.NEXTAUTH_URL}/api/adduser`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    email: user.email,
                    name: user.name,
                    image: user.image,
                  }),
                });
        
                if (!response.ok) {
                  console.error("Failed to call API after login");
                  return false; // Return false if you want to prevent sign-in
                }
        
                console.log("API called successfully after login");
                return true; // Return true to continue sign-in
              } catch (error) {
                console.error("Error calling API after login:", error);
                return false;
              }

            return true; // Allow sign-in
        },
        async session({ session, token }) {
            // Attach custom data to the session if needed
            session.user.id = token.sub;  // Example: Add user ID to session
            session.user.role = "user";   // Add a role to the session (optional)
            return session;
        },
    },
});

export { handler as GET, handler as POST };
