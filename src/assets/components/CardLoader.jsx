import React from 'react'
import ResCard from './ResCard'
import Card from "./Card"

function CardLoader() {
  return (
    <div className="flex flex-wrap justify-center gap-10">

    <div className="my-5 ">
    <div className="flex flex-col justify-between w-60 h-72 border  rounded-sm m-auto drop-shadow">




        <img  className="w-full" src=""alt="" />

        <div className="p-1 flex flex-col ">



        <h1 className="font-bold text-base"></h1>
        <p className="text-xs break-all  pl-0"></p>

        <div className="flex justify-between items-center px-1">
            <h3> </h3>
            <h3></h3>
            <h3></h3>
        </div>

        <hr />

        <div>
         <p></p>
        </div>

        </div>



        {/* <h5>{area}</h5> */}

    </div>
</div>
    </div>

  )
}

export default CardLoader