import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import App from './App'
import Offer from "../src/assets/components/Offer"
import './index.css'
import ResCard from './assets/components/ResCard'
import Help from "./assets/components/Help"
import Login from "./assets/components/Login"
import Cart from "./assets/components/Cart"
import Menu from './assets/components/Menu'
import Masthead from './assets/components/Masthead'



const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element: <> <Masthead/> <ResCard/></>
            },
            {
                path:"/offers",
                element:<Offer/>
            },
            {
                path:"/help",
                element:<Help/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/resturants/:id",
                element:<Menu/>
            },
        ]
    },
  
])




ReactDOM.createRoot(document.getElementById('root')).render(

 <RouterProvider router ={router}/>

)
