import { ValidUser, CredintialMatching, InvalidUser } from "../Actions/ActionName"

const userInitial = {
    loading:false,
    email:'',
    password: '',
    error: ''
}

const userReducer=(state = userInitial, action)=>{
    switch(action.type){
        case CredintialMatching:{
            return {
                email:'',
                password: '',
                error: '',
                loading:true
            }
        }
        case ValidUser:{
            return {
                loading:false,
                email:action.data.email,
                password: action.data.password,
                error: ''
            }
        }
        case InvalidUser:{
            return {
                loading:false,
                email:'',
                password: '',
                error: 'Invalid email and password'
            }
        }
        default:{
            return state
        }
    }
}

export default userReducer