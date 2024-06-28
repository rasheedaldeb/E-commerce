import React, { createContext, useState } from 'react'
import { products } from '../Data'
export const Shopping = createContext(null)

const getDefualtCart = ()=>{
    let cart = {}
    for (let i = 1; i < products.length +1; i++) {
        cart[i] = 0
    }
    return cart
}
export const ShoppContext = (props) => {
    const [cartItem , setcartItem] = useState(getDefualtCart())
    const addToCart = (itemId)=>{
        setcartItem((prev)=>({...prev, [itemId] : prev[itemId] +1}))
    }
    const removeFromCart = (itemId)=>{
        setcartItem((prev)=>({...prev, [itemId] : prev[itemId] -1}))
    }
    console.log(cartItem)
    const cotextValue = {cartItem , addToCart, removeFromCart}
    return<Shopping.Provider value={cotextValue}>{props.children}</Shopping.Provider>
}

export default ShoppContext
