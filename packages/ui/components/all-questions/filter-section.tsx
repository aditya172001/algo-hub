"use client";

import { PlusCircle } from "lucide-react";
import { useState, type ReactElement, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  allQuestionsState,
  isDifficultyOpenState,
  isStatusOpenState,
} from "store";
import { type $Enums } from "@prisma/client";
import { getDifficultyColour } from "../get-difficulty-colour";
import { FilterButton } from "./filter-button";
import { DifficultyFilterDropdown } from "./difficulty-filter-dropdown";
import { StatusFilterDropdown } from "./status-filter-dropdown";

export function FilterSection({
  questions,
}: {
  questions: string;
}): ReactElement {
  //set difficulty filter for ques
  const [difficulty, setDifficulty] = useState<
    $Enums.DifficultyType | "no-filter"
  >("no-filter");
  const [isDifficultyOpen, setIsDifficultyOpen] = useRecoilState(
    isDifficultyOpenState
  );

  //set question-solved-status filter for ques
  const [status, setStatus] = useState<$Enums.StatusType | "no-filter">(
    "no-filter"
  );
  const [isStatusOpen, setIsStatusOpen] = useRecoilState(isStatusOpenState);

  //set allQuestionsState according to filter applied
  const parsedQuestions = JSON.parse(questions) as {
    quesNumber: number;
    title: string;
    difficulty: $Enums.DifficultyType;
    status: $Enums.StatusType;
  }[];
  const setAllQuestions = useSetRecoilState(allQuestionsState);
  useEffect(() => {
    const filteredQuestions = parsedQuestions.filter((question) => {
      if (difficulty === "no-filter" && status === "no-filter") return true;
      else if (difficulty === "no-filter") {
        return status === question.status;
      } else if (status === "no-filter") {
        return difficulty === question.difficulty;
      }
      return difficulty === question.difficulty && status === question.status;
    });
    setAllQuestions(filteredQuestions);
  }, [parsedQuestions, setAllQuestions, difficulty, status]);

  return (
    <div className="relative pl-3 lg:pl-0">
      <div className="flex items-center space-x-2 py-2">
        <FilterButton
          text="Difficulty"
          isOpen={isDifficultyOpen}
          onClickHandler={() => {
            setIsDifficultyOpen((open) => !open);
          }}
        />
        <FilterButton
          text="Status"
          isOpen={isStatusOpen}
          onClickHandler={() => {
            setIsStatusOpen((open) => !open);
          }}
        />
      </div>
      <div className="text-sm">
        <DifficultyFilterDropdown
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />
        <StatusFilterDropdown status={status} setStatus={setStatus} />
      </div>
      <div className="flex space-x-2">
        {difficulty !== "no-filter" ? (
          <span
            className={`bg-neutral-800 rounded-md flex items-center w-fit text-xs py-1 pl-2 ${getDifficultyColour(
              difficulty
            )}`}
          >
            {difficulty}
            <PlusCircle
              className="h-3 rotate-45 fill-neutral-400 text-neutral-800"
              onClick={() => {
                setDifficulty("no-filter");
              }}
            />
          </span>
        ) : (
          ""
        )}
        {status !== "no-filter" ? (
          <span className="bg-neutral-800 rounded-md flex items-center w-fit text-xs py-1 pl-2">
            {status}
            <PlusCircle
              className="h-3 rotate-45 fill-neutral-400 text-neutral-800"
              onClick={() => {
                setStatus("no-filter");
              }}
            />
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
