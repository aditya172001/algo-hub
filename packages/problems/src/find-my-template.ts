import {
  template1,
  template2,
  template3,
  template4,
  template5,
  template6,
  template7,
  template8,
  template9,
  template10,
} from "./myTemplates";

export function findMyTemplate(quesNumber: number): string | null {
  switch (quesNumber) {
    case 1:
      return template1;
    case 2:
      return template2;
    case 3:
      return template3;
    case 4:
      return template4;
    case 5:
      return template5;
    case 6:
      return template6;
    case 7:
      return template7;
    case 8:
      return template8;
    case 9:
      return template9;
    case 10:
      return template10;
    default:
      return null;
  }
}
