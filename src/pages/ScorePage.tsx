import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

function ScorePage({
  user1,
  user2,
  score1,
  score2,
}: {
  user1: string;
  user2: string;
  score1: number;
  score2: number;
}) {
  const styles = {
    fontSize: "25px",
    padding: "5%",
    fontWeight: "bolder",
    fontFamily: "Gralliec",
    align: "center",
  };

  return (
    <div style={{ height: "100vh", marginTop: "4rem" }}>
      <Box sx={{ alignContent: "center" }}>
        <Typography
          sx={{ fontWeight: "bolder", fontFamily: "Gralliec", color: "white" }}
          variant={"h3"}
          gutterBottom
        >
          Total Scores
        </Typography>
        <Box sx={{ paddingLeft: "25%", paddingRight: "25%" }}>
          <TableContainer component={Paper} style={{ marginBottom: "5%" }}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell style={styles}>{user1}</TableCell>
                  <TableCell style={styles}>{user2}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={styles}>{score1}</TableCell>
                  <TableCell style={styles}>{score2}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
}

export default ScorePage;
