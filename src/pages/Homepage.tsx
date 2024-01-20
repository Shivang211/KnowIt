import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
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
          sx={{ fontWeight: "bolder", fontFamily: "Gralliec", color: "white" }}
          variant={"h4"}
          gutterBottom
          marginTop={"80%"}
        >
          Do you
          <div className="bouncing-text">

            <Typography sx={{ fontWeight: "bolder", fontFamily: "Gralliec", whiteSpace: "nowrap", display: "flex", flexDirection: "row", letterSpacing:"0.02rem" }} variant={"h1"}>
              <div className="x">K</div>
              <div className="y">n</div>
              <div className="z">o</div>
              <div className="a">w</div>
              <div className="m">I</div>
              <div className="p">t</div>
              <div className="q">?</div>

              <div className="shadow"></div>
              <div className="shadow-two"></div>
            </Typography>
          </div>
        </Typography>
        <TextField
          id="outlined-basic"
          label="Enter Username"
          variant="filled"
          color="primary"
          value={username}
          onChange={handleInputChange}
          sx={{ marginTop: "10%", backgroundColor: "white" }} // Set the background color to white
        />
        <br />
        <Button className="start-btn"
          sx={{ marginTop: "15%", backgroundColor:"#4cc9f0", color:"white", fontFamily: "Gralliec", fontSize:"24px" }}
          variant="contained"
          onClick={handleConfirmClick}
          disabled={username == ""}
        >
          
            Start Game
          
        </Button>
        <br></br>
        <Box
          sx={{marginTop:"5%", justifyContent: "center"}}
        >
          <Typography
            sx={{
              fontWeight: "bolder",
              fontFamily: "Gralliec",
              color: "orange",
              
              
            }}
            variant={"h4"}
            gutterBottom
          >
            OR
          </Typography>
          <Button className="start-btn"
            sx={{backgroundColor:"#4cc9f0", color:"white", fontFamily: "Gralliec", fontSize:"24px" }}
            
            onClick={handleJoinClick}
          >
            
              Join Room
            
          </Button>
        </Box>
        <Button
          sx={{ height: "20px", marginY: "30%" }}
          onClick={handleHowToPlayClick}
        >
          <Typography
            sx={{
              fontWeight: "bolder",
              fontFamily: "Gralliec",
              color: "orange",
            }}
            variant={"h3"}
            gutterBottom
            marginTop={"10%"}
          >
            ¿How to Play?
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
                marginTop={"2%"}
                variant="h6"
              >
                (Answer: Who is ready to play KnowIt?)
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button className='start-btn' onClick={handleCloseDialog} sx={{backgroundColor:"white", fontFamily: "Gralliec", fontSize:"24px", color:"#4cc9f0"}}>
              Close
            </Button>
            
          </DialogActions>
        </Dialog>
      </div>
    </Container>
  );
}

export default Homepage;
