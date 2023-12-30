import {
  ques1,
  ques2,
  ques3,
  ques4,
  ques5,
  ques6,
  ques7,
  ques8,
  ques9,
  ques10,
} from "./myQuestions";
import { QuestionType } from "types";

export function findMyQuestion(quesNumber: number): QuestionType | null {
  switch (quesNumber) {
    case 1:
      return ques1;
    case 2:
      return ques2;
    case 3:
      return ques3;
    case 4:
      return ques4;
    case 5:
      return ques5;
    case 6:
      return ques6;
    case 7:
      return ques7;
    case 8:
      return ques8;
    case 9:
      return ques9;
    case 10:
      return ques10;
    default:
      return null;
  }
}
