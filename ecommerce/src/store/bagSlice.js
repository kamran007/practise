import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
    name: 'bag',
    initialState: JSON.parse(localStorage.getItem('bag')) || [],
    reducers: {
        addToBag: (state,action)=>{
            let newItem = [...state,action.payload];
            localStorage.setItem('bag',JSON.stringify(newItem));
           //state.push(action.payload);
           return newItem
        },
        removeFromBag: (state,action)=>{
            let newItem = state.filter(itemId=> itemId !== action.payload);
            localStorage.setItem('bag',JSON.stringify(newItem));
            return newItem
        }
    }
})
export const {addToBag,removeFromBag} = bagSlice.actions;
export default bagSlice;