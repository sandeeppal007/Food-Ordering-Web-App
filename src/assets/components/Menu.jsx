import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CARD_LINK } from '../../utlis/constant';
import MenuCard from './MenuCard';
import Items from "./Items"
import CardLoader from "./CardLoader"

function Menu() {
  const [menuData,setMenuData] = useState(null)
  const {id} = useParams();


  useEffect(()=>{
getData()
  },[])




  const getData=async()=>{
    const data = await fetch(`https://www.swiggy.com/dapi/menu/v4/full?lat=28.3670355&lng=79.4304381&menuId=${id}`)
    const json = await data?.json()
    setMenuData(json?.data)


  }




console.log(menuData?.menu?.items)


  return (!menuData) ? <CardLoader /> : (
<div>

    <div className='text-white'>

    <MenuCard menuData={menuData}/>
  
    
    </div>

 

    <div>


          {
            Object.values(menuData?.menu?.items).map((item) => <Items key={item.id} {...item} />)
          }
      
     
    </div>

</div>

  )
}

export default Menu