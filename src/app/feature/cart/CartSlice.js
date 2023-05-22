import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart:localStorage.getItem('cartitem')?JSON.parse(localStorage.getItem('cartitem')):[]
}
const addLocatstorage=(data)=>{
    localStorage.setItem('cartitem',JSON.stringify(data))
}
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addcart:(state,{payload})=>{
            const itemIndex=state.cart.findIndex(item=>item._id===payload._id)
            if(itemIndex>=0){  

            }else{
                const tempProduct={...payload,quantity:1}
                state.cart.push(tempProduct)
                addLocatstorage(state.cart)
            }
        },
        removecart:(state,{payload})=>{
            console.log(payload);
            const remainingItem=state.cart.filter(item=>item._id!==payload)
            console.log(remainingItem);
            state.cart=remainingItem
            addLocatstorage(state.cart)
        },
        addQuantiy:(state,{payload})=>{
            const itemIndex=state.cart.findIndex(item=>item._id===payload._id)
            console.log(itemIndex);
            if(payload.operation==='add'){
                state.cart[itemIndex].quantity+=1
            }else{
                if(state.cart[itemIndex].quantity){
                    state.cart[itemIndex].quantity-=1
                }
            }
            addLocatstorage(state.cart)
        },
        removecartall:(state)=>{
            state.cart=[]
            localStorage.removeItem('cartitem')
        }
    }
})

export const {addcart,removecart,addQuantiy,removecartall}=cartSlice.actions

export default cartSlice.reducer