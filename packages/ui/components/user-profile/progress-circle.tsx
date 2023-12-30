import type { ReactElement } from "react";

export function ProgressCircle({
  easySolved,
  mediumSolved,
  hardSolved,
  easyTotal,
  mediumTotal,
  hardTotal,
}: {
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  easyTotal: number;
  mediumTotal: number;
  hardTotal: number;
}): ReactElement {
  const total = easyTotal + mediumTotal + hardTotal;
  const solved = easySolved + mediumSolved + hardSolved;
  const easyPercent = (easySolved / total) * 100;
  const mediumPercent = (mediumSolved / total) * 100;
  const hardPercent = (hardSolved / total) * 100;

  const radius = 45;
  const circumference = parseFloat((2 * Math.PI * radius).toFixed(2));
  const offsetEasy = parseFloat(
    ((circumference * (100 - easyPercent)) / 100).toFixed(2)
  );
  const offsetMedium = parseFloat(
    ((circumference * (100 - (easyPercent + mediumPercent))) / 100).toFixed(2)
  );
  const offsetHard = parseFloat(
    (
      (circumference * (100 - (easyPercent + mediumPercent + hardPercent))) /
      100
    ).toFixed(2)
  );

  return (
    <div>
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="-rotate-90"
      >
        <circle
          r={radius}
          cx="50"
          cy="50"
          fill="transparent"
          stroke="#525252"
          strokeWidth="3px"
        />
        <circle
          r={radius}
          cx="50"
          cy="50"
          fill="transparent"
          stroke="#ef4444"
          strokeWidth="3px"
          strokeDasharray={`${circumference}px`}
          strokeDashoffset={`${offsetHard}px`}
          strokeLinecap="round"
        />
        <circle
          r={radius}
          cx="50"
          cy="50"
          fill="transparent"
          stroke="#eab208"
          strokeWidth="3px"
          strokeDasharray={`${circumference}px`}
          strokeDashoffset={`${offsetMedium}px`}
          strokeLinecap="round"
        />
        <circle
          r="45"
          cx="50"
          cy="50"
          fill="transparent"
          stroke="#34d399"
          strokeWidth="3px"
          strokeDasharray={`${circumference}px`}
          strokeDashoffset={`${offsetEasy}px`}
          strokeLinecap="round"
        />
        <text
          x="50%"
          y="-50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#fff"
          fontSize="16px"
          fontWeight="bold"
          transform="rotate(90)"
        >
          {`${solved}/${total}`}
        </text>
      </svg>
    </div>
  );
}
