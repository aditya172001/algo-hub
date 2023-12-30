"use client";

import { useEffect, type ReactElement } from "react";
import { Editor } from "@monaco-editor/react";
import { Code2, RotateCcw } from "lucide-react";
import { userCodeState } from "store";
import { useRecoilState } from "recoil";

export function CodeEditor({ data }: { data: string }): ReactElement {
  const starterCode = JSON.parse(data) as string;
  const [userCode, setUserCode] = useRecoilState(userCodeState);
  useEffect(() => {
    setUserCode(starterCode);
  }, [setUserCode, starterCode]);

  function handleEditorChange(value: string | undefined): void {
    setUserCode(value || "");
  }

  function handleCodeReset(): void {
    if (starterCode) setUserCode(starterCode);
  }

  return (
    <div className="rounded-md border border-neutral-600 row-span-2">
      <div className="bg-neutral-800 rounded-t-md py-1 px-3 flex items-center space-x-1">
        <Code2 className="h-5 text-green-500" />
        <div className="font-semibold">Code</div>
      </div>
      <div className=" bg-[#1e1e1e] text-neutral-400 border border-transparent border-b-neutral-700 flex items-center justify-between py-1 px-3">
        <div>TypeScript</div>
        <button
          type="button"
          className="hover:bg-neutral-700 p-1 rounded-md"
          onClick={handleCodeReset}
        >
          <RotateCcw className="h-4" />
        </button>
      </div>
      <div
        style={{ height: "calc(100vh - 174px)", background: "#1e1e1e" }}
        className="py-1"
      >
        <Editor
          language="typescript"
          path="mycode.ts"
          value={userCode}
          height="100%"
          loading="Loading..."
          theme="vs-dark"
          onChange={handleEditorChange}
          options={{
            wordWrap: "on",
            minimap: { enabled: false },
            renderLineHighlight: "none",
            scrollBeyondLastLine: false,
            renderFinalNewline: "on",
          }}
        />
      </div>
      <div className=" bg-[#1e1e1e] rounded-b-md p-1 flex justify-end" />
    </div>
  );
}
