import {
  Box,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

function ScorePage() {
  const styles = {
    fontSize: "25px",
    padding: "5%",
    fontWeight: "bolder",
    fontFamily: "Gralliec",
    align: "center",
  };

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
            marginLeft: "44%",
            // marginRight: "auto",
            textAlign: "center",
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
          Scores
        </Typography>
        <Box sx={{ paddingLeft: "25%", paddingRight: "25%", paddingTop: "2%" }}>
          <TableContainer component={Paper} style={{ marginBottom: "5%" }}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell style={styles}>Player1</TableCell>
                  <TableCell style={styles}>Player 2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={styles}>Score 1</TableCell>
                  <TableCell style={styles}>Score 2</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Typography
          sx={{ fontWeight: "bolder", fontFamily: "Gralliec", color: "white" }}
          variant={"h3"}
          gutterBottom
        >
          Total Scores
        </Typography>
        <Box
          style={{ paddingLeft: "25%", paddingRight: "25%", margin: "2.5%" }}
        >
          <Typography
            sx={{
              fontWeight: "bolder",
              fontFamily: "Gralliec",
              color: "white",
              marginBottom: "14px",
            }}
            variant={"h4"}
            gutterBottom
          >
            Player1
          </Typography>
          <LinearProgress
            color="success"
            variant="determinate"
            value={90}
            style={{ height: "10px", marginBottom: "12px" }}
          />
          <Typography
            sx={{
              fontWeight: "bolder",
              fontFamily: "Gralliec",
              color: "white",
              marginBottom: "14px",
            }}
            variant={"h4"}
            gutterBottom
          >
            Player2
          </Typography>
          <LinearProgress
            color="primary"
            variant="determinate"
            value={90}
            style={{ height: "10px", marginBottom: "12px" }}
          />
        </Box>
      </Box>
    </div>
  );
}

export default ScorePage;
