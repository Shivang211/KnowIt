import {
  Box,
  Button,
  Container,
  Dialog,
  DialogTitle,
  List,
  Typography,
} from "@mui/material";
import { generate } from "random-words";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import himymLogo from "../assets/HIMYMIcon.jpeg";
import badmintonLogo from "../assets/badmintonIcon.png";
import batmanLogo from "../assets/batmanIcon.svg";
import billionsLogo from "../assets/billionsIcon.png";
import breakingBadLogo from "../assets/breakingbadIcon.jpeg";
import cricketLogo from "../assets/cricketIcon.png";
import disneyLogo from "../assets/disney.svg";
import friendsLogo from "../assets/friendsIcon.jpeg";
import gameOfThronesLogo from "../assets/gameOfThrones.png";
import harryPotterLogo from "../assets/harryIcon.svg";
import marvelLogo from "../assets/marvelIcon.svg";
import olympicsLogo from "../assets/olympicsIcon.png";
import soccerLogo from "../assets/soccerIcon.png";
import suitsLogo from "../assets/suits.png";
import worldMonumentsLogo from "../assets/tajMahalIcon.jpeg";
import whoAmILogo from "../assets/whoAmIIcon.jpeg";
import worldHistoryLogo from "../assets/worldHistoryIcon.png";
import { CustomButton } from "../components/CustomButton";
import "./CategorySelect.css";

// Import a separate CSS file for styling

function CategorySelect() {
  const [openDialog, setOpenDialog] = useState(false);

  const [openTvShowsDialog, setOpenTvShowsDialog] = useState(false);

  const [openSportsDialog, setOpenSportsDialog] = useState(false);

  const [openGKDialog, setOpenGKDialog] = useState(false);

  const navigate = useNavigate();

  const containerStyle = {
    backgroundColor: "purple", // Set the background color to purple
    padding: "20px", // Add padding as needed
  };

  const handleClick = (topic: string) => {
    const randomRoomID = generate(3).join("-");
    localStorage.setItem("roomId", randomRoomID);
    localStorage.setItem("topic", topic);
    navigate(`/room/${randomRoomID}`, { replace: true });
  };

  const handleMoviesButtonClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleTvShowsButtonClick = () => {
    setOpenTvShowsDialog(true);
  };

  const handleCloseTvShowsDialog = () => {
    setOpenTvShowsDialog(false);
  };

  const handleSportsButtonClick = () => {
    setOpenSportsDialog(true);
  };

  const handleCloseSportsDialog = () => {
    setOpenSportsDialog(false);
  };

  const handleGKButtonClick = () => {
    setOpenGKDialog(true);
  };

  const handleCloseGKDialog = () => {
    setOpenGKDialog(false);
  };

  return (
    <Container style={containerStyle}>
      <div className="cartoon-container">
        <Box
          marginTop={"-10%"}
          sx={{
            fontWeight: "bolder",
            fontFamily: "Gralliec",
            whiteSpace: "nowrap",
            display: "flex",
            flexDirection: "row",
            letterSpacing: "0.02em",
            fontSize: "150px",
            justifyContent: "center",
          }}
        >
          <div className="k">k</div>
          <div className="h">n</div>
          <div className="d">o</div>
          <div className="r">w</div>
          <div className="i">i</div>
          <div className="t">t</div>
          <div className="s">?</div>
        </Box>
        <Typography
          marginTop={"20%"}
          sx={{ fontWeight: "bolder", fontFamily: "Gralliec", color: "white" }}
          variant={"h3"}
          gutterBottom
        >
          Looking good, {localStorage.getItem("username")} !
        </Typography>
        <Typography
          sx={{ fontWeight: "bolder", fontFamily: "Gralliec", color: "white" }}
          variant={"h4"}
          gutterBottom
        >
          Click and choose a
          <div className="bouncing-text">
            <Typography
              sx={{
                fontWeight: "bolder",
                fontFamily: "Gralliec",
                whiteSpace: "nowrap",
                display: "flex",
                flexDirection: "row",
                letterSpacing: "0.02em",
                marginLeft: "7%",
              }}
              variant={"h1"}
            >
              <div className="b">C</div>
              <div className="o">A</div>
              <div className="u">T</div>
              <div className="n">E</div>
              <div className="c">G</div>
              <div className="e">O</div>
              <div className="f">R</div>
              <div className="g">Y</div>
              <div className="shadow"></div>
              <div className="shadow-two"></div>
            </Typography>
          </div>
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "4rem",
            textWrap: "nowrap",
            justifyContent: "center",
          }}
        >
          <Box>
            <Button
              onClick={handleMoviesButtonClick}
              sx={{
                border: "1px solid white",
                borderRadius: "5px",
                marginX: "0.5rem",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bolder",
                  fontFamily: "Gralliec",
                  color: "white",
                }}
                variant={"h2"}
              >
                Movies
              </Typography>
            </Button>
          </Box>
          <Box>
            <Button
              onClick={handleTvShowsButtonClick}
              sx={{
                border: "1px solid white",
                borderRadius: "5px",
                marginX: "0.5rem",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bolder",
                  fontFamily: "Gralliec",
                  color: "white",
                }}
                variant={"h2"}
              >
                Shows
              </Typography>
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "1rem",
            textWrap: "nowrap",
            justifyContent: "center",
          }}
        >
          <Box>
            <Button
              onClick={handleSportsButtonClick}
              sx={{
                border: "1px solid white",
                borderRadius: "5px",
                marginX: "0.5rem",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bolder",
                  fontFamily: "Gralliec",
                  color: "white",
                }}
                variant={"h2"}
              >
                Sports
              </Typography>
            </Button>
          </Box>
          <Box>
            <Button
              onClick={handleGKButtonClick}
              sx={{
                border: "1px solid white",
                borderRadius: "5px",
                marginX: "0.5rem",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bolder",
                  fontFamily: "Gralliec",
                  color: "white",
                }}
                variant={"h2"}
              >
                GK
              </Typography>
            </Button>
          </Box>
        </Box>
        {/* <Typography
          sx={{
            fontWeight: "bolder",
            fontFamily: "Gralliec",
            color: "	#ff2a04",
            marginTop: "10%",
          }}
          variant={"h2"}
          gutterBottom
        >
          Popular categories
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button
            variant="text"
            sx={{
              height: "50px",
              margin: "auto",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bolder",
                fontFamily: "Gralliec",
                color: "#4cc9f0",
              }}
              variant="h3"
              gutterBottom
            >
              Friends
            </Typography>
          </Button>
          <Button
            variant="text"
            sx={{
              margin: "auto",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bolder",
                fontFamily: "Gralliec",
                color: "orange",
              }}
              variant="h3"
              gutterBottom
            >
              Cricket
            </Typography>
          </Button>
        </Box> */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          PaperProps={{
            style: {
              backgroundColor: "#1a1a1a",
              color: "#b3b3b3",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(255, 255, 255, 0.1)",
              backgroundImage: "linear-gradient(to right, #ffffff, #f0f0f0)",
            },
          }}
        >
          <DialogTitle>
            <Typography
              sx={{
                fontWeight: "bolder",
                fontFamily: "Gralliec",
                color: "orange",
              }}
              variant={"h4"}
              gutterBottom
            >
              Pick a Movie:
            </Typography>
          </DialogTitle>
          <List>
            {/* Replace these placeholders with actual movie names */}
            <CustomButton
              imageSource={harryPotterLogo}
              color="red"
              content="Harry Potter"
              callback={() => handleClick("Harry Potter")}
            />
            <CustomButton
              imageSource={batmanLogo}
              color="#4cc9f0"
              content="Batman Trilogy"
              callback={() => handleClick("Batman Trilogy")}
            />
            <CustomButton
              imageSource={marvelLogo}
              color="red"
              content="Marvel"
              callback={() => handleClick("Marvel")}
            />
            <CustomButton
              imageSource={disneyLogo}
              color="#4cc9f0"
              content="Disney"
              callback={() => handleClick("Disney")}
            />
          </List>
        </Dialog>
        <Dialog
          open={openTvShowsDialog}
          onClose={handleCloseTvShowsDialog}
          PaperProps={{
            style: {
              backgroundColor: "#1a1a1a",
              color: "#b3b3b3",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(255, 255, 255, 0.1)",
              backgroundImage: "linear-gradient(to right, #ffffff, #f0f0f0)",
            },
          }}
        >
          <DialogTitle>
            <Typography
              sx={{
                fontWeight: "bolder",
                fontFamily: "Gralliec",
                color: "orange",
              }}
              variant={"h4"}
              gutterBottom
            >
              Pick a TV Show:
            </Typography>
          </DialogTitle>
          <List>
            <CustomButton
              imageSource={suitsLogo}
              color="red"
              content="SUITS"
              callback={() => handleClick("SUITS")}
            />
            <CustomButton
              imageSource={billionsLogo}
              color="#4cc9f0"
              content="BILLIONS"
              callback={() => handleClick("BILLIONS")}
            />
            <CustomButton
              imageSource={friendsLogo}
              color="red"
              content="FRIENDS"
              callback={() => handleClick("FRIENDS")}
            />
            <CustomButton
              imageSource={breakingBadLogo}
              color="#4cc9f0"
              content="BREAKING BAD"
              callback={() => handleClick("BILLIONS")}
            />
            <CustomButton
              imageSource={gameOfThronesLogo}
              color="red"
              content="GAME OF THRONES"
              callback={() => handleClick("GAME OF THRONES")}
            />
            <CustomButton
              imageSource={himymLogo}
              color="#4cc9f0"
              content="HOW I MET YOUR MOTHER"
              callback={() => handleClick("HOW I MET YOUR MOTHER")}
            />
          </List>
        </Dialog>
        <Dialog
          open={openSportsDialog}
          onClose={handleCloseSportsDialog}
          PaperProps={{
            style: {
              backgroundColor: "#1a1a1a",
              color: "#b3b3b3",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(255, 255, 255, 0.1)",
              backgroundImage: "linear-gradient(to right, #ffffff, #f0f0f0)",
            },
          }}
        >
          <DialogTitle>
            <Typography
              sx={{
                fontWeight: "bolder",
                fontFamily: "Gralliec",
                color: "orange",
              }}
              variant={"h4"}
              gutterBottom
            >
              Pick a Sport:
            </Typography>
          </DialogTitle>
          <List>
            <CustomButton
              imageSource={soccerLogo}
              color="red"
              content="SOCCER"
              callback={() => handleClick("SOCCER")}
            />
            <CustomButton
              imageSource={cricketLogo}
              color="#4cc9f0"
              content="CRICKET"
              callback={() => handleClick("CRICKET")}
            />
            <CustomButton
              imageSource={badmintonLogo}
              color="red"
              content="BADMINTON"
              callback={() => handleClick("BADMINTON")}
            />
            <CustomButton
              imageSource={olympicsLogo}
              color="#4cc9f0"
              content="OLYMPICS"
              callback={() => handleClick("OLYMPICS")}
            />
          </List>
        </Dialog>
        <Dialog
          open={openGKDialog}
          onClose={handleCloseGKDialog}
          PaperProps={{
            style: {
              backgroundColor: "#1a1a1a",
              color: "#b3b3b3",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(255, 255, 255, 0.1)",
              backgroundImage: "linear-gradient(to right, #ffffff, #f0f0f0)",
            },
          }}
        >
          <DialogTitle>
            <Typography
              sx={{
                fontWeight: "bolder",
                fontFamily: "Gralliec",
                color: "orange",
              }}
              variant={"h4"}
              gutterBottom
            >
              Pick a Topic:
            </Typography>
          </DialogTitle>
          <List>
            <CustomButton
              imageSource={whoAmILogo}
              color="red"
              content="WHO AM I?"
              callback={() => handleClick("WHO AM I?")}
            />
            <CustomButton
              imageSource={worldHistoryLogo}
              color="#4cc9f0"
              content="WORLD HISTORY"
              callback={() => handleClick("WORLD HISTORY")}
            />
            <CustomButton
              imageSource={worldMonumentsLogo}
              color="red"
              content="WORLD MONUMENTS"
              callback={() => handleClick("WORLD MONUMENTS")}
            />
          </List>
        </Dialog>
      </div>
    </Container>
  );
}
3;

export default CategorySelect;
