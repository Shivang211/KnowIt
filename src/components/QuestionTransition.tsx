import { Typography } from "@mui/material";

const QuestionTransition = ({
  questionNo,
}: {
  questionNo: number;
}) => {
 
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
        {`Question ${questionNo} starting ...`}
      </Typography>
    </>
  );
};

export default QuestionTransition;
