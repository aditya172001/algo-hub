export const template4 = `
const testCases = [
    {
    input: {
        nums: [1, 3, 5, 6],
        target: 5,
    },
    output: 2,
    },
    {
    input: {
        nums: [1, 3, 5, 6],
        target: 2,
    },
    output: 1,
    },
    {
    input: {
        nums: [1, 3, 5, 6],
        target: 7,
    },
    output: 4,
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
//       } else if (nums[mid] < target) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }

//     // If the loop completes and the target is not found,
//     // the 'left' pointer indicates the position where the target should be inserted
//     return left;
//   }
