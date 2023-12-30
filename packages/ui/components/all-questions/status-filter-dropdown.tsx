import { type $Enums } from "@prisma/client";
import { Check, CheckCircle, Minus, PauseCircle } from "lucide-react";
import type { Dispatch, ReactElement, SetStateAction } from "react";
import { useRecoilValue } from "recoil";
import { isStatusOpenState } from "store";

export function StatusFilterDropdown({
  status,
  setStatus,
}: {
  status: $Enums.StatusType | "no-filter";
  setStatus: Dispatch<SetStateAction<$Enums.StatusType | "no-filter">>;
}): ReactElement {
  const isStatusOpen = useRecoilValue(isStatusOpenState);
  return (
    <ol
      className={`z-10 absolute left-[120px] w-36 rounded-md shadow-md shadow-neutral-900 transition ease-in-out duration-300 bg-neutral-800 ${
        isStatusOpen
          ? "p-2 h-[100px] overflow-visible"
          : "p-0 h-0 overflow-hidden"
      }`}
    >
      <li
        className="hover:bg-neutral-600 py-1 rounded-md hover:cursor-pointer flex items-center justify-between"
        onClick={() => {
          setStatus((currStatus) =>
            currStatus === "ToDo" ? "no-filter" : "ToDo"
          );
        }}
      >
        <div className="flex items-center">
          <Minus className="h-3" />
          Todo
        </div>
        {status === "ToDo" ? (
          <Check className="h-4 text-blue-500 font-semibold" />
        ) : (
          ""
        )}
      </li>
      <li
        className="hover:bg-neutral-600 py-1 rounded-md hover:cursor-pointer flex items-center justify-between"
        onClick={() => {
          setStatus((currStatus) =>
            currStatus === "Solved" ? "no-filter" : "Solved"
          );
        }}
      >
        <div className="flex items-center">
          <CheckCircle className="h-3 text-green-500" />
          Solved
        </div>
        {status === "Solved" ? (
          <Check className="h-4 text-blue-500 font-semibold" />
        ) : (
          ""
        )}
      </li>
      <li
        className="hover:bg-neutral-600 py-1 rounded-md hover:cursor-pointer flex items-center justify-between"
        onClick={() => {
          setStatus((currStatus) =>
            currStatus === "Attempted" ? "no-filter" : "Attempted"
          );
        }}
      >
        <div className="flex items-center">
          <PauseCircle className="h-3 text-yellow-500" />
          Attempted
        </div>

        {status === "Attempted" ? (
          <Check className="h-4 text-blue-500 font-semibold" />
        ) : (
          ""
        )}
      </li>
    </ol>
  );
}
