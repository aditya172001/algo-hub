export const template9 = `
const testCases = [
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

// function solve(nums: number[], target: number): number {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2);

//       if (nums[mid] === target) {
//         return mid;
//       }

//       if (nums[left] <= nums[mid]) {
//         if (nums[left] <= target && target < nums[mid]) {
//           right = mid - 1;
//         } else {
//           left = mid + 1;
//         }
//       } else {
//         if (nums[mid] < target && target <= nums[right]) {
//           left = mid + 1;
//         } else {
//           right = mid - 1;
//         }
//       }
//     }

//     return -1;
//   }
