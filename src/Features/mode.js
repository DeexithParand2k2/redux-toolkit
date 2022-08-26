import { createSlice } from "@reduxjs/toolkit";

export const modeSlice = createSlice({
    name:'mode',
    initialState:{color:'white'},
    reducers:{
        dark:(state,action)=>{
            state.color = action.payload
        }
    }
})

export const {dark} = modeSlice.actions;

export default modeSlice.reducer;