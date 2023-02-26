import { IMG_CARD_LINK } from "../../utlis/constant"


const Card = ({ name, cloudinaryImageId, avgRating, costForTwo, deliveryTime
    , totalRatings, area, cuisines,aggregatedDiscountInfo

}) => {
    return (


        <div className="my-5">
            <div className="flex flex-col justify-between w-80 h-80 border  rounded-sm m-auto drop-shadow">




                <img  className="w-full" src={IMG_CARD_LINK + cloudinaryImageId} alt="" />

                <div className="p-1 flex flex-col ">


      
                <h1 className="font-bold text-base">{name}</h1>
                <p className="text-xs break-all  pl-0">{cuisines.join(" ,")}</p>

                <div className="flex justify-between items-center px-1">
                    <h3>{avgRating}  </h3>
                    <h3>{deliveryTime} Minute</h3>
                    <h3>₹{costForTwo / 100}</h3>
                </div>

                <hr />

                <div>
                    <p className="text-sm  border bg-green-300 p-1 rounded">{Object.values(aggregatedDiscountInfo.descriptionList[0].meta)}</p>
                </div>

                </div>



                {/* <h5>{area}</h5> */}

            </div>
        </div>

    )
}




export default Card