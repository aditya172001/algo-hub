"use client";

import { useEffect, type ReactElement } from "react";
import { trpc } from "server/src/utils/client";
import { redirect, useParams } from "next/navigation";
import { useRecoilValue } from "recoil";
import { userCodeState } from "store";
import { useSession } from "next-auth/react";

export function SubmitSection(): ReactElement {
  const parms = useParams();
  const quesNumber = parseInt(parms.quesNumber as string);
  const userCode = useRecoilValue(userCodeState);

  const submitResponse = trpc.user.submitSolution.useMutation();
  const { data: session } = useSession();
  useEffect(() => {
    if (
      submitResponse.data?.status === "error" &&
      submitResponse.data.message === "Unauthorized"
    )
      redirect("/api/auth/signin");
  }, [submitResponse.data]);

  function handleSubmit(): void {
    submitResponse.mutate({
      quesNumber,
      userCode,
      // @ts-expect-error -- it exists but havent updated .d.ts
      token: (session?.id_token || "") as string,
    });
  }

  return (
    <div className=" mt-2 rounded-md border border-neutral-600 bg-[#1e1e1e] row-span-1 flex items-center justify-between h-12 px-2">
      <div className="font-semibold">
        {submitResponse.isLoading ? (
          <span className=" text-center"> Loading ... </span>
        ) : (
          ""
        )}
        {submitResponse.data ? (
          <>
            <span className=" pr-1">Result :</span>
            <span
              className={` ${
                submitResponse.data.status === "success"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {submitResponse.data.message}
            </span>
          </>
        ) : (
          ""
        )}
      </div>
      <button
        disabled={submitResponse.isLoading}
        type="button"
        className=" bg-[#41be6b] rounded-md px-4 py-1 font-semibold h-8"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}
