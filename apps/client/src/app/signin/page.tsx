import { type ReactElement } from "react";
import { FormSignin, ProgressBar } from "ui";

export default function SigninPage(): ReactElement {
  return (
    <>
      <div className="absolute h-1 w-full">
        <ProgressBar />
      </div>
      <div className="grid grid-col-3 grid-flow-col h-screen">
        <div className="md:flex items-center justify-center hidden md:visible md:col-span-1 bg-black text-3xl font-bold text-neutral-100">
          AlgoHub
        </div>
        <div className="p-4 sm:p-0 col-span-3 md:col-span-2 flex items-center justify-center">
          <div className="w-96">
            <div className=" text-2xl font-bold text-center pb-8">
              Get Started
            </div>
            <div className="rounded-md shadow-lg p-12 bg-neutral-800">
              <div className="text-sm font-light pb-4 text-center">
                Signin to continue to AlgoHub
              </div>
              <FormSignin googleicon="/google-icon.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
