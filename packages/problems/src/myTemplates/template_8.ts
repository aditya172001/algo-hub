export const template8 = `
const testCases = [
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
