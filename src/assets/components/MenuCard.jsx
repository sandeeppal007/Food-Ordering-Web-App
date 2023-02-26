import React from 'react'
import { IMG_CARD_LINK } from '../../utlis/constant'

function MenuCard({menuData}) {


  
  return (
    <div>
    
    <div className='bg-black flex justify-center gap-10 items-center h-96 '>

<div className=''>
<img className='w-80  ' src={IMG_CARD_LINK+menuData?.cloudinaryImageId} alt="" />
</div>


<div className='shadow-lg  rounded p-1'>



<div className='flex flex-col space-y-5'>
  <h2 className='text-3xl  break-words font-semibold'>{menuData?.name}</h2>
<h3>{menuData?.cuisines}</h3>
  <h2 className='capitalize'>{menuData?.areaSlug},{menuData?.area}</h2>

</div>


<div className='flex gap-10 my-2'>
<div>
  <h2>{menuData?.avgRating
}</h2>
  <h3>{menuData?.totalRatingsString}</h3>

</div>

<div>
<h2>27mins DeliveryTIme</h2>
  
</div>


<div className='flex gap-2 flex-col'>
  <h2>₹{menuData?.costForTwo
/100}</h2>
  <h2>Cost Of Two</h2>
</div>

</div>


</div>
</div>




    
    </div>
  )
}

export default MenuCard