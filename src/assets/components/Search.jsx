import { useState,useEffect,createContext,useContext } from "react"
import { API_LINK } from "../../utlis/constant";
import { Context } from "../../App";
import { useDispatch,useSelector } from "react-redux";




const filterData = (search,resturants)=>{

   return resturants?.filter(resturant => resturant.data.name.toLowerCase().includes(search.toLowerCase()))

}



const Search = () => {
    const dispatch = useDispatch();

const [search,SetSearch] = useState("");





const {setName,setSearchClicked,setResturants,resturants,setFilterResturants} = useContext(Context)






const SearchResturants=()=>{

    const searchFilter = filterData(search,resturants)
    setFilterResturants(searchFilter)

    // reduc
    dispatch(filterSearch(searchFilter))



    


}






    return (
        <>
     <div className="border  flex justify-center items-center">

  
              <input 
    className="border border-gray-400  pl-2 font-mono w-48 h-10" 
    type="text" 
    placeholder="Search Resturants"
    value={search} 
    onChange={(e)=>SetSearch(e.target.value) }


    />
    <button className="  bg-black text-white w-20 h-10" onClick={()=>SearchResturants()}>Search</button>

    </div>

   
        </>
    )
}




export default Search