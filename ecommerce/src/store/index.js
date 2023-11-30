import {configureStore} from '@reduxjs/toolkit'
import bagSlice from './bagSlice';
import fetchStatusSlice from './fetchStatusSlice';
import itemSlice from './itemsSlice';
const Store = configureStore({
    reducer:{
        items: itemSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
        bag: bagSlice.reducer
    }
})

export default Store;