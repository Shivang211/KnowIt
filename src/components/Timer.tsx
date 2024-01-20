import { Typography, Stack, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";

const Timer = ({ duration }: { duration: number}) => {
  const [timeLeft, setTimeLeft] = useState(duration / 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        return prev - 1;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Stack direction={"row"} spacing={"1rem"}>
      {/* { TODO: Do linear progress element using timeLeft and duration numbers } */}
      <CircularProgress />
      <Typography sx={{ width: "5rem" }}>{`${timeLeft} s`}</Typography>
    </Stack>
  );
};

export default Timer;
