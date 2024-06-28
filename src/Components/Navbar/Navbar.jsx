import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = ({logo,menu}) => {
    const [showHide, setshowHide] = useState(false)
    const change = ()=>{
        if (showHide ==false) {
            setshowHide(true)
        }else{
            setshowHide(false)
        }
    }
    return (
        <>
        <nav>
            <img className='logo' src={logo} alt="" />
            <ul className='list'>
                {menu.map((item, index)=>{
                    return(
                        <li key={index}><Link to={item.path}>{item.link}</Link></li>
                    )
                })}
            </ul>
            <button onClick={()=>{
                change()
            }}><i className={showHide ? "fa-solid fa-xmark menu" :"fa-solid fa-bars menu" }></i></button>
        </nav>
        <div className="mobile" style={{ transform: showHide ? "translateY(0)" : "translateY(-319px)"}}>
            <ul className="mobile-list">
                {menu.map((ele, i)=>{
                    return(
                        <li key={i}><Link to={ele.path}>{ele.link}</Link></li>
                    )
                })}
            </ul>
        </div>
        </>
    )
}

export default Navbar
