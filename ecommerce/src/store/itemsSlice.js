import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers:{
        addInitialItems: (state,action)=>{
            return action.payload;
        }
    }
})

export const {addInitialItems} = itemSlice.actions;

export default itemSlice;