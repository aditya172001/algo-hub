export const ques2 = {
  id: "2",
  question_number: 2,
  title: "3Sum",
  difficulty: "Medium" as "Easy" | "Medium" | "Hard",
  description:
    "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.\nNotice that the solution set must not contain duplicate triplets.",
  example: {
    input: "nums: [-1, 0, 1, 2, -1, -4]",
    output: "[[-1, -1, 2],[-1, 0, 1]]",
    explanation:
      "nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.\nnums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.\nnums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.\nThe distinct triplets are [-1,0,1] and [-1,-1,2].\nNotice that the order of the output and the order of the triplets does not matter.",
  },
  constraints: ["3 <= nums.length <= 3000", "-10^5 <= nums[i] <= 10^5"],
  follow_up: "",
  hints: [
    "So, we essentially need to find three numbers x, y, and z such that they add up to the given value. If we fix one of the numbers say x, we are left with the two-sum problem at hand!",
    "For the two-sum problem, if we fix one of the numbers, say x, we have to scan the entire array to find the next number y, which is value - x where value is the input parameter. Can we change our array somehow so that this search becomes faster?",
    "The second train of thought for two-sum is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search?",
  ],
  starterCode: `function solve(nums: number[]): number[][] {
  
};`,
  testCases: [
    {
      input: {
        nums: [-1, 0, 1, 2, -1, -4],
      },
      output: [
        [-1, -1, 2],
        [-1, 0, 1],
      ],
    },
    {
      input: {
        nums: [0, 1, 1],
      },
      output: [],
    },
    {
      input: {
        nums: [0, 0, 0],
      },
      output: [[0, 0, 0]],
    },
  ],
};
