export const ques3 = {
  id: "3",
  question_number: 3,
  title: "Find First and Last Position of Element in Sorted Array",
  difficulty: "Hard" as "Easy" | "Medium" | "Hard",
  description:
    "Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.\nIf target is not found in the array, return [-1, -1].\nYou must write an algorithm with O(log n) runtime complexity.",
  example: {
    input: "nums: [5, 7, 7, 8, 8, 10], target: 8",
    output: "[3, 4]",
    explanation: "",
  },
  constraints: [
    "0 <= nums.length <= 10^5",
    "-10^9 <= nums[i] <= 10^9",
    "nums is a non-decreasing array.",
    "-10^9 <= target <= 10^9",
  ],
  follow_up: "",
  hints: [],
  starterCode: `function solve(nums: number[], target: number): number[] {
    
};`,
  testCases: [
    {
      input: {
        nums: [5, 7, 7, 8, 8, 10],
        target: 8,
      },
      output: [3, 4],
    },
    {
      input: {
        nums: [5, 7, 7, 8, 8, 10],
        target: 6,
      },
      output: [-1, -1],
    },
    {
      input: {
        nums: [],
        target: 0,
      },
      output: [-1, -1],
    },
  ],
};
