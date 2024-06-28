import React, { useContext } from 'react'
import Cart from '../../Components/Cart/Cart'
import Heading from '../../Components/SectionsHeading/Heading'
import { Shopping } from '../Context/ShoppContext'
import { products } from '../Data'
const ProductCart = () => {
    const {cartItem} = useContext(Shopping)
    return (
        <div style={{paddingTop: "100px", width: "100vh"}}>
            <Heading title="Your Cart Item" subtitle="Details to details is what makes Hexashop different from the other themes."/>
        {products.map((item)=>{
            if (cartItem[item.id] !== 0) {
                return <Cart data={item}/>
            }else if (cartItem[item.id] == 0) {
                return <></>
            }
        })}
        </div>
    )
}

export default ProductCart
