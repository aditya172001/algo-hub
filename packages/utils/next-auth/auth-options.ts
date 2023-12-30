import type { NextAuthOptions, Profile } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "../../database/prisma/connect";

interface CustomProfile extends Profile {
  email_verified?: boolean;
  picture?: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  callbacks: {
    async signIn(params) {
      const { profile } = params as { profile: CustomProfile };

      if (!profile || !profile.name || !profile.email) return false;

      const existingUser = await prisma.user.findUnique({
        where: { email: profile.email },
      });
      if (existingUser) return true;
      else {
        try {
          const newUser = await prisma.user.create({
            data: {
              name: profile.name,
              email: profile.email,
              emailVerified: profile.email_verified,
              image: profile.picture,
            },
          });
          return true;
        } catch (error) {
          console.error("error in saving new user in nextauth signin callback");
          return false;
        }
      }
    },
    async jwt({ token, account }) {
      if (account) token.id_token = account.id_token!;
      return token;
    },
    async session({ session, token }) {
      // @ts-expect-error -- havend added id_token in .d.ts
      session.id_token = token.id_token as string;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
};
