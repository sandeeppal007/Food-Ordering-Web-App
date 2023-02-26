import React from 'react'
import { IMG_CARD_LINK } from '../../utlis/constant'
import { useDispatch,useSelector } from 'react-redux'
import { addItem, removeItem } from '../store/cartSlice';




function Items({cloudinaryImageId,name,price,id}) {
  


const dispatch = useDispatch();

const addItemBtn = (name) =>{


dispatch(addItem({name,id,cloudinaryImageId,price}))








}

  return (
    <div className='flex  '>

 <div className='flex  border border-t-0 border-x-0 border-gray-400 w-2/5 justify-around justify-items-start items-center mx-auto  mt-2 h-40'>

<div>
<h1 className='text-lg  font-medium '>{name}</h1>
<h3>₹{price/100}</h3>

</div>


 
      
      <div className='flex flex-col justify-center items-center gap-2'>
      
      <img className='w-32 ' src={(!cloudinaryImageId =="")?(IMG_CARD_LINK+cloudinaryImageId) : `http://www.ultimatesource.toys/wp-content/uploads/2013/11/dummy-image-square-1.jpg`} alt="" />
      <button onClick={()=>addItemBtn(name,id)} className="border w-20 bg-green-300 rounded">ADD</button>

      </div>


 </div>
      
    </div>
  )
}

export default Items