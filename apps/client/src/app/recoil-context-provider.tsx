"use client";

import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";

export function RecoilContextProvider({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  return (
    <SessionProvider>
      <RecoilRoot>{children}</RecoilRoot>
    </SessionProvider>
  );
}
