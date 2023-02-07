import { Button, Grid, MenuItem, Stack, TextField, Box, Dialog, AccordionDetails, Accordion, AccordionSummary, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Formik, Form, Field } from 'formik';
import { RedButton } from "../Button/RedButton.style";
import { GreenButton } from "../Button/GreenButton";
import { useContext, useState } from "react";
import { Product } from "../State/Context/ProductContext";
import SearchMenuItems from "./SearchMenuItems";
import { LegendToggle } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { SearchActions } from "../State/Reducers/SearchReducer";
import {useNavigate} from 'react-router-dom'

const initialValues = {
        searchText:''
    }

export default function Searchbar(){
    const ProductArr = useContext(Product)
    const navigate =  useNavigate()
    const [open, setOpen]=useState(false)
    const [ProductListArr, setProductList] = useState(ProductArr.ProductList)
    const dispatch = useDispatch()
    const onSubmit = (values)=>{
        console.log('Search data:', values)
        dispatch(SearchActions.SearchLink(values.searchText))
        navigate('/List')
    }
    const handleClose = ()=>{
        setOpen(false);
    }
    
    const validate = (values) =>{
        if(values.searchText){
            
            const filteredArr = ProductArr.ProductList.filter(prod=> (prod.firstname+' '+prod.lastname).includes(values.searchText))
            setProductList(filteredArr)
            if(filteredArr.length == 0){
                setOpen(false);
            }
            setOpen(true);
        }
        else{
            setOpen(false);
        }
    }

    return <>
        <Grid container justifyContent='center' sx={{ flexGrow:1, height:'80px', backgroundColor: 'rgba(33,33,33,0.1)' }}>
            <Grid item alignItems='center' sx={{ display:'flex' }}>
                
                    <Formik 
                        initialValues={initialValues}
                        validate={validate}
                        onSubmit={onSubmit}
                    > 
                    {
                        formik=>{
                            return (
                                <Form>
                                <Stack direction='row' spacing={1}>
                                <Field name="searchText">
                                    {({
                                    field, // { name, value, onChange, onBlur }
                                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                    meta,
                                    }) => (
                                    <div>
                                        
                                        <TextField {...field} size="small" style={{ margin:0, padding:0, backgroundColor: 'white', width:'422px',  borderRadius:'2px'}} type="text" placeholder="What are you looking for..."  >
                                        
                                            
                                        </TextField>
                                       
                                        <Accordion style={{display:open?'block':'none', position: 'absolute' }} expanded={open} onClose={handleClose} >
                                        {/* <AccordionSummary hidden aria-controls="panel1d-content" id="panel1d-header">
                                        </AccordionSummary> */}
        
                                            <AccordionDetails>
                                                {
                                                    ProductListArr.length >0 ? <Box sx={{maxHeight:'400px', overflowY: 'scroll'}} >
                                                    {
                                                        ProductListArr.map(prod=>(
                                                            <SearchMenuItems item= {prod}></SearchMenuItems>
                                                        ))
                                                        
                                                    }
                                                </Box>:<Typography sx={{width:'422px'}} variant='h5' component='div'>No Data Found...</Typography>
                                                }
                                            
                                            </AccordionDetails>
                                        </Accordion>
                                    </div>
                                    )}
                                </Field>    
                                    <GreenButton  type="submit" wi='120px' hi='40px' fs='16px'  variant='contained' startIcon={<SearchIcon/>} >Search</GreenButton>
                                    <RedButton onClick={() =>{formik.setFieldValue('searchText', ''); dispatch(SearchActions.ClearSearchText())}} wi='120px' hi='40px' fs='16px' variant='contained'>Cancel</RedButton>
                                     
                                </Stack>
                                </Form>
                            )
                        }
                    }
                       
                    </Formik>
                
            </Grid>
        </Grid>
    </>
}