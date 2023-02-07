import { Grid, InputLabel, Stack, TextField } from "@mui/material";
import Heading from "../Headings/Heading";
import {Formik, Form, Field} from 'formik'
import ProductFields from "./ProductFields";



export default function AddProduct(){
    return<>
        <Heading title='Add Product'></Heading>
        <Grid container sx={{paddingLeft: '120px', paddingRight:'120px', marginBottom: '60px', marginTop:'60px'}}>
            <Grid item md={12}>
                <ProductFields></ProductFields>
            </Grid>
        </Grid>
    </>
}