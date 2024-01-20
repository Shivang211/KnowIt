import { Typography } from "@mui/material";

function App() {
  return (
    <>
      <Typography sx={{ fontWeight: "bolder", fontFamily: "Gralliec" }} variant={"h4"} gutterBottom>
        Do You <Typography sx={{ fontWeight: "bolder", fontFamily: "Gralliec" }} variant={"h1"} gutterBottom>KnowIt!</Typography>
      </Typography>
    </>
  );
}

export default App;
