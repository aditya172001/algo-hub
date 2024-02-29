import { $Enums } from "@prisma/client";
import { atom } from "recoil";

export const userCodeState = atom({ key: "userCodeState", default: "" });
export const allQuestionsState = atom<
  {
    quesNumber: number;
    title: string;
    difficulty: $Enums.DifficultyType;
    status: $Enums.StatusType;
  }[]
>({
  key: "allQuestionsState",
  default: [],
});

export const isDifficultyOpenState = atom({
  key: "isDifficultyOpenState",
  default: false,
});
export const isStatusOpenState = atom({
  key: "isStatusOpenState",
  default: false,
});

export const isProgressBarVisibleState = atom<boolean>({
  key: "isProgressBarVisibleState",
  default: false,
});
