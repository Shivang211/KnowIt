import { Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function JoinRoomPage() {
  const navigate = useNavigate();

  const containerStyle = {
    backgroundColor: "purple", // Set the background color to purple
    padding: "20px", // Add padding as needed
  };
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");

  const handleuserNameChange = (event: { target: { value: any } }) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handleRoomIdChange = (event: { target: { value: any } }) => {
    const value = event.target.value;
    setRoomId(value);
  };

  const handleJoinClick = () => {
    localStorage.setItem("username", username);
    navigate(`/room/${roomId}`);
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <Container style={containerStyle}>
      <div className="cartoon-container">
        <Typography
          sx={{ fontWeight: "bolder", fontFamily: "Gralliec", color: "white" }}
          variant={"h4"}
          gutterBottom
          marginTop={"100%"}
        >
          Do you
          <div className="bouncing-text">
            <Typography
              sx={{
                fontWeight: "bolder",
                fontFamily: "Gralliec",
                whiteSpace: "nowrap",
                display: "flex",
                flexDirection: "row",
                letterSpacing: "0.02rem",
              }}
              variant={"h1"}
            >
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
          onChange={handleuserNameChange}
          sx={{ marginTop: "10%", backgroundColor: "white" }} // Set the background color to white
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Enter Room ID"
          variant="filled"
          color="primary"
          value={roomId}
          onChange={handleRoomIdChange}
          sx={{ marginTop: "10%", backgroundColor: "white" }} // Set the background color to white
        />
        <br />
        <Button
          sx={{ marginTop: "15%" }}
          variant="contained"
          onClick={handleJoinClick}
          disabled={roomId == "" || username == ""}
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
        <br />
        <Button
          sx={{ marginTop: "15%" }}
          variant="contained"
          onClick={handleBackClick}
        >
          <Typography
            sx={{
              fontWeight: "bolder",
              fontFamily: "Gralliec",
              letterSpacing: "0.09rem",
            }}
            variant={"h5"}
          >
            Back
          </Typography>
        </Button>
      </div>
    </Container>
  );
}
