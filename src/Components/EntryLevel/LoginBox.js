import { Box, Grid, Typography, Button, Stack } from "@mui/material";

export default function LoginBox(props){
    return <>
        <Grid container sx={{flexGrow:1}} >
            <Grid item md={12} >
                <Typography variant='h6' component="div" sx={{textAlign:'left', fontSize:'20px', color:'#414141', paddingTop:'20px', paddingBottom:'20px', margin:0, paddingLeft:0, borderBottom: '1px solid rgba(65,65,65,0.4)' }}>
                    {props.subtitle}
                </Typography>
            </Grid>
            {props.disc?<Grid item md={12}>
                <Stack direction='column' spacing={1} sx={{width:'100%', height:'100%'}}>
                    <Typography variant="body2" component='div' sx={{textAlign:'left', fontSize:'15px', color:'#838383', paddingTop:'20px', paddingBottom:'20px', margin:0, paddingLeft:0 }}>
                        {props.disc}
                    </Typography>
                    
                    
                </Stack>
            </Grid>:null}
        </Grid>
    </>
}