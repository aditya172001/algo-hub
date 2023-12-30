"use client";

import Link from "next/link";
import type { ReactElement } from "react";
import { useRecoilValue } from "recoil";
import { allQuestionsState } from "store";
import { AlertCircle, CheckCircle } from "lucide-react";
import { getDifficultyColour } from "../get-difficulty-colour";

export function FilteredQuestionList(): ReactElement {
  const allQuestions = useRecoilValue(allQuestionsState);

  return (
    <ol>
      {allQuestions.map((question, index: number) => {
        return (
          <li
            key={question.quesNumber}
            className={`grid grid-cols-6 py-2 px-3 items-center ${
              index % 2 === 1 ? " bg-neutral-800" : ""
            }`}
          >
            <div className="col-span-1">
              {question.status === "Solved" ? (
                <CheckCircle className="text-green-500 h-4" />
              ) : (
                ""
              )}
              {question.status === "Attempted" ? (
                <AlertCircle className="text-yellow-500 h-4" />
              ) : (
                ""
              )}
            </div>
            <Link
              href={`/problems/${question.quesNumber}`}
              className="col-span-4 hover:text-blue-600 focus:outline-none"
            >
              {question.quesNumber}. {question.title}
            </Link>
            <div
              className={` col-span-1 text-right
      ${getDifficultyColour(question.difficulty)}`}
            >
              {question.difficulty}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
