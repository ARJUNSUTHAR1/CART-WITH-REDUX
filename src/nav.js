import React from 'react'
import { useSelector } from 'react-redux'
import LocalMallIcon from '@mui/icons-material/LocalMall';


const Nav = () => {
  const {amount} = useSelector((state) => state.cart)
  return (
    <div className='flex justify-between items-center p-8 bg-blue-300 w-4/5 h-10 m-auto'>
  <div><h1 className='font-bold' >Reduxtool</h1></div>
  <div className="cart relative">
    <div className='relative'><LocalMallIcon
     /></div>
    <div className="rounded-full bg-red-300 flex justify-center items-center absolute w-full bottom-3 left-3">{amount}</div>
  </div>
  </div>
  )
}

export default Nav;
