import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { RedButton } from "../Button/RedButton.style";
import banner from '../../assets/become-a-pro-banner.png'
import { CartAction } from "../State/Reducers/CartReducer";
import {useDispatch} from 'react-redux'
import { useEffect, useState, Link } from "react";
import {saveAs} from 'file-saver'

export default function ProductBox(props){
    const dispatch = useDispatch()
    
    const download = () => {
        // saveAs(props.product.filename);
        var binary_string = window.atob(props.product.file);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
        const url = window.URL.createObjectURL(new Blob([bytes.buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", props.product.filename); //or any other extension
          link.click();
      };
    return <>
        <Grid item md={3} >
            <Card>
                <CardMedia
                component='img'
                src={props.product.filename}
                height='180px'
                alt='Product-img'
                />
                <CardContent>
                    <Stack direction='column' alignItems='start'>
                    <Typography variant="h5" component='div'>{props.title}</Typography>
                    <Typography sx={{paddingBottom:'15px', fontSize:'15px', fontWeight:'bold', color:'#838383'}} variant="body2" component='div'>{props.category}</Typography>
                    <Typography variant="subtitle2" sx={{textAlign: 'left', wordBreak:'break-all'}} component='p'>{props.description}</Typography>
                    <Stack direction='row' spacing={1} sx={{paddingTop:'15px',color:'#838383'}}>
                        <Typography variant="subtitle1" sx={{ paddingBottom:'0px', marginBottom:'0px',  fontSize:'18px',textAlign: 'left'}} component='span'>MRP </Typography>
                        <Typography sx={{paddingBottom:'0px', marginBottom:'0px',fontSize:'18px',textDecoration:'line-through'}} component='span'>&#8377;1000 </Typography>
                        <Typography sx={{paddingBottom:'0px', marginBottom:'0px',fontSize:'18px',color:'#80BF32', fontWeight:'bold'}} component='span'>20.00% OFF</Typography>  

                    </Stack>

                    </Stack>
                    <Typography component='p' sx={{ textAlign:'left',fontSize:'18px', fontWeight:'bold', padding:'0px', margin:'0px'}} variant="subtitle1">&#8377; 800</Typography>
                </CardContent>
                <CardActions>
                    <button onClick={download}>Download</button>
                <RedButton onClick={()=>dispatch(CartAction.AddToCart(props.product)) } wi='100%' hi='40px' variant='contained' >ADD TO CART</RedButton>
                </CardActions>
            </Card>
        </Grid>
    </>
}