import { seedquestions } from "./seedquestions.js";

export const getQuestions = (number) => {
  return seedquestions.slice(0,5);
};
