import { useEffect, useState } from "react";
import { API_LINK, IMG_LINK } from "../../utlis/constant"
import leftArrow from "../imges/left.svg"
import rightArrow from "../imges/right.svg"








const Masthead = () => {
    const [crousal, setCrousal] = useState([]);
    const [left, setLeft] = useState(0)

    const [display, setDisplay] = useState("block")


    const leftMove = () => {
        let max = left - 340;
     

        setLeft(max)

    }
    const rightMove = () => {
        let max = left + 340;
        

        setLeft(max)

    }



    useEffect(() => {
        apiCall();
    }, [])


    const apiCall = async () => {

        try {
            const data = await fetch(API_LINK)
            const json = await data?.json();


            setCrousal(json?.data?.cards[0]?.data?.data?.cards);

        }

        catch {
            (e) => console.log(e)
        }



    }




    return (

        <div className="bg-black">

            <div className="flex gap-10 p-10 justify-center relative mx-20 bg-black  overflow-hidden shadow-lg shadow-slate-400">

                {left < -1500 ? "" : <button className={`border text-3xl  absolute z-10 left-10 h-14 top-40 w-14 rounded-full text-white bg-slate-200 `} onClick={() => leftMove()}>
                <img src={leftArrow} alt="" />
                
                </button>}
            
                <div style={{ transform: `translateX(${left}px) `}} className={`flex justify-center   gap-14 `}>


                    {
                        Object.values(crousal).map((a, i) => {
                            return (
                                <div className="w-72" key={a?.data?.creativeId}>

                                    <img className="" src={IMG_LINK + a?.data?.creativeId} alt="" />

                                </div>

                            )
                        })
                    }
                </div>


                {left > 1500 ? "" : <button className="border text-3xl  absolute z-10 h-14 right-10 top-40 w-14 rounded-full text-white bg-slate-200 " onClick={() => rightMove()}>
                <img src={rightArrow} alt="" />
                </button>}

            </div>

        </div>
    )
}



export default Masthead