import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
     name:'cart',
     initialState:[],
     reducers:{
          //action
          //fun to add item to cart
          addToCart :(state,action)=>{
              state.push(action.payload) 
          },
          // fun to remove items from cart
          removeFromCart : (state,action)=>{
           return    state.filter(item =>item.id !=action.payload)
          },
       // fun to empty cart
        emptyCart:(state)=>{
          return  state =[]
        }
     }


})
export const {addToCart ,removeFromCart,emptyCart} = cartSlice.actions

export default cartSlice.reducer