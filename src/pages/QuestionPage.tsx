import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export function QuestionPage() {
  const [answer, setAnswer] = useState("");

  function handleInputChange(event: { target: { value: any } }) {
    const value = event.target.value;
    setAnswer(value);
  }

  function handleSubmit() {}
  return (
    <div style={{ height: "100vh" }}>
      <Box sx={{ alignContent: "center" }}>
      <Typography
          // marginTop={"10%"}
          sx={{
            fontWeight: "bolder",
            fontFamily: "Gralliec",
            whiteSpace: "nowrap",
            display: "flex",
            flexDirection: "row",
            letterSpacing: "0.02em",
            justifyContent: "center",
            textAlign: "center"
          }}
          variant={"h1"}
          gutterBottom
        >
          <div className="k">k</div>
          <div className="h">n</div>
          <div className="d">o</div>
          <div className="r">w</div>
          <div className="i">i</div>
          <div className="t">t</div>
          <div className="s">?</div>
        </Typography>
        <Typography
          sx={{ fontWeight: "bolder", fontFamily: "Gralliec", color: "white" }}
          variant={"h3"}
          gutterBottom
        >
          Question
        </Typography>
        <Typography
          sx={{
            fontWeight: "bolder",
            fontFamily: "Inter",
            color: "white",
            width: "50%",
            margin: "auto",
          }}
          variant={"h5"}
          gutterBottom
        >
          The term for a situation where a bowler dismisses three batsmen with
          three consecutive deliveries but not in the same over
        </Typography>
      </Box>
      <TextField
        id="filled-basic"
        label="Answer"
        value={answer}
        onChange={handleInputChange}
        variant="filled"
        style={{
          backgroundColor: "white",
          width: "50%",
          marginTop: "5%",
          border: "rounded",
        }}
      />
      <br></br>
      <Button
        style={{ margin: "4%", width: "30%" }}
        variant="contained"
        onClick={handleSubmit}
        disabled={answer == ""}
      >
        Submit
      </Button>
    </div>
  );
}
