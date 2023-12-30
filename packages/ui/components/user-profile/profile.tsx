import Image from "next/image";
import type { ReactElement } from "react";
import { serverTrpc } from "server/src/utils/server-client";
import { CircleUserRound } from "lucide-react";
import { ProgressCircle } from "./progress-circle";
import { SignOutButton } from "./signout-button";
import { ProfileWrapper } from "./profile-wrapper";

export async function Profile(): Promise<ReactElement> {
  const response = await serverTrpc.user.getProfile();
  if (response.status === "error") {
    return <CircleUserRound className="h-5 w-5 mx-2 my-1" />;
  }

  const { name, email, image, totalQuestions, userSolvedQuestions } = response;
  const {
    easy: easySolved,
    medium: mediumSolved,
    hard: hardSolved,
  } = userSolvedQuestions;
  const {
    easy: easyTotal,
    medium: mediumTotal,
    hard: hardTotal,
  } = totalQuestions;

  return (
    <ProfileWrapper image={image}>
      <>
        <div className="flex items-center space-x-2">
          {image ? (
            <Image
              priority
              src={image}
              width={100}
              height={100}
              alt="user profile image"
              className="h-16 w-16 rounded-full"
            />
          ) : (
            <CircleUserRound className="h-16 w-16 text-neutral-500" />
          )}
          <div>
            <div className="font-semibold">{name}</div>
            <div className="text-neutral-300">{email}</div>
          </div>
        </div>
        <hr
          className="font-bold my-3"
          style={{ borderColor: "rgb(82 82 82)" }}
        />
        <div className="flex items-center justify-between space-x-2">
          <ProgressCircle
            easySolved={easySolved}
            mediumSolved={mediumSolved}
            hardSolved={hardSolved}
            easyTotal={easyTotal}
            mediumTotal={mediumTotal}
            hardTotal={hardTotal}
          />
          <div className="flex flex-col justify-between h-20">
            <div className="flex items-center justify-between space-x-4">
              <div className="text-emerald-400">Easy</div>
              <div>
                {easySolved}
                <span className="text-neutral-500">/{easyTotal}</span>
              </div>
            </div>
            <div className="flex items-center justify-between space-x-4">
              <div className="text-yellow-500">Medium</div>
              <div>
                {mediumSolved}
                <span className="text-neutral-500">/{mediumTotal}</span>
              </div>
            </div>
            <div className="flex items-center justify-between space-x-4">
              <div className="text-red-500">Hard</div>
              <div>
                {hardSolved}
                <span className="text-neutral-500">/{hardTotal}</span>
              </div>
            </div>
          </div>
        </div>
        <hr
          className="font-bold my-3"
          style={{ borderColor: "rgb(82 82 82)" }}
        />
        <SignOutButton />
      </>
    </ProfileWrapper>
  );
}
