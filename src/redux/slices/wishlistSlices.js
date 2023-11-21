import { createSlice } from "@reduxjs/toolkit";



const wishlistSlices = createSlice({
    name:'wishlist',
    initialState:[],//to store morethan one value
    reducers:{
        //action
        //function to add item to the store
        addToWishlist :(state,action)=>{
            state.push(action.payload)
        },
        removeFromWishlist :(state,action)=>{
            //filter-return a new array  statsifyng the condition
          return  state.filter(item=>item.id!=action.payload)

        }
    }
        
    

})
export const {addToWishlist, removeFromWishlist}=wishlistSlices.actions
export default wishlistSlices.reducer