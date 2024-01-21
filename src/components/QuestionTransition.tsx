import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

const QuestionTransition = ({
  questionNo,
  duration,
}: {
  questionNo: number;
  duration: number;
}) => {
  const [timeLeft, setTimeLeft] = useState(duration / 1000);

  useEffect(() => {
    setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
  }, []);

  return (
    <>
      <Typography
        sx={{
          fontWeight: "bolder",
          fontFamily: "Gralliec",
          letterSpacing: "0.09rem",
          color: "white",
          marginY: "2rem",
        }}
        variant={"h3"}
      >
        {`Question ${questionNo} starting in ${timeLeft} seconds`}
      </Typography>
    </>
  );
};

export default QuestionTransition;
