import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk(
    "fetchit/getUser",
    async (dispatch, getstate) => {
        return await fetch(`https://jsonplaceholder.typicode.com/users`).then(
            (res) => res.json()
        );
    }   
)

export const fetchSlice = createSlice({
    name:'fetchit',
    initialState:{value:['default','array']},
    extraReducers:{
        [getUser.pending]:(state,action) =>{
            state.value = ['pending'];
        },
        [getUser.fulfilled]:(state,action) =>{
            state.value = action.payload
        },
        [getUser.rejected]:(state,action) =>{
            state.value = ['rejected'];
        }
    }
}) 

export const {getuser} = fetchSlice.actions;

export default fetchSlice.reducer;