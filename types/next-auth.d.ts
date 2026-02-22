// src/types/next-auth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User extends DefaultUser {
    id?: string; // معمولاً string
    username?: string;
    accessToken?: string; // ← optional کن مهم
    refreshToken?: string;
    // role?: string;
    // هر فیلد دیگه‌ای که می‌خوای
  }

  interface Session {
    accessToken?: string;
    user?: {
      id?: string; // معمولاً اجباری می‌کنن
      username?: string;
      accessToken?: string; // ← اینجا اضافه کن
      // role?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    accessToken?: string;
    refreshToken?: string;
    username?: string;
    // role?: string;
    // accessTokenExp?: number;  ← اگه expiration داری
  }
}
