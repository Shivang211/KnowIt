import { Container, Grid, Typography } from "@mui/material";

import VS from "../assets/vs.png";

export function GameStartPage() {
  return (
    <Container>
      <Typography
        sx={{ fontWeight: "bolder", fontFamily: "Gralliec", color: "white" }}
        variant={"h1"}
        gutterBottom
      >
        KnowIt
      </Typography>
      <Typography
        sx={{ fontWeight: "bolder", fontFamily: "Gralliec", color: "white" }}
        variant={"h2"}
        gutterBottom
      >
        HarryPotter
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{
          alignContent: "center",
          justifyContent: "center",
          marginTop: "20%",
        }}
      >
        <Grid item alignContent={"left"}>
          <Typography
            sx={{
              fontWeight: "bolder",
              fontFamily: "Gralliec",
              color: "white",
              alignContent: "left",
            }}
            variant={"h2"}
            gutterBottom
          >
            User1
          </Typography>
        </Grid>
        <Grid item>
          <img src={VS} style={{ maxWidth: "50%" }} />
        </Grid>
        <Grid item alignContent={"right"}>
          <Typography
            sx={{
              fontWeight: "bolder",
              fontFamily: "Gralliec",
              color: "white",
              alignContent: "left",
            }}
            variant={"h2"}
            gutterBottom
          >
            User2
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
