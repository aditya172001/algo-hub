export const ques4 = {
  id: "4",
  question_number: 4,
  title: "Search Insert Position",
  difficulty: "Easy" as "Easy" | "Medium" | "Hard",
  description:
    "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.\nYou must write an algorithm with O(log n) runtime complexity.",
  example: {
    input: "nums: [1, 3, 5, 6], target: 5",
    output: "2",
    explanation: "",
  },
  constraints: [
    "1 <= nums.length <= 10^4",
    "-10^4 <= nums[i] <= 10^4",
    "nums contains distinct values sorted in ascending order.",
    "-10^4 <= target <= 10^4",
  ],
  follow_up: "",
  hints: [],
  starterCode: `function solve(nums: number[], target: number): number {
    
};`,
  testCases: [
    {
      input: {
        nums: [1, 3, 5, 6],
        target: 5,
      },
      output: 2,
    },
    {
      input: {
        nums: [1, 3, 5, 6],
        target: 2,
      },
      output: 1,
    },
    {
      input: {
        nums: [1, 3, 5, 6],
        target: 7,
      },
      output: 4,
    },
  ],
};
