import { type ReactElement } from "react";
import { serverTrpc } from "server/src/utils/server-client";
import { FilterSection, FilteredQuestionList, Profile } from "ui";

export default async function Problems(): Promise<ReactElement> {
  const questions = await serverTrpc.user.getAllQuestions();
  if (questions.status === "error") {
    return <div>error occoured while fetching quesion details</div>;
  }

  return (
    <div className="bg-neutral-900 h-screen">
      <nav className="flex justify-between text-white text-sm p-[6px]">
        <div className="flex items-center font-semibold  py-1 px-2">
          AlgoHub
        </div>
        <Profile />
      </nav>
      <main className="lg:mx-40 xl:mx-60">
        <FilterSection
          questions={JSON.stringify(questions.filteredQuestions)}
        />
        <div className="grid grid-cols-6 py-1 px-2 text-neutral-300 font-semibold border border-transparent border-b-neutral-700 border-b-2 items-center">
          <div className="col-span-1">Status</div>
          <div className="col-span-4">Title</div>
          <div className="col-span-1 text-right">Difficulty</div>
        </div>
        <FilteredQuestionList />
      </main>
    </div>
  );
}
