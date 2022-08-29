import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers/root';
import  cartReducer  from './reducers/cart';

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})