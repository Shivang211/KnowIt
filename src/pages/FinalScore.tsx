import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { animated, useSpring } from "react-spring";

import Blank from "../assets/blank.png";
import Winner from "../assets/winner.png";

export function FinalScore({
  user1,
  user2,
  score1,
  score2,
}: {
  user1: string;
  user2: string;
  score1: number;
  score2: number;
}) {
  const imageAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.4)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 2500 },
  });
  const navigate = useNavigate();

  const handleExit = () => {
    navigate("/");
    localStorage.clear();
  };

  return (
    <div style={{ height: "100vh", marginTop: "2rem" }}>
      <Typography
        sx={{ fontWeight: "bolder", fontFamily: "Gralliec", color: "white" }}
        variant="h2"
        gutterBottom
      >
        Results
      </Typography>

      <Box>
        <Grid container spacing={5} alignItems="center" justifyContent="center">
          <Grid item>
            <animated.img
              src={score1 > score2 ? Winner : Blank}
              alt="Your Image"
              style={{
                maxWidth: "30%",
                margin: 0,
                padding: 0,
                ...imageAnimation,
              }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bolder",
                fontFamily: "Gralliec",
                color: "white",
                textAlign: "center",
              }}
              gutterBottom
            >
              {user1}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bolder",
                fontFamily: "Gralliec",
                color: "white",
                textAlign: "center",
              }}
              gutterBottom
            >
              {score1}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <br />
      <Grid container spacing={5} alignItems="center" justifyContent="center">
        <Grid item>
          <animated.img
            src={score2 > score1 ? Winner : Blank}
            alt="Your Image"
            style={{
              maxWidth: "30%",
              margin: 0,
              padding: 0,
              ...imageAnimation,
            }}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bolder",
              fontFamily: "Gralliec",
              color: "white",
              textAlign: "center",
            }}
            gutterBottom
          >
            {user2}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bolder",
              fontFamily: "Gralliec",
              color: "white",
              textAlign: "center",
            }}
            gutterBottom
          >
            {score2}
          </Typography>
        </Grid>
      </Grid>
      <br />
      <Button
        sx={{ marginBottom: "1rem" }}
        variant="contained"
        onClick={handleExit}
      >
        <Typography
          sx={{
            fontWeight: "bolder",
            fontFamily: "Gralliec",
            letterSpacing: "0.09rem",
          }}
          variant={"h3"}
        >
          Exit
        </Typography>
      </Button>
    </div>
  );
}
