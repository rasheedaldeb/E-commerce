import  './Hero.css'

const AboutHero = ({title}) => {
    return (
        <div className='hero' style={{backgroundImage: "url('/images/about-us-hero.jpg')"}}>
        <h1>{title}</h1>
        </div>
    )
}

export default AboutHero
