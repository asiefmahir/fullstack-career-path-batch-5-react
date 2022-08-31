// import { ADD_TO_CART, CLEAR_CART, MODIFY_QUANTITY_OF_A_ITEM, REMOVE_ITEM_FROM_CART } from "../actions/actionTypes/cart";

// export const cartReducer = (state = [], action) => {
//     switch (action.type) {
//         case ADD_TO_CART : {
//             const product = state.find(item => item.id === action.payload.id);

//             return product ? state.map(item => {
//                 if (item.id === product.id) {
//                     item.quantity += 1
//                 }

//                 return item
//             }) : [...state, {...action.payload, quantity: 1}]
//         }

//         case REMOVE_ITEM_FROM_CART : {
//             return state.filter(item => item.id !== action.payload)
//         }

//         case MODIFY_QUANTITY_OF_A_ITEM : {
//             return state.map(item => {
//                 if (item.id === action.payload.id) {
//                     item.quantity = action.payload.quantity
//                 }

//                 return item
//             })
//         }

//         case CLEAR_CART : {
//             return []
//         }

//         default : {
//             return state
//         }
//     }
// }

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
    'cart/getCartProducts',
    async () => {
    
        const res =  await fetch(`http://localhost:3000/products`)
        const data = await res.json();
        return data
      
    }
)

// fetch('api')
//     .then(res => res.json())
//     .then(data => setData(data))

// const fetchData = async () => {
//     try {
//         const res =  await fetch('api');
//         const data = await res.json()
//     } catch(e) {
//         console.log(e.message)
//     }
 
// }
// import { act } from 'react-dom/test-utils';


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
        error: '',
        loading: true
    },
    reducers: {
        addToCart(state, action) {
            const product = state.find(item => item.id === action.payload.id);
            product ? product.quantity++ : state.push({...action.payload, quantity: 1})
        },
        removeFromCart(state, action) {
            const index = state.findIndex(item => item.id === action.payload)
            state.splice(index, 1)
        },

        modifyQuantityOfAItem(state, action) {
            const product = state.find(item => item.id === action.payload.id);
            product.quantity = action.payload.quantity

        },

        clearCart() {
            return []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            // state.push(...action.payload)
            // state.push(...action.payload)
            // return action.payload
            state.data = action.payload;
            state.loading = false;
            state.error = ''
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false
        })
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.loading = true;
        })
    }
})


export const {addToCart, removeFromCart, modifyQuantityOfAItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer

