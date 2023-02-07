import { Card, CardActions, CardContent, CardMedia, Stack, Grid, Typography, Button, IconButton } from "@mui/material";
import image from '../../assets/group-16.png'
import { RedButton } from "../Button/RedButton.style";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useDispatch} from 'react-redux'
import { CartAction } from "../State/Reducers/CartReducer";
import {current} from '@reduxjs/toolkit'

export default function CartBox(props){
    const dispatch = useDispatch()
    return <>
        <Grid md={7} item>
            <Card sx={{display:'flex', flexGrow:1, padding:'20px', borderRadius:'1px', border:'1px solid #E6E6E6', marginBottom: '15px'}} key={props.cartItem.productID} >
                <Stack direction='row' spacing={2} sx={{flexGrow:1}}>
                    <CardMedia
                    src={image}
                    component='img'
                    alt='Cart-img'
                    width='150px'
                    height='120px'
                    sx={{width:'150px'}}
                    />
                    <Stack direction='row' sx={{flexGrow:1, justifyContent:'space-between'}}>
                    <CardContent sx={{padding:'0px'}}>
                        <Stack direction='column' alignItems='start'  >
                            <Typography variant="subtitle1" component='p'>{props.cartItem.firstname+' '+props.cartItem.lastname}</Typography>
                            <Stack direction='row' spacing={1}>
                                <RedButton sx={{padding:'3px', minWidth:'20px', fontSize:'5px'}} variant='contained' onClick={()=>dispatch(CartAction.IncrementCount(props.cartItem.productID))} wi='20px' hi='20px'><AddIcon sx={{fontSize:'15px', fontWeight:'bolder'}} /></RedButton>
                                <IconButton sx={{padding:'0', border:'0.5px solid #E6E6E6', borderRadius:'0px', width:'20px', height:'20px'}} disabled> <Typography sx={{color:'black'}} component='span' variant='body2'>{props.cartItem.Count}</Typography></IconButton>
                                <RedButton sx={{padding:'3px', minWidth:'20px', fontSize:'5px'}} variant='contained' onClick={()=>dispatch(CartAction.DecrementCount(props.cartItem.productID))} wi='20px' hi='20px'><RemoveIcon sx={{fontSize:'15px', fontWeight:'bolder'}} /></RedButton>
                            </Stack>
                        </Stack>
                    </CardContent>
                    <CardActions sx={{padding:'0px', alignItems:'start'}}>
                        <Stack direction='column' sx={{textAlign:'right'}}>
                            <Typography variant='subtitle2' component='p'>500</Typography>
                            <Stack direction='row' spacing={1}>
                            <Typography variant='body2' component='p' sx={{textDecoration:'line-through'}}>1000</Typography>
                            <Typography variant='body2' component='p' sx={{color:'#f14d54'}}>50% Off</Typography>
                            </Stack>
                            <Button variant='text' sx={{color:'#f14d54'}} onClick={()=>dispatch(CartAction.RemoveFromCart(props.cartItem.productID))} >Remove</Button>
                        </Stack>
                    </CardActions>
                    </Stack>
                    
                </Stack>
            </Card>    
        </Grid>
    </>
}