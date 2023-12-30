"use client";

import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import { useRef, type ReactElement, useEffect, useState } from "react";

export function ProfileWrapper({
  image,
  children,
}: {
  image: string | null;
  children: ReactElement;
}): ReactElement {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handler(e: MouseEvent): void {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [setIsProfileOpen]);

  return (
    <div className="relative" ref={profileRef}>
      {/* Below is profile head */}
      <div
        className=" px-2 py-1 hover:bg-neutral-800 rounded-md text-red-500"
        onClick={() => {
          setIsProfileOpen((open) => !open);
        }}
      >
        {image ? (
          <Image
            priority
            src={image}
            width={100}
            height={100}
            alt="user profile image"
            className="h-5 w-5 rounded-full"
          />
        ) : (
          <CircleUserRound className="h-5" />
        )}
      </div>
      {/* Below is profile dropdown */}
      <div
        className={`absolute right-0 z-10 shadow-lg shadow-neutral-900 bg-neutral-800 rounded-md w-max  mt-2 ${
          isProfileOpen ? "p-6 h-max" : "p-0 h-0"
        }`}
      >
        {isProfileOpen ? children : ""}
      </div>
    </div>
  );
}
