import { CredintialMatching, InvalidUser, ValidUser } from "./ActionName"

const credintialMatching = ()=>{
    return {
        type: CredintialMatching
    }
}

const validUser = (data)=>{
    return {
        type:ValidUser ,
        data:data
    }
}

const invalidUser = ()=>{
    return {
        type: InvalidUser
    }
}

export default function CompareCredintial(credintial){
    return (dispatch)=>{
        console.log('credintial: ',credintial)
        dispatch(credintialMatching())
        setTimeout(function(){
            dispatch(validUser(credintial))
        }, 3000)
    }
}
