import { Button, Container, Typography, TextField } from "@mui/material";
import  { useState } from 'react';
import "./Homepage.css";

function Homepage() {
  const [username, setUsername] = useState('');

  const containerStyle = {
    backgroundColor: "purple", 
    padding: "20px",
  };

  const handleInputChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handleConfirmClick = () => {
  
  };

  return (
    <Container style={containerStyle}>
      <div className="cartoon-container">
        <Typography sx={{ fontWeight: "bolder", fontFamily: "Gralliec" }} variant={"h4"} gutterBottom marginTop={"150%"}>
          Do you 
          <div className="bouncing-text">
            <Typography sx={{ fontWeight: "bolder", fontFamily: "Gralliec", whiteSpace: "nowrap", display: "flex", flexDirection: "row",  }} variant={"h1"}>
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
          Confirm
        </Button>
      </div>
    </Container>
  );
}

export default Homepage;
