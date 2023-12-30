export const ques6 = {
  id: "6",
  question_number: 6,
  title: "Best Time to Buy and Sell Stock",
  difficulty: "Medium" as "Easy" | "Medium" | "Hard",
  description:
    "You are given an array prices where prices[i] is the price of a given stock on the ith day.\nYou want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.\nReturn the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
  example: {
    input: "prices = [7,1,5,3,6,4]",
    output: "5",
    explanation:
      "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.\nNote that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.",
  },
  constraints: ["1 <= prices.length <= 10^5", "0 <= prices[i] <= 10^4"],
  follow_up: "",
  hints: [],
  starterCode: `function solve(prices: number[]): number {
    
};`,
  testCases: [
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
  ],
};
