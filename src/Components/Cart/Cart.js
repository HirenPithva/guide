import { Grid, Typography, Stack } from "@mui/material";
import Heading from "../Headings/Heading";
import {useSelector} from 'react-redux'
import CartBox from "./CartItem";
import { current } from "@reduxjs/toolkit";
import { RedButton } from "../Button/RedButton.style";

export default function Cart(){
    const CartList = useSelector(state=>state.Cart)
    return <>
        <Heading title='Cart Page'></Heading>
        <Grid container alignItems='center' justifyContent='center' sx={{paddingLeft: '120px', paddingRight:'120px', marginBottom: '60px', marginTop:'60px'}}>
            <Grid item md={7}>
                <Stack sx={{flexGrow:1, alignItems:'center', fontSize:'18px', color: '#414141'}} direction='row' justifyContent='space-between'>
                    <Typography variant="subtitle1" component='p'>My Shopping Bag &#40;{CartList.length}&#41;</Typography>
                    <Typography variant="subtitle2" component='p'>Total Proce:3000</Typography>
                </Stack>
            </Grid>
            <Grid item md={12}>
                <Grid container alignItems='center' justifyContent='center'>
                {
                    CartList.map(item=>(
                        <CartBox cartItem={item}></CartBox>
                    ))
                }
                </Grid>
            </Grid>
            <Grid item sx={{display:'flex'}} md={7} justifyContent='start' alignItems='start'>
                <RedButton variant='contained'>Place order</RedButton>
            </Grid>
        </Grid>
    </>
}