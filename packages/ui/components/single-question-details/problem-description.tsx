import { type ReactElement } from "react";
import { AlertCircle, CheckCircle, Dot, Text } from "lucide-react";
import { getUserSession } from "utils";
import { type $Enums } from "@prisma/client";
import prisma from "database/prisma/connect";
import { getDifficultyColour } from "../get-difficulty-colour";
import { Hint } from "./hint";

export async function ProblemDescription({
  quesNumber,
  title,
  difficulty,
  description,
  example,
  constraints,
  followUp,
  hints,
}: {
  quesNumber: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  example: {
    input: string;
    output: string;
    explanation?: string | undefined;
  };
  constraints: string[];
  followUp: string | undefined;
  hints: string[] | undefined;
}): Promise<ReactElement> {
  let status: $Enums.StatusType = "ToDo";
  try {
    const session = await getUserSession();
    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email || "" },
    });

    const question = await prisma.question.findUnique({
      where: { quesNumber },
      include: { users: { where: { userId: user?.id } } },
    });
    // console.log(question);

    status = question?.users[0]?.status || "ToDo";
  } catch (error) {
    status = "ToDo";
  }

  return (
    <div className="bg-[#1e1e1e] rounded-md border border-neutral-600">
      <div className="bg-neutral-800 rounded-t-md flex space-x-1 py-1 px-3">
        <Text className="h-5 text-blue-500" />
        <div className="text-sm font-semibold">Description</div>
      </div>
      <div
        className=" overflow-scroll whitespace-break-spaces py-2 px-3"
        style={{ height: "calc(100vh - 98px)" }}
      >
        <div className=" text-2xl font-semibold mb-4">
          {quesNumber}. {title}
        </div>
        <div className="flex items-center justify-between">
          <span
            className={` bg-neutral-700 py-1 px-2 rounded-2xl ${getDifficultyColour(
              difficulty
            )}`}
          >
            {difficulty}
          </span>
          <div className="flex items-center justify-end space-x-2 text-neutral-400">
            <div>{status !== "ToDo" ? status : null}</div>
            {status === "Solved" ? (
              <CheckCircle className="text-green-500 h-4" />
            ) : null}
            {status === "Attempted" ? (
              <AlertCircle className="text-yellow-500 h-4" />
            ) : null}
          </div>
        </div>
        <div className="py-4">
          {description.split("\n").map((line, index) => {
            return (
              <div key={index} className="py-2">
                {line}
              </div>
            );
          })}
        </div>
        <div className="font-semibold py-4">
          Example:
          <div className="border border-transparent border-l-neutral-600 border-l-2 px-2 my-2">
            <div>
              Input:{" "}
              <span className=" font-normal text-neutral-400">
                {example.input}
              </span>
            </div>
            <div>
              Output:{" "}
              <span className=" font-normal text-neutral-400">
                {example.output}
              </span>
            </div>
            {example.explanation ? (
              <div>
                Explanation:{" "}
                <span className=" font-normal text-neutral-400">
                  {example.explanation}
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className=" font-semibold py-4">
          Constraints:
          {constraints.map((constraint, index) => (
            <div key={index} className="font-normal text-neutral-400 flex py-2">
              <Dot />
              <span className="bg-neutral-800 text-center px-2 rounded-md border border-neutral-700">
                {constraint}
              </span>
            </div>
          ))}
        </div>
        {followUp ? (
          <div className="font-semibold py-4">
            FollowUp: <span className="font-normal"> {followUp}</span>
          </div>
        ) : (
          ""
        )}
        <div>
          {hints
            ? hints.map((hint, index) => {
                return (
                  <Hint
                    key={index}
                    data={JSON.stringify({ hint, hintNumber: index + 1 })}
                  />
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}
