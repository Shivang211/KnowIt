import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export function QuestionPage({ question,questionNo, answer, setAnswer }: { question: string; questionNo: string; answer: string; setAnswer: (_: string) => void }) {

  function handleInputChange(event: { target: { value: any } }) {
    const value = event.target.value;
    setAnswer(value);
  }

  function handleSubmit() {}
  return (
    <Box style={{ height: "100vh" }}>
      <Box sx={{ alignContent: "center" }}>
        <Typography
          sx={{ fontWeight: "bolder", fontFamily: "Gralliec", color: "white" }}
          variant={"h3"}
          gutterBottom
        >
          {`Question ${questionNo}`}
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
          {question}
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
    </Box>
  );
}
