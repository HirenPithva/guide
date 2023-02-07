import { AppBar, Toolbar, IconButton, Typography, Stack, Grid, Button, ButtonGroup } from '@mui/material'
import LogoDevIcon from '@mui/icons-material/LogoDev';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'


export default function Navbar(){
    const nevigate = useNavigate()
    const CartList = useSelector(state => state.Cart)
    const buttonStyle = () =>{
        return {
            height: '15px', color:'#f14d54', textTransform:'capitalize', fontSize:'14px'
        }
    }
    return <>
        <AppBar m={0} position='static' sx={{height:'92px', backgroundColor: '#fff', boxShadow: 'none'}}>
            
                <Grid container sx={{paddingLeft: '80px', paddingRight:'80px'}}>
                    <Grid item md={12}>
                    <Toolbar>
                        <IconButton color='warning' >
                            <LogoDevIcon sx={{ fontSize:'65px' }} />
                        </IconButton>
                        <Stack spacing={0} my={1} direction='column' sx={{textAlign:'left', flexGrow:1}}>
                            <Typography className='logo-text' sx={{  color:'black' }} variant='h5' m={0}>
                                TatvaSoft
                            </Typography>
                            <Typography className='logo-text' sx={{  color:'black', fontSize: '10px' }} variant='subtitle1' m={0}>
                                Sculpting Thoughts...
                            </Typography>
                        </Stack>
                        <Stack direction='row'>
                        <ButtonGroup variant='text' sx={{alignItems:'center'}}>
                            <Button onClick={()=>nevigate('Login')} id='login' variant='text' style={buttonStyle()} >Login</Button>
                            <Button onClick={()=>nevigate('Register')} variant='text' style={buttonStyle()} >Register</Button>
                            
                        </ButtonGroup>
                        
                        <Button onClick={()=>nevigate('/Cart')} style={{
                            color:'rgb(65,65,65)', 
                            borderColor:'rgba(65,65,65,0.2)',
                            height:'35.88px',
                            textTransform:'capitalize',
                            fontSize:'14px'
                        }} variant='outlined' startIcon={<ShoppingCartIcon sx={{color:'#f14d54'}}/>} ><Typography variant='subtitle1' component='p'><Typography variant='span' sx={{color:'#f14d54'}}>{CartList.length} </Typography>{' '} Cart</Typography> </Button>
                        </Stack>
                        </Toolbar>
                    </Grid>
                    
                </Grid>
                
                
            
        </AppBar>
    </>
}