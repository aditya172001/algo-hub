export const ques7 = {
  id: "7",
  question_number: 7,
  title: "Single Number",
  difficulty: "Medium" as "Easy" | "Medium" | "Hard",
  description:
    "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.\nYou must implement a solution with a linear runtime complexity and use only constant extra space.",
  example: {
    input: "nums = [2,2,1]",
    output: "1",
    explanation: "",
  },
  constraints: [
    "1 <= nums.length <= 3 * 10^4",
    "-3 * 10^4 <= nums[i] <= 3 * 10^4",
    "Each element in the array appears twice except for one element which appears only once.",
  ],
  follow_up: "",
  hints: [],
  starterCode: `function solve(nums: number[]): number {
    
};`,
  testCases: [
    {
      input: {
        nums: [2, 2, 1],
      },
      output: 1,
    },
    {
      input: {
        nums: [4, 1, 2, 1, 2],
      },
      output: 4,
    },
    {
      input: {
        nums: [1],
      },
      output: 1,
    },
  ],
};
