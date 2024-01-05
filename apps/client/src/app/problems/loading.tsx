import { CircleUserRound } from "lucide-react";
import { type ReactElement } from "react";

export default function ProblemsLoading(): ReactElement {
  return (
    <div className="bg-neutral-900 h-screen">
      <nav className="flex justify-between text-white text-sm p-[6px]">
        <div className="flex items-center font-semibold  py-1 px-2">
          AlgoHub
        </div>
        <CircleUserRound className="h-5 w-5 text-neutral-500 my-1 mx-2" />
      </nav>
      <main className="lg:mx-40 xl:mx-60">
        <div className="flex items-center space-x-2 py-2 animate-pulse">
          <div className="bg-neutral-800 py-1 px-3 rounded-md w-20 h-8" />
          <div className="bg-neutral-800 py-1 px-3 rounded-md w-20 h-8" />
        </div>
        <div className="grid grid-cols-6 py-1 px-2 text-neutral-300 font-semibold border border-transparent border-b-neutral-700 border-b-2 items-center">
          <div className="col-span-1">Status</div>
          <div className="col-span-4">Title</div>
          <div className="col-span-1 text-right">Difficulty</div>
        </div>
        <div className="animate-pulse">
          <div className=" w-full h-10 " />
          <div className=" w-full h-10 bg-neutral-800" />
          <div className=" w-full h-10 " />
          <div className=" w-full h-10 bg-neutral-800" />
        </div>
      </main>
    </div>
  );
}
