import { type ReactElement } from "react";
import { serverTrpc } from "server/src/utils/server-client";
import { notFound } from "next/navigation";
import { ProblemDescription } from "./problem-description";
import { CodeEditor } from "./code-editor";
import { SubmitSection } from "./submit-section";

export async function Problem({
  quesNumber,
}: {
  quesNumber: number;
}): Promise<ReactElement> {
  const questionDetails = await serverTrpc.user.getQuestion({ quesNumber });
  if (!questionDetails) {
    notFound();
  }

  const {
    title,
    difficulty,
    description,
    example,
    constraints,
    followUp,
    hints,
    starterCode,
  } = questionDetails;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 px-2 text-sm pb-2 lg:pb-0">
      <ProblemDescription
        quesNumber={quesNumber}
        title={title}
        difficulty={difficulty}
        description={description}
        example={example}
        constraints={constraints}
        followUp={followUp}
        hints={hints}
      />
      <div>
        <CodeEditor data={JSON.stringify(starterCode)} />
        <SubmitSection />
      </div>
    </div>
  );
}
