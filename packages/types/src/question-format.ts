export interface TestCaseType {
  input: any;
  output: any;
}

export interface QuestionType {
  id: string;
  question_number: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  example: {
    input: string;
    output: string;
    explanation?: string;
  };
  constraints: string[];
  follow_up?: string;
  hints?: string[];
  starterCode: string;
  testCases: TestCaseType[];
}
