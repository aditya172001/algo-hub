import { type $Enums } from "database";

export function getDifficultyColour(difficulty: $Enums.DifficultyType): string {
  if (difficulty === "Easy") return "text-emerald-400";
  else if (difficulty === "Medium") return "text-yellow-500";
  return "text-red-500";
}
