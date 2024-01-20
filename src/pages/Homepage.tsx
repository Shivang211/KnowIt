import { Button, Container, Typography, TextField, Box } from "@mui/material";
import React, { useState } from 'react';
import "./Homepage.css"; // Import a separate CSS file for styling

function Homepage() {
  const [username, setUsername] = useState('');
  const [isError, setIsError] = useState(false);

  const containerStyle = {
    backgroundColor: "purple", // Set the background color to purple
    padding: "20px", // Add padding as needed
  };

  const handleInputChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    setUsername(value);
    setIsError(value.trim() === ''); // Set isError to true if the input is empty
  };

  const handleConfirmClick = () => {
    // Add your logic to handle form submission here
    if (!isError) {
      // Only proceed if the input is not empty
      console.log('Username:', username);
    }
  };

  return (
    <Container style={containerStyle}>
      <div className="cartoon-container">
        <Typography sx={{ fontWeight: "bolder", fontFamily: "Gralliec" }} variant={"h4"} gutterBottom marginTop={"100%"}>
          Do you 
          <div className="bouncing-text">
            <Typography sx={{ fontWeight: "bolder", fontFamily: "Gralliec", whiteSpace: "nowrap", display: "flex", flexDirection: "row", letterSpacing: "0.02em", color:"#4cc9f0"  }} variant={"h1"}>
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
        {isError && <Typography sx={{ color: 'red' }}>Username cannot be empty</Typography>}
        <br />

        <Button sx={{ marginTop: "15%" }} variant="contained" onClick={handleConfirmClick} disabled={isError}>
          Confirm
        </Button>
      </div>
    </Container>
  );
}

export default Homepage;
