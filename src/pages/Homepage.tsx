import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Homepage.css";

function Homepage() {
  const [username, setUsername] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const containerStyle = {
    backgroundColor: "purple",
    padding: "20px",
  };

  const handleInputChange = (event: { target: { value: any } }) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handleConfirmClick = () => {
    localStorage.setItem("username", username);
    navigate("/category");
  };

  const handleHowToPlayClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleJoinClick = () => {
    navigate("/join-room");
  };

  return (
    <Container style={containerStyle}>
      <div className="cartoon-container">
        <Typography
          sx={{ fontWeight: "bolder", fontFamily: "Gralliec", color: "white", lineHeight: 0.4 }}
          variant={"h1"}
          gutterBottom
        >
          Do you
          <div className="bouncing-text">
            <Typography
              sx={{
                fontWeight: "bolder",
                fontFamily: "Gralliec",
                display: "flex",
                flexDirection: "row",
                fontSize: "200px",
                lineHeight: 1.1
              }}

            >
              <div className="b">K</div>
              <div className="o">N</div>
              <div className="u">O</div>
              <div className="n">W</div>
              <div className="c">I</div>
              <div className="e">T</div>
              <div className="f">?</div>
            </Typography>
          </div>
        </Typography>
      </div>
        <Box>
        <TextField
          id="outlined-basic"
          label="Enter Username"
          variant="filled"
          color="primary"
          value={username}
          onChange={handleInputChange}
          sx={{ marginY: "1rem", backgroundColor: "white" }} // Set the background color to white
        />
        </Box>
        <Box>
        <Button
          sx={{ marginY: "1rem" }}
          variant="contained"
          onClick={handleConfirmClick}
          disabled={username == ""}
        >
          <Typography
            sx={{
              fontWeight: "bolder",
              fontFamily: "Gralliec",
              letterSpacing: "0.1rem",
            }}
            variant={"h5"}
          >
            Start Game
          </Typography>
        </Button>
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: "bolder",
              fontFamily: "Gralliec",
              color: "orange",
            }}
            variant={"h3"}
            gutterBottom
          >
            OR?
          </Typography>
          </Box>
          <Box sx={{ marginY: "1rem" }}>
          <Button
            className="learn-more"
            sx={{ marginY: "1rem" }}
            variant="contained"
            onClick={handleJoinClick}
          >
            <Typography
              sx={{
                fontWeight: "bolder",
                fontFamily: "Gralliec",
                letterSpacing: "0.09rem",
              }}
              variant={"h5"}
            >
              Join Room
            </Typography>
          </Button>
          </Box>
        <Button
          sx={{ height: "20px" }}
          onClick={handleHowToPlayClick}
        >
          <Typography
            sx={{
              fontWeight: "bolder",
              fontFamily: "Gralliec",
              color: "orange",
              marginY: "1rem"
            }}
            variant={"h3"}
            gutterBottom
          >
            How to Play?
          </Typography>
        </Button>

        {/* Dialog for How to Play */}
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>
            <Typography
              sx={{
                fontWeight: "bolder",
                fontFamily: "Gralliec",
                color: "orange",
              }}
              variant={"h3"}
              gutterBottom
            >
              How to Play?
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {/* Add your instructions or information about how to play */}
              <Typography sx={{ display: "flex", flexDirection: "row" }}>
                Ever thought you will do amazing on Jeopardy? Let's get to
                KnowIt. Play this with your friends and see your expertise in
                your favorite topics. Just begin by entering your username.
                Choose a category you wanna play, and you're all set. You will
                be prompted questions and you are required to enter the answer
                in the form of the questions. Your scores are calculated based
                on the similarity of your answer to the optimal answer. Whoever
                has the highest score in the end of 5 rounds wins.
              </Typography>
              <Typography marginTop={"5%"}>
                You are now ready to play KnowIt.
              </Typography>

              <Typography
                sx={{
                  fontWeight: "bolder",
                  fontFamily: "Gralliec",
                  color: "#4cc9f0",
                  letterSpacing: "0.05rem",
                }}
                variant="h6"
              >
                (Answer: Who is ready to play KnowIt?)
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleCloseDialog}
              sx={{
                backgroundColor: "white",
                fontFamily: "Gralliec",
                fontSize: "24px",
                color: "#4cc9f0",
              }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
    </Container>
  );
}

export default Homepage;
