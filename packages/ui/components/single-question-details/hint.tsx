"use client";

import { ChevronDown, Lightbulb } from "lucide-react";
import { useState, type ReactElement } from "react";

export function Hint({ data }: { data: string }): ReactElement {
  const { hint, hintNumber } = JSON.parse(data) as {
    hint: string;
    hintNumber: number;
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-transparent border-t-neutral-700">
      <div
        className="flex items-center justify-between"
        onClick={() => {
          setIsOpen((open) => !open);
        }}
      >
        <div className="py-2 flex items-center space-x-1">
          <button type="button">
            <Lightbulb className="h-5" />
          </button>
          <div>Hint {hintNumber}</div>
        </div>
        <ChevronDown
          className={`h-5 text-neutral-700 transition-all duration-300 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div
        className={`pl-7 transition-all ease-in-out duration-300 overflow-auto ${
          // eslint-disable-next-line no-nested-ternary -- need it
          isOpen
            ? hint.split("").reduce((acc) => acc + 1, 0) < 200
              ? "h-[47px] "
              : "h-[67px] "
            : "h-0"
        }`}
      >
        {hint}
      </div>
    </div>
  );
}
