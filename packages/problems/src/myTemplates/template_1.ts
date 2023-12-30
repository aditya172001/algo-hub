export const template1 = `
  const testCases = [
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
    ];
  
    USER_SUBMITTED_CODE
  
    // check user code against all the test cases
    const ans = testCases.map((testCase) => {
        let userSolution;
        try {
            userSolution = solve(testCase.input.nums, testCase.input.target);
        } catch (error) {
            return false;
        }
  
  
        return JSON.stringify(userSolution) === JSON.stringify(testCase.output);
    });
  
    //if all test testcases pass allTrue is true else false
    const allTrue = ans.every((value)=>value===true);
  
    console.log(allTrue);
  `;

// function solve(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [-1, -1];
// }
