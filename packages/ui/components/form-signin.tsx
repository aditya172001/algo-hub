"use client";

import { type ReactNode, useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { Ban } from "lucide-react";

export function FormSignin({ googleicon }: { googleicon: string }): ReactNode {
  const [myerror, setMyerror] = useState<string | null>(null);

  async function handleSignin(): Promise<void> {
    try {
      await signIn("google", { callbackUrl: "/problems" });
    } catch (error) {
      setMyerror("Internal Server Error, Try Again");
    }
  }

  return (
    <div className="">
      <button
        type="button"
        className="w-full h-11 rounded-md border border-neutral-950 bg-neutral-900 hover:bg-neutral-950 text-neutral-200 font-semibold mb-5 flex items-center justify-center"
        onClick={handleSignin}
      >
        <Image src={googleicon} width={20} height={20} alt="goole-icon" />
        <div className="pl-2">Sign in with google</div>
      </button>
      {myerror ? (
        <div className="flex items-center">
          <Ban className="text-red-500 h-4 " />
          <div className="text-red-100">{myerror}</div>
        </div>
      ) : null}
    </div>
  );
}
