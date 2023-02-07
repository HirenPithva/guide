import { Grid, Typography } from "@mui/material";

export default function Heading(props){
    return <>
        <Grid container justifyContent='center' sx={{ marginTop: '25px', marginBottom:'25px' }}>
            <Grid item >
                <Typography sx={{ fontWeight:'bold', fontSize:'32px', color:'#414141' }} variant="h3" component='div'>
                    {props.title}
                </Typography>
            </Grid>
        </Grid>
    </>
}