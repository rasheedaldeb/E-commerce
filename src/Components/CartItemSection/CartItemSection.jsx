import React from 'react'
import './CartItemSection.css'
import Heading from '../SectionsHeading/Heading'
import CartItem from '../CartItem/CartItem'
import { products } from '../../assets/Data'
const MenSection = () => {
    return (
        <>
        <Heading title="Latest Products"
        subtitle="Details to details is what makes Hexashop different from the other themes."/>
        <div className='men'>
        {products.map((item)=> <CartItem data={item}/>)}
        </div>
        </>
    )
}

export default MenSection
