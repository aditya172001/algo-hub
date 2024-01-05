import {
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Code2,
  RotateCcw,
  Text,
} from "lucide-react";
import { type ReactElement } from "react";

export default function SingleProblemLoading(): ReactElement {
  return (
    <div className=" bg-black min-h-screen">
      <nav className="flex justify-between text-white text-sm p-[6px]">
        <div className="flex items-center space-x-2">
          <div className="font-semibold py-1 px-2">Problem List</div>
          <ChevronLeft className="h-5 " />
          <ChevronRight className="h-5" />
        </div>
        <CircleUserRound className="h-5 w-5 text-neutral-500 my-1 mx-2" />
      </nav>
      <main className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 px-2 text-sm pb-2 lg:pb-0">
          <div className="bg-[#1e1e1e] rounded-md border border-neutral-600">
            <div className="bg-neutral-800 rounded-t-md flex space-x-1 py-1 px-3">
              <Text className="h-5 text-blue-500" />
              <div className="text-sm font-semibold">Description</div>
            </div>
            <div
              className=" overflow-scroll whitespace-break-spaces py-2 px-3 animate-pulse"
              style={{ height: "calc(100vh - 76px)" }}
            >
              <div className="bg-neutral-700 w-32 h-8 my-1 rounded-md" />
              <div className="bg-neutral-700 w-14 h-6 my-4 rounded-lg" />
              <div className="bg-neutral-700 w-full h-5 my-3 rounded-md" />
              <div className="bg-neutral-700 w-full h-5 my-3 rounded-md" />
              <div className="bg-neutral-700 w-96 h-14 my-3 rounded-md" />
              <div className="bg-neutral-700 w-72 h-5 my-3 rounded-md" />
              <div className="bg-neutral-700 w-72 h-5 my-3 rounded-md" />
            </div>
          </div>
          <div className="">
            <div className="rounded-md border border-neutral-600 row-span-2">
              <div className="bg-neutral-800 rounded-t-md py-1 px-3 flex items-center space-x-1">
                <Code2 className="h-5 text-green-500" />
                <div className="font-semibold">Code</div>
              </div>
              <div className=" bg-[#1e1e1e] text-neutral-400 border border-transparent border-b-neutral-700 flex items-center justify-between py-1 px-3">
                <div className="py-[2px]">TypeScript</div>
                <RotateCcw className="h-4 mr-1" />
              </div>
              <div
                style={{ height: "calc(100vh - 166px)", background: "#1e1e1e" }}
                className="py-1 animate-pulse rounded-b-md"
              />
            </div>
            <div className=" mt-2 rounded-md border border-neutral-600 bg-[#1e1e1e] row-span-1 flex items-center justify-between h-12 px-2">
              <div className="" />

              <div className=" bg-[#307748] rounded-md h-8 w-20 animate-pulse" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
