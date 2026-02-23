"use client";
import { SessionProvider } from "next-auth/react";
import LayoutGlobal from "@/app/_Components/layout";
import "@/app/_scss/index.scss";
import "animate.css";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import Loading from "./loading";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Suspense fallback={<Loading />}>
        <LayoutGlobal>
          {children}
          <Toaster />
        </LayoutGlobal>
      </Suspense>
    </SessionProvider>
  );
}
