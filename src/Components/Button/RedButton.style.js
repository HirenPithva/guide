import styled from "@emotion/styled"
import LoadingButton from "@mui/lab/LoadingButton"
import { Button } from "@mui/material"

const buttonProperty = props=>(
    {
        height:props.hi? props.hi:'auto',
        color:'white',
        width: props.wi? props.wi:'auto',
        backgroundColor: '#f14d54',
        textTransform:'capitalize',
        fontSize: props.fs? props.fs:'15px'
    }
)

export const RedButton = styled(Button)(buttonProperty)

export const RedLoadingButton = styled(LoadingButton)(buttonProperty)
