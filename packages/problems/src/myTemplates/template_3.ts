export const template3 = `
    const testCases = [
        {
        input: {
            nums: [5, 7, 7, 8, 8, 10],
            target: 8,
        },
        output: [3, 4],
        },
        {
        input: {
            nums: [5, 7, 7, 8, 8, 10],
            target: 6,
        },
        output: [-1, -1],
        },
        {
        input: {
            nums: [],
            target: 0,
        },
        output: [-1, -1],
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
    const allTrue = ans.every((value) => value === true);
    
    console.log(allTrue);
`;

// function solve(nums: number[], target: number): number[] {
//   const result: number[] = [-1, -1];

//   // Find the first occurrence of the target
//   result[0] = binarySearch(nums, target, true);

//   // If the first occurrence is found, find the last occurrence
//   if (result[0] !== -1) {
//     result[1] = binarySearch(nums, target, false);
//   }

//   return result;
// }

// function binarySearch(
//   nums: number[],
//   target: number,
//   findFirst: boolean
// ): number {
//   let left = 0;
//   let right = nums.length - 1;
//   let result = -1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);

//     if (nums[mid] === target) {
//       result = mid;

//       // Adjust search space to find the first occurrence
//       if (findFirst) {
//         right = mid - 1;
//       } else {
//         left = mid + 1;
//       }
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return result;
// }
