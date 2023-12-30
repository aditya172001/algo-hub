export const template6 = `
const testCases = [
    {
      input: {
        prices: [7, 1, 5, 3, 6, 4],
      },
      output: 5,
    },
    {
      input: {
        prices: [7, 6, 4, 3, 1],
      },
      output: 0,
    },
    {
      input: {
        prices: [1, 2, 3, 4, 5],
      },
      output: 4,
    },
    {
      input: {
        prices: [],
      },
      output: 0,
    },
  ];

USER_SUBMITTED_CODE

// check user code against all the test cases
const ans = testCases.map((testCase) => {
  let userSolution;
  try {
    userSolution = solve(testCase.input.prices);
  } catch (error) {
    return false;
  }

  return JSON.stringify(userSolution) === JSON.stringify(testCase.output);
});

//if all test testcases pass allTrue is true else false
const allTrue = ans.every((value) => value === true);

console.log(allTrue);
`;

// function solve(prices: number[]): number {
//     let maxProfit = 0;

//     for (let i = 0; i < prices.length - 1; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             const profit = prices[j] - prices[i];
//             if (profit > maxProfit) {
//                 maxProfit = profit;
//             }
//         }
//     }

//     return maxProfit;
// }
