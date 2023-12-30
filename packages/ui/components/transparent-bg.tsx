"use client";

import type { ReactElement, ReactNode } from "react";
import { useRecoilState } from "recoil";
import { isDifficultyOpenState, isStatusOpenState } from "store";

export function TransparentBackground({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [isDifficultyOpen, setIsDifficultyOpen] = useRecoilState(
    isDifficultyOpenState
  );
  const [isStatusOpen, setIsStatusOpen] = useRecoilState(isStatusOpenState);

  function handleTransparentBgClick(): void {
    if (isDifficultyOpen) setIsDifficultyOpen(false);
    if (isStatusOpen) setIsStatusOpen(false);
  }
  return (
    <div
      className="absolute inset-0 h-full w-full"
      onClick={handleTransparentBgClick}
    >
      {children}
    </div>
  );
}
