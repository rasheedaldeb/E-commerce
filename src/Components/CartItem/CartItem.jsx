import  './Fashion.css'
import {Shopping} from '../../assets/Context/ShoppContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
const CartItem = (props) => {
    const {id, img, title, price} = props.data
    const {addToCart} = useContext(Shopping)
    return (
                <div className='card'>
                    <img src={img} alt="" />
                    <div className="card-info">
                        <h3>{title}</h3>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <p>${price}</p>
                    <button onClick={()=> addToCart(id)}><Link to="/cart">Add To Cart</Link></button>
                </div>
    )
}

export default CartItem
