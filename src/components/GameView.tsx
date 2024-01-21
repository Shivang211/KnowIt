import { QuestionPage } from "../pages/QuestionPage";
import ScorePage from "../pages/ScorePage";
import QuestionTransition from "./QuestionTransition";

import Timer from "../components/Timer";

interface Player {
  id: string;
  answers: string[];
}

const getCurrentUserAnswer = (
  currentUserSocketID: string,
  playersList: string[],
  currentQnNo: number,
) => {
  const currentPlayer: Player = playersList.find(
    (player: any) => player.id === currentUserSocketID,
  ) as unknown as Player;

  if (currentPlayer === undefined) {
    return "";
  } else {
    const playerAnswer = currentPlayer.answers[currentQnNo];
    if (playerAnswer === undefined) {
      return "No answer submitted";
    } else {
      return playerAnswer;
    }
  }
};

const GameView = ({
  playerAnswer,
  setPlayerAnswer,
  gameState,
  inputResponse,
}: {
  playerAnswer: string;
  setPlayerAnswer: (_: string) => void;
  gameState: any;
  inputResponse: ({ answer }: { answer: string }) => void;
}) => {
  console.log(gameState);
  const socketId = localStorage.getItem("socketId");
  const playerInfo = gameState.players;
  const questionRoundStatus = gameState.questionRoundStatus;
  return (
    <>
      {questionRoundStatus === "pending" && (
        <QuestionTransition
          questionNo={gameState.currentQuestionNo}
        />
      )}
      {questionRoundStatus === "started" && (
        <>
          <QuestionPage
            question={
              gameState.questions[gameState.currentQuestionNo - 1].payload
            }
            questionNo={gameState.currentQuestionNo}
            answer={playerAnswer}
            setAnswer={setPlayerAnswer}
            duration={gameState.duration}
            inputResponse={inputResponse}
          />
          {/* {inputResponse({ answer: playerAnswer })} */}
        </>
      )}
      {questionRoundStatus === "ended" && (
        <>
          <ScorePage
            user1={playerInfo[0].name}
            user2={playerInfo[1].name}
            score1={playerInfo[0].score}
            score2={playerInfo[1].score}
            answer={gameState.questions[gameState.currentQuestionNo - 1].answer}
          />
        </>
      )}
    </>
  );
};

export default GameView;
