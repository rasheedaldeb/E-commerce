import React from 'react'
import './HomeHero.css'
const HomHero = ({title1, subtitle1,title2,subtitle2,
    title3, subtitle3, title4, subtitle4, title5,subtitle5}) => {
    return (
        <div className='home-hero'>
        <div className="main">
        <img src="/images/home-hero1.jpg" alt="" />
        <div className="main-info">
        <h1>{title1}</h1>
        <p>{subtitle1}</p>
        </div>
        </div>
        <div className="other">
            <div className="top">
                <div className="card">
                    <img src="/images/baner-right-image-01.jpg" alt="" />
                    <div className="info">
                    <h4>{title2}</h4>
                    <p>{subtitle2}</p>
                    </div>
                </div>
                <div className="card">
                    <img src="/images/baner-right-image-02.jpg" alt="" />
                    <div className="info">
                    <h4>{title3}</h4>
                    <p>{subtitle3}</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
            <div className="card">
                    <img src="/images/baner-right-image-03.jpg" alt="" />
                    <div className="info">
                    <h4>{title4}</h4>
                    <p>{subtitle4}</p>
                    </div>
                </div>
                <div className="card">
                    <img src="/images/baner-right-image-04.jpg" alt="" />
                    <div className="info">
                        <h4>{title5}</h4>
                        <p>{subtitle5}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default HomHero
