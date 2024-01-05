import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TransparentBackground } from "ui";
import { TrpcProvider } from "./_trpc/trpc-provider";
import { RecoilContextProvider } from "./recoil-context-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AlgoHub",
  description: "A leetcode clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <html lang="en" className="bg-neutral-900 text-white">
      <body className={inter.className} style={{ userSelect: "none" }}>
        <RecoilContextProvider>
          <TrpcProvider>
            <TransparentBackground>{children}</TransparentBackground>
          </TrpcProvider>
        </RecoilContextProvider>
      </body>
    </html>
  );
}
