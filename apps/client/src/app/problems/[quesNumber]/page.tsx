import { ChevronLeft, ChevronRight } from "lucide-react";
import { type ReactElement } from "react";
import { Problem, Profile } from "ui";
import Link from "next/link";

export default function SingleProblem({
  params,
}: {
  params: { quesNumber: string };
}): ReactElement {
  const quesNumber = parseInt(params.quesNumber);

  return (
    <div className=" bg-black min-h-screen">
      <nav className="flex justify-between text-white text-sm p-[6px]">
        <div className="flex items-center space-x-2">
          <Link
            href="/problems"
            className="font-semibold hover:bg-neutral-800 py-1 px-2 rounded-md hover:cursor-pointer"
          >
            Problem List
          </Link>
          <Link href={`/problems/${(quesNumber - 1 + 10) % 10 || 10}`}>
            <ChevronLeft className="h-5 hover:text-neutral-300 hover:cursor-pointer" />
          </Link>
          <Link href={`/problems/${(quesNumber % 10) + 1}`}>
            <ChevronRight className="h-5 hover:text-neutral-300 hover:cursor-pointer" />
          </Link>
        </div>
        <Profile />
      </nav>
      <main className="">
        <Problem quesNumber={quesNumber} />
      </main>
    </div>
  );
}
