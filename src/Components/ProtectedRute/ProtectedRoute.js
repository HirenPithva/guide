import {Navigate, Outlet} from 'react-router-dom'

export default function ProtectedRoute(){
    const auth = ()=>{
        const _user =  JSON.parse(localStorage.getItem('user'))
        // console.log('email:', email)
        // console.log('password:', password)
         console.log('temp:', _user)
        if(_user.email){
            return true
        }
        else{
            return false
        }
    }
    return auth()?<Outlet/>:<Navigate to='Login'></Navigate>
       
}