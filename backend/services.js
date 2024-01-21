import seedquestions from "./seedquestions.js";

// Function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const getQuestions = (topic) => {
  const filteredQuestions = seedquestions.filter(
    (val) => val.topic.toLowerCase() === topic.toLowerCase()
  );

  // Shuffle the array randomly
  const shuffledQuestions = shuffleArray([...filteredQuestions]);

  // Take the first 5 elements (or less if the array is shorter)
  const randomQuestions = shuffledQuestions.slice(0, 5);

  return randomQuestions;
};
