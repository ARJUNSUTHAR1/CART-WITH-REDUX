import {createSlice} from '@reduxjs/toolkit'
import Collection from '../../collection';


    const initialState = {
        cartItems : Collection,
        amount : 0,
        total : 0,
        isLoading : true
    };
    
    const cartSlice = createSlice({
        
        initialState,
        name : 'cart',
        reducers : {clearCart : (state)=>{
            state.cartItems =[];
        },
        removeItem : (state ,action)=>{
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item)=>item.id !== itemId);
        },
        increase : (state ,{payload})=>{
            const cartItem = state.cartItems.find((item)=>item.id === payload.id);
            cartItem.amount = cartItem.amount + 1;
        },
        decrease : (state ,{payload})=>{
            const cartItem = state.cartItems.find((item)=>item.id === payload.id);
            cartItem.amount = cartItem.amount - 1;
        },
        calcTotal : (state)=>{
            let amount = 0;
            let total = 0;
            state.cartItems.forEach(item => {
                amount += item.amount;
                total += item.amount * item.price;
                state.amount = amount;
                state.total = total;
            });
        }
    },
    });
    
    // console.log(cartSlice);
  
export default cartSlice.reducer;
export const {clearCart,removeItem,increase,decrease,calcTotal} = cartSlice.actions;
