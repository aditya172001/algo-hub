export const ques9 = {
  id: "9",
  question_number: 9,
  title: "Search in Rotated Sorted Array",
  difficulty: "Hard" as "Easy" | "Medium" | "Hard",
  description:
    "There is an integer array nums sorted in ascending order (with distinct values).\nPrior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].\nGiven the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.\nYou must write an algorithm with O(log n) runtime complexity.",
  example: {
    input: "nums = [4,5,6,7,0,1,2], target = 0",
    output: "4",
    explanation: "",
  },
  constraints: [
    "1 <= nums.length <= 5000",
    "-10^4 <= nums[i] <= 10^4",
    "All values of nums are unique.",
    "nums is an ascending array that is possibly rotated.",
    "-10^4 <= target <= 10^4",
  ],
  follow_up: "",
  hints: [],
  starterCode: `function solve(nums: number[], target: number): number {
    
};`,
  testCases: [
    {
      input: {
        nums: [4, 5, 6, 7, 0, 1, 2],
        target: 0,
      },
      output: 4,
    },
    {
      input: {
        nums: [4, 5, 6, 7, 0, 1, 2],
        target: 3,
      },
      output: -1,
    },
    {
      input: {
        nums: [1],
        target: 0,
      },
      output: -1,
    },
  ],
};
