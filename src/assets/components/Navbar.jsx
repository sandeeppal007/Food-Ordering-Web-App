
import { useState,useContext} from "react"
import Logo from "../../assets/Logo.svg"
import Search from "./Search";
import {Link} from "react-router-dom"
import { Context } from "../../App";
import Masthead from "./Masthead";
import { useSelector } from "react-redux";

const Navbar =({FD})=>{
  const {items} = useSelector(store=>store.cart)

  const {name} = useContext(Context)

    return (
        <div>
<div className="flex justify-around items-center p-5">
<Link to={"/"}>
<h1 className="text-3xl font-bold ">MyFood</h1>

</Link>



<li className="flex justify-center items-center gap-2">
    
  <Search/>
   

</li>


<ul className="flex gap-10">

 <Link to="/Offers">

 <li>Offers</li>
 </Link>
       

   <Link to="/help">
   <li>Help</li>
   </Link>
      

<Link to="cart" className="flex relative">
<li>Cart</li>
<h3 className="absolute bottom-4 left-7 border border-yellow-600 bg-red-700 w-5 h-5 rounded-full text-center text-xs text-white">{items.length}</h3>

</Link>

 <Link to="/Login">
 <li>Login</li>

 </Link>

</ul>
</div>
  
        </div>

     
    )
}



export default Navbar