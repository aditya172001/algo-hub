"use client";

import { type ReactElement, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { isProgressBarVisibleState } from "store";

export function ProgressBar(): ReactElement {
  const isProgressBarVisible = useRecoilValue(isProgressBarVisibleState);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        return prevProgress < 90
          ? prevProgress + Math.floor(Math.random() * 10) + 1
          : prevProgress;
      });
    }, 600);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      {isProgressBarVisible ? (
        <div
          className={`h-1 bg-white ease-in-out transition-all `}
          style={{
            width: `${progress}%`,
            transition: "width 0.5s ease-in-out",
          }}
        />
      ) : null}
    </>
  );
}
