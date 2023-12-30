export const template10 = `
const testCases = [
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
  ];

USER_SUBMITTED_CODE

// check user code against all the test cases
const ans = testCases.map((testCase) => {
  let userSolution;
  try {
    userSolution = solve(testCase.input.nums);
  } catch (error) {
    return false;
  }

  return JSON.stringify(userSolution) === JSON.stringify(testCase.output);
});

//if all test testcases pass allTrue is true else false
const allTrue = ans.every((value) => value === true);

console.log(allTrue);
`;

// function solve(nums: number[]): boolean {
//   let maxReach = 0;

//   for (let i = 0; i < nums.length; i++) {
//       if (i > maxReach) {
//           // If the current index is not reachable from the previous indices, return false
//           return false;
//       }

//       // Update the maximum reachable index
//       maxReach = Math.max(maxReach, i + nums[i]);

//       // If the last index is reachable, return true
//       if (maxReach >= nums.length - 1) {
//           return true;
//       }
//   }

//   return false;
// }
