    // app/api/auth/[...nextauth]/route.ts (or pages/api/auth/[...nextauth].ts)
    import NextAuth from 'next-auth';
    import CredentialsProvider from 'next-auth/providers/credentials';
    // Import your database or authentication logic here (e.g., Prisma, custom API)

    export const authOptions = {
      providers: [
        CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email: { label: 'Email', type: 'email' },
            password: { label: 'Password', type: 'password' },
          },
          async authorize(credentials) {
            // Implement your credential validation logic here
            // e.g., fetch user from database, compare hashed password
            if (!credentials?.email || !credentials?.password) {
              return null; // Or throw an error
            }

            // Example: Replace with your actual authentication logic
           const user = {
          id: "1",
          name: "Test User",
          email: process.env.DEMO_USER,
          password: process.env.DEMO_PASS, // demo password
        }; // Replace with actual user lookup
            const isValidPassword = true; // Replace with actual password validation

            if (user && isValidPassword) {
              return user;
            } else {
              return null;
            }
          },
        }),
      ],
      // Add other configurations like session, callbacks, etc.
      session: {
        strategy: 'jwt', // Required for CredentialsProvider
      },
    };

    const handler = NextAuth(authOptions);
    export { handler as GET, handler as POST };