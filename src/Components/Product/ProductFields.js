import {Formik, Field, Form} from 'formik'
import {Grid, InputLabel, MenuItem, Stack, TextField, Typography, Link} from '@mui/material'
import FieldBox from './FieldBox'
import { RedButton } from '../Button/RedButton.style'
import { ColoredLabel } from '../Label.style'
import { Box } from '@mui/system'
import { useContext, useEffect, useState } from 'react'
import { GreenButton } from '../Button/GreenButton'
import { Product } from '../State/Context/ProductContext'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'



export default function ProductFields(){

    const [filename, setFilename] = useState('')
    const productContext = useContext(Product)
    const navigate = useNavigate()
    const para = useParams()
    
    useEffect(()=>{
        if(para.productID){
            console.log('file name:',productContext.ProductList[para.productID-1].filename)
            setFilename(productContext.ProductList[para.productID-1].filename)
        }
    },[])
    const initialValues={
        productID:'',
        firstname:'',
        lastname:'',
        category:'',
        discription:'',
        file:null,
        filename: '',
        Count:1
    }
    const validate= values=>{
        if(values.file){
            setFilename(values.filename)
        }
        let error={}
        if(!values.firstname){
            error.firstname='Required'
        }
        if(!values.lastname){
            error.lastname='Required'
        }
    
        return error
    }
    
    const onSubmit=values=>{
        console.log('ProductData:', values)
        values.filename = values.file.name;
        if(values.productID === ''){

            if(productContext.ProductList.length>0){
                values.productID =  productContext.ProductList[productContext.ProductList.length - 1].productID+1
            }
            else{
                values.productID =  productContext.ProductList.length + 1
            }
        }
        productContext.ProductDispatch({type:'Add_Product', payload:values})
        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
        var formdata = new FormData();
        formdata.append('firstname', values.firstname);
        formdata.append('lastname', values.lastname);
        formdata.append('category', values.category);
        formdata.append('discription', values.discription);
        formdata.append('file', values.file);
         axios.post('https://localhost:7135/api/Product',formdata,config);
        // await axios.post('https://localhost:7135/api/Product', formdata,config);
        navigate('/Product')
    }
    return <>
        <Formik
            initialValues={para?.productID ? productContext.ProductList[para.productID-1] : initialValues}
            onSubmit={onSubmit}
            validate={validate}
            render={
                ({ values, handleSubmit, setFieldValue }) =>{
                    return (
                        <Form>
                        
                <Grid container rowSpacing={6} columnSpacing={3}>
                <FieldBox  label='First Name*' ky='firstname'></FieldBox>
                <FieldBox  label='Last Name*' ky='lastname'></FieldBox>
                <FieldBox  isDropDown={true}  label='Shop by Categories' ky='category'>
                    <MenuItem value='electronic'>Electronics</MenuItem>
                    <MenuItem value='handMade'>Hand made</MenuItem>
                    <MenuItem value='toy'>Toy</MenuItem>
                </FieldBox>
                <FieldBox  label='Discription' ky='discription'></FieldBox>
                    <Grid item  md={6}>
                        <Stack direction='row' sx={{textAlign:'left'}} spacing={0}>
                            <label for="file">
                                <Typography sx={{ borderRadius:'0' }}  className='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-cju6kg-MuiButtonBase-root-MuiButton-root' component='span'>Upload</Typography>
                                {/* <Link className='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-cju6kg-MuiButtonBase-root-MuiButton-root' type='button'>Upload</Link> */}
                            </label>
                            <Field name='file'>
                                {
                                    ({field, form, meta})=>{
                                        return <>
                                            <input hidden id="file" name="file" type="file" onChange={(event) => {
                                                setFieldValue("file", event.currentTarget.files[0]);
                                            }} className="form-control" />
                                            <TextField sx={{ width:'100%' }} size='small' placeholder='No file chosen' value={filename}></TextField>
                                            {
                                                (meta.touched && form.errors.file)?<Typography color='error' variant='body2'>{form.errors.file}</Typography>:null
                                            }
                                        </>
                                    }
                                }
                            </Field>
                        </Stack>
                    </Grid>
                    <Grid md={6}>

                    </Grid>
                    <Grid item md={6} sx={{textAlign:'left'}}>
                        <Stack spacing={2} direction='row' alignItems='flex-start'>
                        <GreenButton type='submit' variant='contained' wi='100px' hi='40px'>Save</GreenButton>
                        <RedButton onClick={()=>navigate('/Product')} wi='100px' variant='contained' hi='40px'>Cancel</RedButton>
                        </Stack>
                        
                    </Grid>
                </Grid>
            </Form>
                    );
                }
            }
        >
            {/* {
                Formik=>(
                    
                )
            } */}
            
        </Formik>
    </>
}