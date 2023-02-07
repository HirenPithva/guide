import { Box, Grid, MenuItem, Pagination, Stack, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import Heading from "../Headings/Heading";
import { Product } from "../State/Context/ProductContext";
import ProductBox from "./ProductBox";
import {useSelector} from 'react-redux'

export default function ProductListing(){
    const [sorting, setSorting] =useState('asc')
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const [sortedProductArr,setSortedProductArr] = useState([])
    const ProductWrapper = useContext(Product)
    const SearchVar = useSelector(state=> state.search)

   
    useEffect(()=>{
        const sortedListVar =[];
        console.log('text:', SearchVar.searchText)
        const titleList = SearchVar.searchText!=''? ProductWrapper.ProductList.map(prod=>{  if((prod.firstname+' '+ prod.lastname).includes(SearchVar.searchText)){return prod.firstname+' '+ prod.lastname}}):ProductWrapper.ProductList.map(prod=>{  return prod.firstname+' '+ prod.lastname})
       console.log(titleList)
        let sortedArray = {};
        if(sorting === 'asc'){
             sortedArray = titleList.sort();
        }
        if(sorting === 'desc'){
            sortedArray = titleList.sort();
            sortedArray = titleList.reverse();
        }
        const AllTheProducts = ProductWrapper.ProductList.map(prod=>{return prod});
        for (let i=0; i<sortedArray.length; i++) {
            AllTheProducts.map((prod, index)=>{ 
                if(prod.firstname+' '+ prod.lastname === sortedArray[i]){
                    sortedListVar.push(prod);
                    AllTheProducts.splice(index, 1);
                }
            })
        }
        setSortedProductArr(sortedListVar)
    },[sorting, SearchVar])
    return <>
        <Heading title='Product Listing'></Heading>
        <Grid container spacing={6} sx={{paddingLeft: '120px', paddingRight:'120px', marginBottom: '60px', marginTop:'30px'}}>
            <Grid item md={12}>
                <Stack sx={{flexGrow:1, alignItems:'center', fontSize:'18px', color: '#414141'}} direction='row' justifyContent='space-between'>
                    <Typography variant="subtitle1" component='p'>Product Name {ProductWrapper.ProductList.length}</Typography>
                    <Stack spacing={1} direction='row' alignItems='center'>
                        <Typography variant='subtitle1' component='p'>Sort By</Typography>
                        <TextField onChange={(e)=>setSorting(e.target.value)} value={sorting} sx={{width:'200px', height:'40px'}} size="small" select variant="outlined" >
                            <MenuItem  value='asc' >a - z</MenuItem>
                            <MenuItem  value='desc' >z - a</MenuItem>
                        </TextField>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item md={12}>
                <Grid container spacing={4}>
                    {
                        
                        sortedProductArr.slice((page-1)*8,page*8).map(prod =>(
                            
                            <ProductBox product={prod} source={`../../../public/assets/${prod.filename}`} description={prod.discription} category={prod.category} key={prod.productID} title={prod.firstname+' '+ prod.lastname}></ProductBox>
                        ))
                    }
                </Grid>
            </Grid>
            <Grid item md={12} display='flex' justifyContent='center' alignItems='center'>
                <Pagination className="red-pagination" count={Math.floor(ProductWrapper.ProductList.length/8)+1} page={page} onChange={handleChange} />

            </Grid>
        </Grid>
    </>
}