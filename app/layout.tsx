"use client";
import { SessionProvider } from "next-auth/react";
import LayoutGlobal from "@/app/_Components/layout";
import "@/app/_scss/index.scss";
import { Toaster } from "react-hot-toast";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <LayoutGlobal>
        {children}
        <Toaster />
      </LayoutGlobal>
    </SessionProvider>
  );
}
