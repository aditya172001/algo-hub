export const template5 = `
const testCases = [
    {
      input: {
        digits: [1, 2, 3],
      },
      output: [1, 2, 4],
    },
    {
      input: {
        digits: [4, 3, 2, 1],
      },
      output: [4, 3, 2, 2],
    },
    {
      input: {
        digits: [9],
      },
      output: [1, 0],
    },
  ];

USER_SUBMITTED_CODE

// check user code against all the test cases
const ans = testCases.map((testCase) => {
  let userSolution;
  try {
    userSolution = solve(testCase.input.digits);
  } catch (error) {
    return false;
  }

  return JSON.stringify(userSolution) === JSON.stringify(testCase.output);
});

//if all test testcases pass allTrue is true else false
const allTrue = ans.every((value) => value === true);

console.log(allTrue);
`;

// function solve(digits: number[]): number[] {
//     const n = digits.length;

//     // Start from the rightmost digit
//     for (let i = n - 1; i >= 0; i--) {
//       // Increment the current digit
//       digits[i]++;

//       // Check if there is a carry
//       if (digits[i] <= 9) {
//         return digits;
//       } else {
//         // Carry, set the current digit to 0 and continue to the next digit
//         digits[i] = 0;
//       }
//     }

//     // If there is still a carry after the loop, add a new digit at the beginning
//     digits.unshift(1);

//     return digits;
//   }
