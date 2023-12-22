import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDispatch} from 'react-redux'
import { removeItem ,increase,decrease} from './features/cart/cartSlice';


const CartItem = ({id ,image ,price ,title ,amount}) => {
const dispatch= useDispatch();
  return (
    <div className='flex justify-between p-6'>
        <div className='imageortext flex '>
        <div className='w-24 p-3'>{image}</div>
      <div className='p-3'>
        <h4>{title}</h4>
        <h4>{price}</h4>
        <button onClick={()=>{
            dispatch(removeItem(id));
        }}>remove</button>
      </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <button onClick={()=>{
                    dispatch(increase({id}))}}><KeyboardArrowUpIcon/></button>
        <p>{amount}</p>
        <button onClick={()=>{
            if(amount===1){dispatch(removeItem(id))}
            else{
                        dispatch(decrease({id}))}} }><KeyboardArrowDownIcon/></button>
      </div>
    
    </div>
    
    
  )
}

export default CartItem
