import './AboutUs.css'
import Heading from '../SectionsHeading/Heading'
const AboutUs = ({img}) => {
    return (
        <div className='about-us'>
            <img src={img} alt="" />
            <div className="about-info">
            <Heading title="About Us & Our Skills" 
        subtitle="Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod kon tempor incididunt ut labore."/>
        <div className="quote">
        <i class="fa-solid fa-quote-left"></i>
        <p className='first'>Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiuski smod kon tempor incididunt ut labore.</p>
        </div>
        <p className='second'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore et
        dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
        <div className="about-social">
            <div className="circle">
            <i className="fa-brands fa-facebook-f"/>
            </div>
            <div className="circle">
            <i className="fa-brands fa-x-twitter"/>
            </div>
            <div className="circle">
            <i className="fa-brands fa-linkedin-in"/>
            </div>
            <div className="circle">
            <i className="fa-brands fa-behance"/>
            </div>
        </div>
            </div>
        </div>
    )
}

export default AboutUs
