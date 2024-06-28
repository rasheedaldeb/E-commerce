import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-info">
            <div className="top">
                <div className="col-1">
                    <img src="/images/white-logo.png" alt="" />
                    <ul>
                        <li>16501 Collins Ave, Sunny Isles Beach, FL 33160, United States</li>
                        <li>hexashop@compony.com</li>
                        <li>010-020-0340</li>
                    </ul>
                </div>
                <div className="col-2">
                        <h3>Shoping and Categaries</h3>
                        <ul>
                            <li>Men Shopping</li>
                            <li>Women Shopping</li>
                            <li>Kids Shopping</li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>HomePage</li>
                            <li>About Us</li>
                            <li>Help</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h3>Help & Informations</h3>
                        <ul>
                            <li>Help</li>
                            <li>FAQ's</li>
                            <li>Shipping</li>
                            <li>Tracking ID</li>
                        </ul>
                    </div>
            </div>
            <div className="bottom">
                <p>Copyright © 2022 HexaShop Co., Ltd. All Rights Reserved. <br />
                Design: <span>TemplateMo</span></p>
                <div className="social">
                    <ul className='icons'>
                        <li><i class="fa-brands fa-facebook-f"></i></li>
                        <li><i class="fa-brands fa-x-twitter"></i></li>
                        <li><i class="fa-brands fa-linkedin-in"></i></li>
                        <li><i class="fa-brands fa-behance"></i></li>
                    </ul>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer

