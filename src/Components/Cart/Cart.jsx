import { useContext } from 'react'
import  './Cart.css'
import { Shopping } from '../../assets/Context/ShoppContext'
const Cart = (props) => {
    const {id, img, title, price} = props.data
    const {cartItem, addToCart, removeFromCart} = useContext(Shopping)
    return (
        <div className='cart-container'>
        <div className='cart'>
            <img src={img} alt="" />
            <div className="cart-info">
                <h3>{title}</h3>
                <p className='price'>${price}</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, modi?.</p>
                <div className="count">
                    <button onClick={()=> removeFromCart(id)}>-</button>
                    <input value={cartItem[id]} readOnly/>
                    <button onClick={()=> addToCart(id)}>+</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Cart
