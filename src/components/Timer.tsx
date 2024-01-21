import { CircularProgress, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Timer = ({ duration }: { duration: number }) => {
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
    <>
      {/* { TODO: Do linear progress element using timeLeft and duration numbers } */}
      <Typography
        sx={{
            fontWeight: "bolder",
            fontFamily: "Gralliec",
            letterSpacing: "0.1rem",
            color: "white"
        }}
        variant={"h3"}
        >
        {`${timeLeft} s`}
        </Typography>
        </>
  );
};

export default Timer;
