export const ques5 = {
  id: "5",
  question_number: 5,
  title: "Plus One",
  difficulty: "Easy" as "Easy" | "Medium" | "Hard",
  description:
    "You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.\nIncrement the large integer by one and return the resulting array of digits.",
  example: {
    input: "digits = [1,2,3]",
    output: "[1,2,4]",
    explanation:
      "The array represents the integer 123.\nIncrementing by one gives 123 + 1 = 124.\nThus, the result should be [1,2,4].",
  },
  constraints: [
    "1 <= digits.length <= 100",
    "0 <= digits[i] <= 9",
    "digits does not contain any leading 0's.",
  ],
  follow_up: "",
  hints: [],
  starterCode: `function solve(digits: number[]): number[] {
    
};`,
  testCases: [
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
  ],
};
