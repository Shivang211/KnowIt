import { Typography, Grid, Button, Box } from '@mui/material';
import Winner from '../assets/winner.png';
import { useSpring, animated } from 'react-spring';

export function FinalScore() {
  const imageAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.4)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { duration: 2500 },
  });

  function handlePlayAgain() {}

  function handleExit() {}

  return (
    <div style={{ height: '100vh'}}>
      <Typography sx={{ fontWeight: 'bolder', fontFamily: 'Gralliec', color: 'white' }} variant="h1" gutterBottom>
        KnowIt?
      </Typography>
      <Typography sx={{ fontWeight: 'bolder', fontFamily: 'Gralliec', color: 'white' }} variant="h2" gutterBottom>
        Results
      </Typography>

      <Box>
        <Grid container spacing={5} alignItems="center" justifyContent="center">
          <Grid item>
            <animated.img src={Winner} alt="Your Image" style={{ maxWidth: '30%', margin: 0, padding: 0, ...imageAnimation }} />
          </Grid>
          <Grid item>
            <Typography variant="h3" sx={{ fontWeight: 'bolder', fontFamily: 'Gralliec', color: 'white', textAlign: 'center' }} gutterBottom>
              Player 1
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3" sx={{ fontWeight: 'bolder', fontFamily: 'Gralliec', color: 'white', textAlign: 'center' }} gutterBottom>
              Score 1
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <br />
      <Grid container spacing={5} alignItems="center" justifyContent="center">
        <Grid item>
          <animated.img src={Winner} alt="Your Image" style={{ maxWidth: '30%', margin: 0, padding: 0, ...imageAnimation }} />
        </Grid>
        <Grid item>
          <Typography variant="h3" sx={{ fontWeight: 'bolder', fontFamily: 'Gralliec', color: 'white', textAlign: 'center' }} gutterBottom>
            Player 2
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3" sx={{ fontWeight: 'bolder', fontFamily: 'Gralliec', color: 'white', textAlign: 'center' }} gutterBottom>
            Score 2
          </Typography>
        </Grid>
      </Grid>

          <Button style={{ margin: '1%', width:'30%'}} variant="contained" onClick={handlePlayAgain}>
            Play Again
          </Button>
            <br/>
          <Button style={{ margin: '1%', width:'30%'}} variant="contained" onClick={handleExit}>
            Exit
          </Button>
    </div>
  );
}
