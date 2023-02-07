import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const AllUser = createSlice({
    name: 'AllUser',
    initialState,
    reducers:{
        getUser: (state, action)=>{
        }
    }
})

const AllUserReducer = AllUser.reducer
const AllUserActions = AllUser.actions

export {AllUserActions, AllUserReducer}