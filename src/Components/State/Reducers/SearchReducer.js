import { createSlice } from "@reduxjs/toolkit";

const initialState={
    searchText:''
}

const Search = createSlice({
    name:'search',
    initialState,
    reducers:{
        SearchLink: (state,action)=>{
            state.searchText = action.payload
        },
        ClearSearchText: (state)=>{
            state.searchText = ''
        }
    }
})
const SearchReducer = Search.reducer
const SearchActions = Search.actions
export {SearchReducer, SearchActions}