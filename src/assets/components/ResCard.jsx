import { API_LINK } from "../../utlis/constant"
import { useState, useEffect,useContext } from "react"
import Card from "./Card"
import Search from "./Search"
import { Context } from "../../App"
import { Link } from "react-router-dom"
import CardLoader from "../components/CardLoader"
import { useDispatch,useSelector } from "react-redux"


const ResCard = () => {
    const dispatch = useDispatch();
    const data = useSelector(store=>store.resturants) 
    const filterSearch = useSelector(store=>store.resturants) 
    const [resturantsCount,setResturantsCount] = useState();




    


 


    const {name,searchClicked,setResturants,resturants,filterResturants,setFilterResturants} = useContext(Context)






    useEffect(() => {
        resCardsApi();

    }, [])

    const resCardsApi = async () => {

        const resCards = await fetch(API_LINK)

        const json = await resCards.json();

        setResturants(json?.data?.cards[2]?.data?.data?.cards)
        setFilterResturants(json?.data?.cards[2]?.data?.data?.cards)
        setResturantsCount(json?.data?.cards[2])
        




    }

    
    




    return resturants?.length==0 ?<>

    <div className="flex flex-wrap justify-center gap-10">

    

{Array.from(Array(14).keys()).map((e) =>  <CardLoader key={e}/> )}
</div>


    </>  :   (

        <>
        
            <h1 className="font-bold text-3xl ml-20 my-5">

                {resturantsCount?.data?.data?.totalOpenRestaurants} restaurants</h1>
            <div className="flex flex-wrap justify-center gap-10 ">





           {filterResturants?.map((e) => <Link to={`/resturants/${e.data.id}`} key={e.data.id} > <Card  {...e.data} /></Link>)}
           
            
            
            </div>

        </>
    )
}




export default ResCard