import { CircularProgress, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Timer = ({ duration }: { duration: number }) => {
  const [timeLeft, setTimeLeft] = useState(duration / 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        return prev;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Stack direction={"row"} spacing={"1rem"} alignItems="center">
      {/* { TODO: Do linear progress element using timeLeft and duration numbers } */}
      <CircularProgress />
      <Typography sx={{ width: "5rem" }}>{`${timeLeft} s`}</Typography>
    </Stack>
  );
};

export default Timer;
