import { type ReactElement } from "react";
import { FormSignin } from "ui";

export default function SigninPage(): ReactElement {
  return (
    <div className="flex items-center justify-center h-screen bg-neutral-900">
      <div className="border border-transparent rounded-md shadow-lg p-16 bg-neutral-800">
        <div className="w-96">
          <div className="text-xl font-medium pb-5 text-neutral-200">
            Sign in to your account
          </div>
          <FormSignin googleicon="/google-icon.svg" />
        </div>
      </div>
    </div>
  );
}
