import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        removeArr:["aakash","sandeep"]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        clearCart:(state)=>{
            state.items =[]
        },
        removeItem:(state,action)=>{
       const filterArr = state.items.filter(cartItems=>cartItems.id !== action.payload)
         
    state.items = filterArr
    
      
        }
    }
})


export const {addItem,clearCart,removeItem} =cartSlice.actions

export default cartSlice.reducer