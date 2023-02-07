import {Formik, Field, Form} from 'formik'
import {Grid, InputLabel, Stack, TextField, Typography} from '@mui/material'
import { ColoredLabel } from '../Label.style'

export default function FieldBox(props){
    return <>
        <Grid item  md={6}>
            <Stack direction='column' sx={{textAlign:'left'}} spacing={1}>
                <ColoredLabel htmlFor={  `product${props.ky}`}>
                {props.label}
                </ColoredLabel>
                <Field name={props.ky}>
                    {
                        ({field, form, meta})=>{
                            return <>
                                <TextField size="small" {...field} select={props.isDropDown} type='text' id={ `product${props.ky}`} >
                                    {
                                        props.isDropDown? props.children:null
                                    }
                                </TextField>
                                {
                                    
                                    (meta.touched && form.errors[props.key])?<Typography color='error' variant='body2'>{form.errors[props.key]}</Typography>:null
                                }
                            </>
                        }
                    }
                </Field>
            </Stack>
        </Grid>
    </>
}