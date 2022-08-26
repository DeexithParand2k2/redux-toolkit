//user inside features folder => place where you create reducer
//you want to login with values you enter
//so you call the login reducer with your new login values
//which takes the initial state and updates those values through payload
import { createSlice } from "@reduxjs/toolkit";

//create slice used to create reducer => prev.state,action => updated state
export const userSlice = createSlice({
    name:'user',
    initialState:{value:{name:'dummy',age:0,email:'dummy.com'}},
    reducers:{
        login: (state,action) =>{
            state.value = action.payload
        }
    },
})

//export action which has to be dispatched
export const {login} = userSlice.actions;

//export the reducer
export default userSlice.reducer;