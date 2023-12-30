export const template2 = `
    const testCases = [
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

// function solve(nums: number[]): number[][] {
//     const result: number[][] = [];
//     const len = nums.length;

//     // Sort the array to simplify the two-pointer approach
//     nums.sort((a, b) => a - b);

//     for (let i = 0; i < len - 2; i++) {
//         // Skip duplicates
//         if (i > 0 && nums[i] === nums[i - 1]) {
//             continue;
//         }

//         let left = i + 1;
//         let right = len - 1;
//         const target = -nums[i];

//         while (left < right) {
//             const sum = nums[left] + nums[right];

//             if (sum === target) {
//                 result.push([nums[i], nums[left], nums[right]]);

//                 // Skip duplicates
//                 while (left < right && nums[left] === nums[left + 1]) {
//                     left++;
//                 }

//                 // Skip duplicates
//                 while (left < right && nums[right] === nums[right - 1]) {
//                     right--;
//                 }

//                 left++;
//                 right--;
//             } else if (sum < target) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }

//     return result;
// }
