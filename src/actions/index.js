import {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART} from './../types'

export const addToCart=(product)=>{
    const action ={
        type: ADD_TO_CART,
        product:product
    }
    console.log("add",action)
    return action
}

export const removeFromCart=(id, total_price)=>{
    const action ={
        type: REMOVE_FROM_CART,
        id:id,
        total_price:total_price
    }
    console.log("remove",action)
    return action
}

export const clearCart=()=>{
    const action ={
        type: CLEAR_CART, 
    }    
    console.log("clear",action)
    return action
}