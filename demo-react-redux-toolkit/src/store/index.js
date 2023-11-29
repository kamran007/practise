import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counterVal:0,
        visible: true
    },
    reducers: {
        increment: (state)=>{
            state.counterVal++;
        },
        decrement: (state)=>{
            state.counterVal--;
        },
        add: (state,action)=>{
            state.counterVal = state.counterVal + Number(action.payload.number);
        },
        switchVisible: (state,action)=>{
            console.log(action.payload.switch);
            state.visible = action.payload.switch;
        }
    }
})

const visibleSlice = createSlice({
    name: 'visible',
    initialState: {
        visibility: false
    },
    reducers:{
        switcher: (state)=>{
            state.visibility = !state.visibility
        }
    }
})
const Store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        visible: visibleSlice.reducer
    }
})
export const counterActions = counterSlice.actions;
export const visibleAction = visibleSlice.actions;
export default Store;
