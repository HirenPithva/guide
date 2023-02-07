import { Box, Button, Grid } from "@mui/material";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { RedButton } from "../Button/RedButton.style";
import Heading from "../Headings/Heading";
import LoginBox from "./LoginBox";
import LoginPage from "./LoginPage";
import {Navigate} from 'react-router-dom'
import {connect} from 'react-redux'


function Login(props){
    // const state = useSelector(state=>state.User)
    console.log('Login state', props.user)
    if(props.user?.email) {
        return <Navigate to='/Product'></Navigate>
    }
    return <>
        <Heading title='Login or Create an Account'></Heading>
        <Grid container spacing={5} sx={{paddingLeft: '120px', paddingRight:'120px', marginBottom: '60px'}}>
            <Grid item md={6}>
                <LoginBox subtitle='New Customer' disc='Registration is free and easy' >
                    
                </LoginBox>
                    <Box sx={{ minHeight:'250px', width:'100%', textAlign:'left'}}>
                        <ul style={{left:'-20px', position:'relative'}}>
                        <li>Faster checkout</li>
                        <li>Save multiple shipping address</li>
                        <li>View and track orders and more</li>
                        </ul>
                    </Box>
                    <Box sx={{textAlign:'left'}}>
                        <RedButton hi='45px' fs='18px' variant='contained' >
                            Create an Account
                        </RedButton>
                        
                    </Box>
            </Grid>
            <Grid item md={6}>
                <LoginBox subtitle='Registered Customers' disc='If you have an account with us, please log in.' >
                    
                </LoginBox>
                <LoginPage></LoginPage>
            </Grid>
        </Grid>
    </>
}

const mapStateToProps = (state)=>{
    return {
        user: state.User
    }
}

export default connect(mapStateToProps, null)(Login)