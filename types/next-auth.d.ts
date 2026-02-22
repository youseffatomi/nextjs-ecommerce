// src/types/next-auth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User extends DefaultUser {
    user_nicename?: string;
    token?: string;
  }

  interface Session {
    token?: string;
    user?: {
      user_nicename?: string;
      token?: string;
      // role?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    token?: string;
    user_nicename?: string;
  }
}
