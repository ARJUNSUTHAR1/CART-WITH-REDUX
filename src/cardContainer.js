import React from 'react'
 import {useDispatch, useSelector } from 'react-redux'
 import CartItem from './CartItem';
 import "./index.css"
import { clearCart,removeItem } from './features/cart/cartSlice';

const CardContainer = () => {
    const dispatch = useDispatch(); 
    const {cartItems , total ,amount} = useSelector((store)=>store.cart);
    if(amount<1){
  return (
    <div className='container'>
     <h1 className='font-large font-bold text-center'>YOUR BAG</h1>

     <h4 className='text-center'>is currently empty</h4>
     </div>
  )}
  return(
    <div className="container w-4/5 m-auto">
        <header>
     <h1 className='text-xl font-bold text-center'>YOUR BAG</h1>
     <div className="cartitems flex flex-col justify-center  h-full m-auto ">
        {cartItems.map((item)=>( 
            <CartItem key={item.id} {...item}/>
        ))}
     </div>
     </header>
     <hr />
     <footer>
     <div className="total flex justify-between font-bold text-xl w-full p-3">Total <span>{total} rs.</span></div>
     <button className=' w-full m-auto text-xl ' onClick={()=>{dispatch(clearCart())}}>clear cart</button>
     </footer>
    </div>

  )
}


export default CardContainer;
