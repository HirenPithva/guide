import { Grid, TextField, Button, Stack, Typography } from "@mui/material";
import Heading from "../Headings/Heading";
import LoginBox from "./LoginBox";
import {Formik, Form, Field, FieldArray} from 'formik'
import { RedButton } from "../Button/RedButton.style";
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { AllUserActions } from "../State/Reducers/AllUsersReducer";
import {useNavigate} from 'react-router-dom'



export default function Register(){
    const dispatch = useDispatch();
    const userList = useSelector(state=> state.AllUser)
    const navigate = useNavigate()

    const initialValues={
    
        firstname:'',
        lastname: '',
        email:'',
        password:'',
        confirmPassword:''
}

const onSubmit=value=>{
    console.log('register data:',value)
    for(let i=0;i<userList.length;i++){
        if(userList[i].email == value.email && userList[i].password == value.password){
            
            navigate('/Login');
        }
    }
    const _user = {
        firstname:value.firstname,
        lastname: value.lastname,
        email: value.email,
        password: value.password
    }
    dispatch(AllUserActions.getUser(_user))
    
}

const validate=value=>{
    let error={}
    if(!value.firstname){
        error.firstname = 'Required'
    }
    if(!value.lastname){
        error.lastname = 'Required'
    }
    if(!value.email){
        error.email = 'Required'
    }
    if(!value.password){
        error.password = 'Required'
    }
    if(!value.confirmPassword){
        error.confirmPassword = 'Required'
    }
    if(value.password!==value.confirmPassword){
        error.confirmPassword = `password doesn't matched`
    }
    return error

}


    const state = useSelector(state=>state.User)
    if(state.email) {
        return <Navigate to='/Product'></Navigate>
    }
    return <>
        <Heading title='Login or Create an Account'></Heading>
        <Grid container sx={{paddingLeft: '120px', paddingRight:'120px', marginBottom: '60px'}}>
            <Grid item md={12}>
                <Formik 
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validate={validate}
                >
                    <Form>
                            <Grid container rowSpacing={3} columnSpacing={3} >
                                <Grid item md={12}>
                                    <LoginBox subtitle='Personal Information' disc='Please enter the following information to create your account.' ></LoginBox>
                                </Grid>
                                <Grid item md={6}>
                                    <Stack sx={{textAlign:'left'}}  direction='column' spacing={1}>
                                        <label>First Name*</label>
                                        <Field name='firstname'>
                                            {
                                                (props)=>{
                                                    const {field, form, meta} = props
                                                    return <>
                                                        <TextField size="small"  {...field} />
                                                        {
                                                            (meta.touched && form.errors.firstname)?<Typography color='error' variant='body2'>{form.errors.firstname}</Typography>:null
                                                        }
                                                    </>
                                                }
                                            }
                                        </Field>
                                    </Stack>
                                </Grid>
                                <Grid item md={6}>
                                    <Stack sx={{textAlign:'left'}}  direction='column' spacing={1}>
                                        <label>Last Name*</label>
                                        <Field name='lastname'>
                                            {
                                                (props)=>{
                                                    const {field, form, meta} = props
                                                    return <>
                                                        <TextField size="small" {...field} />
                                                        {
                                                            (meta.touched && form.errors.lastname)?<Typography color='error' variant='body2'>{form.errors.lastname}</Typography>:null
                                                        }
                                                    </>
                                                }
                                            }
                                        </Field>
                                    </Stack>
                                </Grid>
                                <Grid item md={12}>
                                    <Stack sx={{textAlign:'left'}}  direction='column' spacing={1}>
                                        <label>Email*</label>
                                        <Field name='email'>
                                            {
                                                (props)=>{
                                                    const {field, form, meta} = props
                                                    return <>
                                                        <TextField type='email' size="small" {...field} />
                                                        {
                                                            (meta.touched && form.errors.email)?<Typography color='error' variant='body2'>{form.errors.email}</Typography>:null
                                                        }
                                                    </>
                                                }
                                            }
                                        </Field>
                                    </Stack>
                                    
                                </Grid>
                                <Grid item md={12} sx={{marginTop:'40px'}}>
                                    <LoginBox  subtitle='Login Information' disc='' ></LoginBox>
                                </Grid>
                                <Grid item md={6}>
                                    <Stack sx={{textAlign:'left'}}  direction='column' spacing={1}>
                                        <label>Password*</label>
                                        <Field name='password'>
                                            {
                                                (props)=>{
                                                    const {field, form, meta} = props
                                                    return <>
                                                        <TextField type='password' size="small" {...field} />
                                                        {
                                                            (meta.touched && form.errors.password)?<Typography color='error' variant='body2'>{form.errors.password}</Typography>:null
                                                        }
                                                    </>
                                                }
                                            }
                                        </Field>
                                    </Stack>
                                    
                                </Grid>
                                <Grid item md={6}>
                                    <Stack sx={{textAlign:'left'}} direction='column' spacing={1}>
                                        <label>Confirm Password*</label>
                                        <Field name='confirmPassword'>
                                            {
                                                (props)=>{
                                                    const {field, form, meta} = props
                                                    return <>
                                                        <TextField type='password' size="small" {...field} />
                                                        {
                                                            (meta.touched && form.errors.confirmPassword)?<Typography color='error' variant='body2'>{form.errors.confirmPassword}</Typography>:null
                                                        }
                                                    </>
                                                }
                                            }
                                        </Field>
                                    </Stack>
                                    
                                </Grid>
                                <Grid item md={12} sx={{textAlign:'left', marginTop:'40px'}}>
                                    <RedButton type='submit' hi='45px' wi='136px' fs='18px' variant='contained'>
                                        Register
                                    </RedButton>
                                </Grid>
                            </Grid>
                    </Form>

                </Formik>
                

            </Grid>
        </Grid>
    </>
}