import { ChevronDown } from "lucide-react";
import { type ReactElement } from "react";

export function FilterButton({
  text,
  isOpen,
  onClickHandler,
}: {
  text: string;
  isOpen: boolean;
  onClickHandler: () => void;
}): ReactElement {
  return (
    <div
      className="bg-neutral-800 hover:bg-neutral-700 py-1 pl-3 pr-2 rounded-md flex items-center hover:cursor-pointer"
      onClick={onClickHandler}
    >
      <div>{text}</div>
      <ChevronDown
        className={`h-5 transition ease-in-out duration-300 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      />
    </div>
  );
}
