import { Typography, MenuItem, Stack, Button } from "@mui/material";
import { CartAction } from "../State/Reducers/CartReducer";
import {useDispatch} from 'react-redux'
export default function SearchMenuItems(props){
    const dispatch = useDispatch()
    return<>
        <MenuItem >
            <Stack sx={{width:'422px'}} direction="column">
                <Stack direction='row' justifyContent='space-between' >
                    <Typography variant="h6" component='div'>{props.item.firstname+' '+props.item.lastname}</Typography>
                    <Typography variant='subtitle1' component='div'>1000</Typography>
                </Stack>
                <Stack direction='row' justifyContent='space-between'>
                    <Typography variant='body1'>{props.item.category}</Typography>
                    <Button  onClick={()=>dispatch(CartAction.AddToCart(props.item))} variant='text' sx={{color:'#80bf32', padding:'0'}}>Add to Cart</Button>
                </Stack>
                <Typography variant='body2' sx={{overflow:'hidden'}}>
                    {props.item.discription}
                </Typography>
            </Stack>
        </MenuItem>
    </>
}