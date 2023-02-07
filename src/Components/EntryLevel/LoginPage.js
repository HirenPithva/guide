import { TextField, Button, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import {Formik, Form, Field} from 'formik'
import {connect, useSelector} from 'react-redux'
import CompareCredintial from '../State/Actions/userAction'
import LoadingButton from '@mui/lab/LoadingButton';
import LoginIcon from '@mui/icons-material/Login';
import { RedLoadingButton } from '../Button/RedButton.style'
import {useNavigate} from 'react-router-dom'
import { Product } from '../State/Context/ProductContext'
import axios from 'axios'
import { useContext } from 'react'

function LoginPage(props){
    const navigate = useNavigate()
    const ProductContext = useContext(Product);
    const userList = useSelector(state=> state.AllUser)
    const initialValues = {
        email:'',
        password:''
    }
    const onSubmit = value=>{
        console.log('login data:', value)
        for(let i=0;i<userList.length;i++){
            if(userList[i].email == value.email && userList[i].password == value.password){
                props.CompCredintial(value)
                axios.get('https://localhost:7135/api/Product/GetAllProduct')
                .then(res => {
                    console.log('producctArr',res.data);
                    ProductContext.ProductDispatch({type: 'initializeProductArray', payload:res.data})
                });
                localStorage.setItem('user',JSON.stringify({email:value.email, password: value.password}))
                navigate('/Product');
            }
        }
        
    }
    const validate = value=>{
            let error = {}
        if(!value.email){
            error.email = "Required"
        }
        if(!value.password){
            error.password = "Required"
        }
        return error
    }
    return <>
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
        >
            <Form>
                <Stack direction='column' spacing={4}>
                <Stack direction='column' spacing={1} sx={{textAlign:'left'}}>
                    <label>Email Address*</label>
                    <Field name='email'>
                        {
                            (props)=>{
                                return <>
                                <TextField size='small' {...props.field} variant='outlined' ></TextField>
                                {
                                    (props.meta.touched && props.form.errors.email)?<Typography color='error' variant='body2'>{props.form.errors.email}</Typography>:null
                                }
                                
                                </>
                            }
                        }
                    </Field>
                </Stack>
                
                <Stack direction='column' spacing={1} sx={{textAlign:'left'}}>
                    <label>Password*</label>
                    <Field name='password'>
                        {
                            (props)=>{
                                return <>
                                <TextField size='small' {...props.field} variant='outlined' ></TextField>
                                {
                                    (props.meta.touched && props.form.errors.password)?<Typography color='error' variant='body2'>{props.form.errors.password}</Typography>:null
                                }
                                </>
                            }
                        }
                    </Field>
                </Stack>
                <Box sx={{textAlign:'left'}}>
                    <RedLoadingButton
                        hi='45px'
                        type='submit'
                        endIcon={<LoginIcon/>}
                        loading={props.userData.loading}
                        variant="contained"
                        loadingPosition="end"
                        fs='18px'
                        >
                        Login
                    </RedLoadingButton>
                    {/* <Button  type='submit' height='45px' variant='contained' sx={{color:'white', backgroundColor:'#f14d54', width:'auto', textTransform:'capitalize'}}>
                        Login
                    </Button> */}
                </Box>
                </Stack>
                
            </Form>
        </Formik>
    </>
}

const mapStateToProps=(state)=>{
    return {
        userData: state
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        CompCredintial: (data)=>{dispatch(CompareCredintial(data))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage)