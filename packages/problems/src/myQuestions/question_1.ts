export const ques1 = {
  id: "1",
  question_number: 1,
  title: "Two Sum",
  difficulty: "Easy" as "Easy" | "Medium" | "Hard",
  description:
    "Given an array of integers, find two numbers such that they add up to a specific target.\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\nYou can return the answer in any order.",
  example: {
    input: "nums: [2, 7, 11, 15], target: 9",
    output: "[0, 1]",
    explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
  },
  constraints: [
    "2 <= nums.length <= 10^4",
    "-10^9 <= nums[i] <= 10^9",
    "-10^9 <= target <= 10^9",
    "Only one valid answer exists.",
  ],
  follow_up:
    "Can you come up with an algorithm that is less than O(n2) time complexity?",
  hints: [
    "A really brute force way would be to search for all possible pairs of numbers but that would be too slow. Again, it's best to try out brute force solutions for just for completeness. It is from these brute force solutions that you can come up with optimizations.",
    "So, if we fix one of the numbers, say x, we have to scan the entire array to find the next number y which is value - x where value is the input parameter. Can we change our array somehow so that this search becomes faster?",
    "The second train of thought is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search?",
  ],
  starterCode: `function solve(nums: number[], target: number): number[] {
  
};`,
  testCases: [
    {
      input: {
        nums: [1, 2, 3, 4, 5],
        target: 9,
      },
      output: [3, 4],
    },
    {
      input: {
        nums: [2, 7, 11, 15],
        target: 9,
      },
      output: [0, 1],
    },
    {
      input: {
        nums: [3, 2, 4],
        target: 6,
      },
      output: [1, 2],
    },
    {
      input: {
        nums: [3, 3],
        target: 6,
      },
      output: [0, 1],
    },
  ],
};
