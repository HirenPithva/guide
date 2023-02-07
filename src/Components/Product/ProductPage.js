import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Stack, Button, TablePagination } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GreenButton } from "../Button/GreenButton";
import { RedButton } from "../Button/RedButton.style";
import Heading from "../Headings/Heading";
import { Product } from "../State/Context/ProductContext";

export default function ProductPage(){
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
    const Products = useContext(Product)
    const navigate = useNavigate()
    return <>
        <Heading title='Product Page'></Heading>
        <Grid container spacing={5} sx={{paddingLeft: '120px', paddingRight:'120px', marginBottom: '60px'}}>
            <Grid item md={12}>
                <Stack direction='row' spacing={2} justifyContent='flex-end' sx={{flexGrow:1}} >
                <TextField sx={{width:'300px', height:'40px'}} size='small' placeholder="search" type='text' variant="outlined"></TextField>
                <RedButton onClick={()=>navigate('/Add')} hi='40px' variant="contained">Add Product</RedButton>
                </Stack>
                
            </Grid>
            <Grid item md={12}>
                <TableContainer container >
                    <Table sx={{width:'100%'}}>
                        <TableHead>
                            <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>TITLE</TableCell>
                            <TableCell>CATEGORY</TableCell>
                            <TableCell>PHOTO</TableCell>
                            <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                Products.ProductList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(prod=>(
                                    
                                    <TableRow key={prod.productID}>
                                        <TableCell>{prod.productID}</TableCell>
                                        <TableCell>{prod.firstname + ' ' + prod.lastname}</TableCell>
                                        <TableCell>{prod.category}</TableCell>
                                        <TableCell>{prod.filename}</TableCell>
                                        <TableCell>
                                            <Stack direction='row' justifyContent='flex-end' spacing={1}>
                                                <Button onClick={()=>navigate(`/Edit/${prod.productID}`)}  variant='outlined' sx={{ borderColor:'#80BF32', color:'#80BF32'}}>Edit</Button>
                                                <Button onClick={()=>Products.ProductDispatch({type:'Delete_Product', payload:prod.productID})} variant='outlined'sx={{ borderColor:'#f14d54', color:'#f14d54'}}>Remove</Button>
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>


            </Grid>
            <Grid item md={12}>
            <TablePagination
                rowsPerPageOptions={[2, 5, 10]}
                component="div"
                count={Products.ProductList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            </Grid>
        </Grid>
        
    </>
} 