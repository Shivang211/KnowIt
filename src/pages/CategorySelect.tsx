import {
  Box,
  Button,
  Container,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useState } from "react";

import "./CategorySelect.css";

// Import a separate CSS file for styling

function CategorySelect() {

  const [openDialog, setOpenDialog] = useState(false);

  const containerStyle = {
    backgroundColor: "purple", // Set the background color to purple
    padding: "20px", // Add padding as needed
  };

  const handleMoviesButtonClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };


  return (
    <Container style={containerStyle}>
      <div className="cartoon-container">
        <Typography
          marginTop={"-10%"}
          sx={{
            fontWeight: "bolder",
            fontFamily: "Gralliec",
            whiteSpace: "nowrap",
            display: "flex",
            flexDirection: "row",
            letterSpacing: "0.02em",
            marginLeft: "15%",
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
          marginTop={"30%"}
          sx={{ fontWeight: "bolder", fontFamily: "Gralliec" }}
          variant={"h4"}
          gutterBottom
        >
          Looking good, {localStorage.getItem("username")}
        </Typography>
        <Typography
          sx={{ fontWeight: "bolder", fontFamily: "Gralliec" }}
          variant={"h5"}
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
        <Box sx={{ display: "flex", flexDirection: "row", marginTop: "20%" }}>
          <Box>
            <Button onClick={handleMoviesButtonClick}>
              <Typography
                sx={{
                  fontWeight: "bolder",
                  fontFamily: "Gralliec",
                  color: "white",
                }}
                variant={"h4"}
                gutterBottom
              >
                Movies
              </Typography>
            </Button>
          </Box>
          <Box marginLeft={"5%"}>
            <Button>
              <Typography
                sx={{
                  fontWeight: "bolder",
                  fontFamily: "Gralliec",
                  color: "white",
                }}
                variant={"h4"}
                gutterBottom
              >
                Tv Shows
              </Typography>
            </Button>
          </Box>
          <Box marginLeft={"5%"}>
            <Button>
              <Typography
                sx={{
                  fontWeight: "bolder",
                  fontFamily: "Gralliec",
                  color: "white",
                }}
                variant={"h4"}
                gutterBottom
              >
                Sports
              </Typography>
            </Button>
          </Box>
          <Box marginLeft={"5%"}>
            <Button>
              <Typography
                sx={{
                  fontWeight: "bolder",
                  fontFamily: "Gralliec",
                  color: "white",
                }}
                variant={"h4"}
                gutterBottom
              >
                GK
              </Typography>
            </Button>
          </Box>
        </Box>
        <Typography
          sx={{
            fontWeight: "bolder",
            fontFamily: "Gralliec",
            color: "	#ff2a04",
            marginTop: "20%",
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
            marginTop: "20%",
            justifyContent: "center",
          }}
        >
          <Button
            variant="text"
            sx={{
              height: "75px",
              margin: "auto",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bolder",
                marginTop: "10%",
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
              height: "75px",
              margin: "auto",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bolder",
                marginTop: "10%",
                fontFamily: "Gralliec",
                color: "orange",
              }}
              variant="h3"
              gutterBottom
            >
              Cricket
            </Typography>
          </Button>
        </Box>
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          style={{ textAlign: "center" }}
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
            <ListItem>
              <ListItemButton>
                <Typography
                  sx={{
                    fontWeight: "bolder",
                    fontFamily: "Gralliec",
                    color: "#4cc9f0",
                    marginLeft: "10%",
                  }}
                  variant={"h4"}
                  gutterBottom
                >
                  Harry Potter
                </Typography>
                {/* <ListItemText primary="Harry Potter" /> */}
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Typography
                  sx={{
                    fontWeight: "bolder",
                    fontFamily: "Gralliec",
                    color: "red",
                    marginLeft: "0%",
                  }}
                  variant={"h4"}
                  gutterBottom
                >
                  Batman Trilogy
                </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <Typography
                  sx={{
                    fontWeight: "bolder",
                    fontFamily: "Gralliec",
                    color: "#4cc9f0",
                    marginLeft: "30%",
                  }}
                  variant={"h4"}
                  gutterBottom
                >
                  Marvel
                </Typography>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Typography
                  sx={{
                    fontWeight: "bolder",
                    fontFamily: "Gralliec",
                    color: "red",
                    marginLeft: "30%",
                  }}
                  variant={"h4"}
                  gutterBottom
                >
                  Disney
                </Typography>
              </ListItemButton>
            </ListItem>
          </List>
        </Dialog>
      </div>
    </Container>
  );
}

export default CategorySelect;
