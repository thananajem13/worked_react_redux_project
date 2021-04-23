import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../types"

const cart = (state=[],action)=>{
    let cartItem = null 
    if(action.type===REMOVE_FROM_CART){
         console.log('from reducer ', action)
        return cartItem
    }
    else if(action.type===ADD_TO_CART){
         cartItem = [...state,action.product]
        console.log("action.product: ",action.product)
         console.log("cartItem: ",cartItem)
         console.log("state: ",state)
         console.log('from reducer ',action)
        return cartItem
    }
    else if(action.type===CLEAR_CART){ 
        console.log('from reducer ',action)
        return cartItem
    }
    else{
        return state
    }
}
export default cart