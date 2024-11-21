import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";

import client from "@/services/mongodb/mongodb-client";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(client),
  providers: [],
});
