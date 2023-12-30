import NextAuth from "next-auth";
import { authOptions } from "utils";

const handler = NextAuth(authOptions); //eslint-disable-line -- it is of type any only

export { handler as GET, handler as POST };
