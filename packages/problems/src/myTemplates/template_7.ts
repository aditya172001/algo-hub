export const template7 = `
const testCases = [
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

// function solve(nums: number[]): number {
//     let result = 0;

//     // XOR all numbers in the array
//     for (const num of nums) {
//       result ^= num;
//     }

//     return result;
//   }
