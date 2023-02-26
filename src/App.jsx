
import './App.css'
import Masthead from './assets/components/Masthead'
import Navbar from './assets/components/Navbar'
import ResCard from './assets/components/ResCard'
import { Outlet } from 'react-router-dom'
import { createContext, useState } from 'react'
import Header from './assets/components/Header'
import { Provider } from 'react-redux'
import store from './assets/store/store'


export const Context = createContext(null)


function App() {
const [name,setName] = useState()

const [resturants,setResturants] = useState([])
const [filterResturants,setFilterResturants] = useState()









  return (

    <Context.Provider value={{name,setName,resturants,setResturants,filterResturants,setFilterResturants}}>

      <Provider store={store}>


       <Navbar/>
  
      <Outlet/>
    


      </Provider>
 
    
    </Context.Provider>

  )
}

export default App
