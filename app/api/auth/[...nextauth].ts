import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        //   const res = await fetch("http://localhost:8000/api/login", {
        //     method: 'POST',
        //     body: JSON.stringify(credentials),
        //     headers: { "Content-Type": "application/json" }
        //   })
        //   const user = await res.json()
        //   if (res.ok && user) {
        //     return user
        //   }
        //   return null
        const user = {
          id: "1",
          name: "test",
          username: credentials?.username,
          image: "https://www.picsum.photos/200",
          email: `${credentials?.username}@gmail.com`,
        } as User;
        return user;
      },
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
