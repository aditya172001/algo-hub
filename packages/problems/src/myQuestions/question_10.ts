export const ques10 = {
  id: "10",
  question_number: 10,
  title: "Jump Game",
  difficulty: "Medium" as "Easy" | "Medium" | "Hard",
  description:
    "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.\nReturn true if you can reach the last index, or false otherwise.",
  example: {
    input: "nums = [2,3,1,1,4]",
    output: "true",
    explanation:
      "Jump 1 step from index 0 to 1, then 3 steps to the last index.",
  },
  constraints: ["1 <= nums.length <= 10^4", "0 <= nums[i] <= 10^5"],
  follow_up: "",
  hints: [],
  starterCode: `function solve(nums: number[]): boolean {
    
};`,
  testCases: [
    {
      input: {
        nums: [2, 3, 1, 1, 4],
      },
      output: true,
    },
    {
      input: {
        nums: [3, 2, 1, 0, 4],
      },
      output: false,
    },
    {
      input: {
        nums: [0],
      },
      output: true,
    },
    {
      input: {
        nums: [2, 0],
      },
      output: true,
    },
    {
      input: {
        nums: [0, 0, 0, 0, 0],
      },
      output: false,
    },
  ],
};
