import { Button, Container, Typography, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import  { useState } from 'react';
import "./Homepage.css";

function Homepage() {
  const [username, setUsername] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const containerStyle = {
    backgroundColor: "purple", 
    padding: "20px",
  };

  

  const handleInputChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handleConfirmClick = () => {
    // Handle confirm logic
  };

  const handleHowToPlayClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Container style={containerStyle}>
      <div className="cartoon-container">
        <Typography sx={{ fontWeight: "bolder", fontFamily: "Gralliec", color:"white" }} variant={"h4"} gutterBottom marginTop={"100%"}>
          Do you 
          <div className="bouncing-text">
            <Typography sx={{ fontWeight: "bolder", fontFamily: "Gralliec", whiteSpace: "nowrap", display: "flex", flexDirection: "row", letterSpacing:"0.02rem" }} variant={"h1"}>
              <div className="b">K</div>
              <div className="o">n</div>
              <div className="u">o</div>
              <div className="n">w</div>
              <div className="c">I</div>
              <div className="e">t</div>
              <div className="f">?</div>
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
        <Button sx={{ marginTop: "15%" }} variant="contained" onClick={handleConfirmClick} disabled={username == ''}>
          <Typography sx={{ fontWeight: "bolder", fontFamily: "Gralliec", letterSpacing:"0.09rem"}}  variant={"h5"}>
          Confirm
          </Typography >
        </Button>
        <br></br>
        <Button sx={{height:"20px", marginTop:"20%"}} onClick={handleHowToPlayClick}>
          <Typography sx={{ fontWeight: "bolder", fontFamily: "Gralliec", color:"orange" }} variant={"h3"} gutterBottom marginTop={"50%"}>
            How to Play?
          </Typography>
        </Button>

        {/* Dialog for How to Play */}
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle><Typography sx={{ fontWeight: "bolder", fontFamily: "Gralliec", color:"orange" }} variant={"h3"} gutterBottom >
            How to Play?
          </Typography></DialogTitle>
          <DialogContent>
            <DialogContentText>
              {/* Add your instructions or information about how to play */}
              <Typography sx={{display: "flex", flexDirection: "row"}}>
             Ever thought you will do amazing on Jeopardy? Let's get to KnowIt. Play this with your friends and see your expertise in your favorite topics. Just begin by entering your username.
            Choose a category you wanna play, and you're all set. You will be prompted questions and you are required to enter the answer in the form of the questions. Your scored are calculated based on your similarity of your answer to the optimal answer. Whoever has the highest score in the end of 5 rounds wins.
            </Typography>
            <Typography marginTop={"5%"}>
            You are now ready to play KnowIt.
            
            </Typography>
            
            <Typography sx={{ fontWeight: "bolder", fontFamily: "Gralliec", color:"#4cc9f0", letterSpacing:"0.05rem"}}  marginTop={"2%"} variant="h6">
            (Answer: Who is ready to play KnowIt?)
            </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Container>
  );
}

export default Homepage;
