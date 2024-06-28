import './ContactSection.css'
import Heading from '../SectionsHeading/Heading'
const ContactSection = () => {
    return (
        <div className='contact-section'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106456
        .35619884629!2d36.20049297904592!3d33.50759136667295!2m3!1f0!2f0!3f0!3m2!
        1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66ebd1e394f2!2s
        Damascus%2C%20Syria!5e0!3m2!1sen!2snl!4v1718895943975!5m2!1sen!2snl"
        style={{
        width:"600px",
        height:"450px",
        style:"border:0;",
        allowfullscreen:"",
        loading:"lazy"
        }}
        ></iframe>
        <div className="contact-form">
            <Heading title="Say Hello. Don't Be Shy!"
            subtitle="Details to details is what makes Hexashop different from the other themes."/>
            <div className="name-email">
                <input type="text" placeholder='Your Name' required/>
                <input type="email" placeholder='Your Email' required/>
            </div>
            <div className='message'>
            <input placeholder='Your Message' type="text" />
            </div>
            <button><i class="fa-solid fa-paper-plane"></i></button>
        </div>
        </div>
    )
}

export default ContactSection
