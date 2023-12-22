import React from "react";

import Nav from "./nav";
import { useEffect } from "react";
import { useDispatch ,useSelector} from 'react-redux'

import CardContainer from "./cardContainer";
import { calcTotal } from "./features/cart/cartSlice";

function App() {
  const {cartItems } = useSelector((state)=>state.cart); 
  const dispatch = useDispatch();
useEffect(()=>{
  dispatch(calcTotal())
},[cartItems])
  return (
    <div className="App">
     <Nav/>
     <CardContainer/>
    </div>
  );
}

export default App;
