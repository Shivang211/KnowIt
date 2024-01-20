import {Box,Typography,Button, TextField} from "@mui/material";
import { useState } from "react";

export function QuestionPage(){

    const [answer,setAnswer] = useState("")

    function handleInputChange(event: { target: { value: any; }; }){
        const value = event.target.value
        setAnswer(value)
    }

    function handleSubmit(){

    }
    return (
        <div style={{height:'100vh'}}>
            <Box sx={{alignContent:'center'}} >
        <Typography sx={{ fontWeight: "bolder", fontFamily: "Gralliec",color:'white' }} variant={"h1"} gutterBottom>
        KnowIt
        </Typography>
        <Typography sx={{ fontWeight: "bolder", fontFamily: "Gralliec",color:'white' }} variant={"h3"} gutterBottom>
        Question 
        </Typography>
        <Typography sx={{ fontWeight: "bolder", fontFamily: "Inter",color:'white',width:'50%',margin:'auto'}} variant={"h4"} gutterBottom>
        The term for a situation where a bowler dismisses three batsmen with three consecutive deliveries but not in the same over
        </Typography>
        </Box>
        <TextField id="filled-basic" label="Answer" value={answer} onChange={handleInputChange} variant="filled" style={{backgroundColor:'white',width:'50%',marginTop:'5%',border:'rounded'}}/>
        <br></br>
        <Button style={{ margin: "3%",width:'10%'}}   variant="contained" onClick={handleSubmit} disabled={answer == ""}>
          Submit
        </Button>
        </div>
    )
}