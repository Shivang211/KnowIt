import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
const QuestionTransition = ({ questionNo, duration }: { questionNo: number; duration: number }) => {
  const [timeLeft, setTimeLeft] = useState(duration / 1000);

  useEffect(() => {
    setInterval(() => {
      setTimeLeft((prev) => {
        return prev - 1;
      });
    }, 1000);
  }, []);
  return (
    <Typography sx={{ fontSize: "large" }}>{`Qn ${questionNo} starting in ${timeLeft} seconds`}</Typography>
  );
};

export default QuestionTransition;
