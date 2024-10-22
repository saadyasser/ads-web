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
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          // `credentials` is used to generate a form on the sign in page.
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied
            const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
      
            if (user) {
              // Any object returned will be saved in `user` property of the JWT
              return user
            } else {
              // If you return null then an error will be displayed advising the user to check their details.
              return null
      
              // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
          }
        })
    ],
    callbacks: {
        async signIn({ user, account, profile }) {


            console.log("Provider", account.provider);
            

            // Example: Log the user in your database if they are new
            // try {
            //     const response = await fetch(`${process.env.NEXTAUTH_URL}/api/adduser`, {
            //       method: "POST",
            //       headers: {
            //         "Content-Type": "application/json",
            //       },
            //       body: JSON.stringify({
            //         email: user.email,
            //         name: user.name,
            //         image: user.image,
            //       }),
            //     });
        
            //     if (!response.ok) {
            //       console.error("Failed to call API after login");
            //       return false; // Return false if you want to prevent sign-in
            //     }
        
            //     console.log("API called successfully after login");
            //     return true; // Return true to continue sign-in
            //   } catch (error) {
            //     console.error("Error calling API after login:", error);
            //     return false;
            //   }

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
