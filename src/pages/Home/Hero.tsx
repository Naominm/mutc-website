import { useState,useEffect } from "react"
import Image1 from "../../assets/mutc-images/hero1.jpg"
import Image2 from "../../assets/mutc-images/hero2.jpg"
import Image3 from "../../assets/mutc-images/hero3.jpg"
import "./Hero.css"


type HeroContentsProp={
    Image:string;
    Tagline:string;
    CallToAction:string;

}
const heroData: HeroContentsProp[] = [
    { Image: Image1, Tagline: "Innovation for Prosperity", CallToAction: "Contact Us" },
    { Image: Image2, Tagline: "Empowering the Future", CallToAction: "Discover More" },
    { Image: Image3, Tagline: "Shaping Tomorrow", CallToAction: "Join Us" }
];

function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
        }, 4000); 
    
        return () => clearInterval(interval); 
    }, []);
    
    return (  
        <div className="hero-section">
       <HeroContents currentIndex={currentIndex} />
        </div>
    );
}
function HeroContents({ currentIndex }: { currentIndex: number }){
    return(
        <div className="hero-contents">
           
            <div className="hero-image-wrapper">
            <div className="hero-overlay"></div>
          {
            heroData.map((item,index)=>(
                <img
                key={index}
                alt=""
                src={item.Image}
                className={index===currentIndex? 'active':''}
                />
                
            ))
          }
            </div>
      <div className="hero-text-content">
      <h1>{heroData[currentIndex].Tagline}</h1>
      <CallToAction/>
      </div>
      
        </div>
    )
}
function CallToAction(){
    return(
    <div className="buttons">
        <button className="btn1">Join us</button>
        <button className="btn2">Explore</button>
    </div>
    )
}

export default HeroSection;