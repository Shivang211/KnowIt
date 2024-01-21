import { seedquestions } from "./seedquestions.js";

export const getQuestions = (topic) => {
  return seedquestions
    .filter((val) => val.topic.toLowerCase() == topic.toLowerCase())
    .slice(0, 5);
};
