"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import type { ReactElement } from "react";

export function SignOutButton(): ReactElement {
  return (
    <div className="flex items-center space-x-2 text-neutral-300 hover:bg-neutral-700 rounded-md px-2 py-1">
      <LogOut className="w-4" />
      <button
        type="button"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises -- will fix later
        onClick={() => signOut({ callbackUrl: "/api/auth/signin" })}
      >
        Signout
      </button>
    </div>
  );
}
