import type { SetStateAction, ReactElement, Dispatch } from "react";
import { Check } from "lucide-react";
import { useRecoilValue } from "recoil";
import { isDifficultyOpenState } from "store";
import { type $Enums } from "@prisma/client";

export function DifficultyFilterDropdown({
  difficulty,
  setDifficulty,
}: {
  difficulty: $Enums.DifficultyType | "no-filter";
  setDifficulty: Dispatch<SetStateAction<$Enums.DifficultyType | "no-filter">>;
}): ReactElement {
  const isDifficultyOpen = useRecoilValue(isDifficultyOpenState);
  return (
    <ol
      className={`z-10 absolute w-28 rounded-md shadow-md shadow-neutral-900 transition ease-in-out duration-300 bg-neutral-800 ${
        isDifficultyOpen
          ? "p-2 h-[100px] overflow-visible"
          : "p-0 h-0 overflow-hidden"
      }`}
    >
      <li
        className="text-emerald-400 hover:bg-neutral-600 py-1 px-2 rounded-md hover:cursor-pointer flex items-center justify-between"
        onClick={() => {
          setDifficulty((diff) => (diff === "Easy" ? "no-filter" : "Easy"));
        }}
      >
        Easy
        {difficulty === "Easy" ? (
          <Check className="h-4 text-blue-500 font-semibold" />
        ) : (
          ""
        )}
      </li>
      <li
        className="text-yellow-500 hover:bg-neutral-600 py-1 px-2 rounded-md hover:cursor-pointer flex items-center justify-between"
        onClick={() => {
          setDifficulty((diff) => (diff === "Medium" ? "no-filter" : "Medium"));
        }}
      >
        Medium
        {difficulty === "Medium" ? (
          <Check className="h-4 text-blue-500 font-semibold" />
        ) : (
          ""
        )}
      </li>
      <li
        className="text-red-500 hover:bg-neutral-600 py-1 px-2 rounded-md hover:cursor-pointer flex items-center justify-between"
        onClick={() => {
          setDifficulty((diff) => (diff === "Hard" ? "no-filter" : "Hard"));
        }}
      >
        Hard
        {difficulty === "Hard" ? (
          <Check className="h-4 text-blue-500 font-semibold" />
        ) : (
          ""
        )}
      </li>
    </ol>
  );
}
