import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { IMG_CARD_LINK } from '../../utlis/constant'
import {  removeItem } from '../store/cartSlice'
import { Link } from 'react-router-dom'

function Cart() {
  const dispatch = useDispatch()
  const data = useSelector(store=>store.cart.items)
  const dataRemove = useSelector(store=>store.cart.removeArr)



  const removeItemBtn = (id) =>{

// dispatch(removeItem(1))
dispatch(removeItem(id))



  }


 
  return (data.length==0) ? 
  
  <div className='w-96 p-7 gap-5 bg-yellow-400 rounded flex justify-center flex-col m-auto items-center mt-40 border'>
  <h1 className='text-3xl font-mono'>Opps!</h1>
  <h1 >No items found </h1> 
  <h2>add Item to your cart </h2>
 
  <Link to="/"> <span className='border border-yellow-400 text-white p-2 rounded bg-red-600 '>Click Here</span></Link>
   </div> : (
    <div>


    <div className='flex flex-col justify-center items-center space-y-5'>
 {
  data.map((e,i)=> {
return (
  <div key={i} className="flex justify-between border-red-200  w-96 m-auto  self-center items-center gap-5 border p-5">
   
    <img className='w-24' src={IMG_CARD_LINK+e.cloudinaryImageId} alt="" />
    <h1>{e.name}</h1>
    <button onClick={()=>removeItemBtn(e.id)} className="border w-20 bg-red-400 rounded">remove</button>

    </div>
)
   


  }
    
    
    )
 }
    </div>
 
    
    </div>
  )
}

export default Cart