export const ques8 = {
  id: "8",
  question_number: 8,
  title: "Majority Element",
  difficulty: "Easy" as "Easy" | "Medium" | "Hard",
  description:
    "Given an array nums of size n, return the majority element.\nThe majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.",
  example: {
    input: "nums = [3,2,3]",
    output: "3",
    explanation: "",
  },
  constraints: [
    "n == nums.length",
    "1 <= n <= 5 * 10^4",
    "-10^9 <= nums[i] <= 10^9",
  ],
  follow_up: "Could you solve the problem in linear time and in O(1) space?",
  hints: [],
  starterCode: `function solve(nums: number[]): number {
    
};`,
  testCases: [
    {
      input: {
        nums: [3, 2, 3],
      },
      output: 3,
    },
    {
      input: {
        nums: [2, 2, 1, 1, 1, 2, 2],
      },
      output: 2,
    },
    {
      input: {
        nums: [1, 1, 1],
      },
      output: 1,
    },
  ],
};
