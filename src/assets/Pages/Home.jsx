import React from 'react'
import HomHero from '../../Components/HomeHero/HomHero'
import CartItemSection from '../../Components/CartItemSection/CartItemSection'
const Home = () => {
    return (
        <div>
        <HomHero title1="We Are Hexashop" subtitle1="Online Shopping"
        title2="Women" subtitle2="Best Clothes For Wemen"
        title3="Men" subtitle3="Best Clothes For Men"
        title4="Kids" subtitle4="Best Clothes For Kids"
        title5="Accessories" subtitle5="Best Brand Accessories"
        />
        <CartItemSection/>
        </div>
    )
}

export default Home
