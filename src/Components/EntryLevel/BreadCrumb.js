import { Breadcrumbs, Grid } from '@mui/material'
import {useLocation, Link} from 'react-router-dom'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Login from './Login';
import Register from './Register';

export default function BreadCrumb(){
    const location = useLocation()

    
    return <>
    {console.log('path:',location.pathname)}
        <Grid container justifyContent='center' sx={{marginTop:'25px', marginBottom:'25px', paddingTop:'25px'}}>
            <Grid item>
                <Breadcrumbs separator={<NavigateNextIcon sx={{ fontSize:'small', color:'#414141' }} />} >
                    <Link style={{textDecoration:'none', color:'#414141', fontSize:'18px', fontWeight:'lighter'}} to='/'>Home</Link>
                    {location.pathname==='/Login'?<Link to='' style={{textDecoration:'none', color:'#f14d54', fontSize:'18px', fontWeight:'lighter'}}>Login</Link>:<Link to='' style={{textDecoration:'none', color:'#f14d54', fontSize:'18px', fontWeight:'lighter'}} >Create An Account</Link>}
                </Breadcrumbs>

            </Grid>
        </Grid>   
        {location.pathname==='/Login'?<Login/>:<Register/>} 
        
    </>
}