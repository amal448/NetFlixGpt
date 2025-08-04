import React from 'react'
import { createSlice } from "@reduxjs/toolkit";

const configureLanSlice = createSlice({
    name:"config",
    initialState:{
        lang:"en"
    },
    reducers:{
        changeLanguage:(state,action)=>{
            console.log("csjdsidsnds",state);
            
            state.lang=action.payload
        }
    }
})

export const {changeLanguage} =configureLanSlice.actions
export default configureLanSlice.reducer

