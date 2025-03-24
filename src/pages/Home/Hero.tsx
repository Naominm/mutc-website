import Image1 from "../../assets/mutc-images/hero1.jpg"
import Image2 from "../../assets/mutc-images/hero2.jpg"
import Image3 from "../../assets/mutc-images/hero3.jpg"
import "./Hero.css"

type HeroContentsProp={
    Image:string;
    Tagline:string;
    CallToAction:string;

}
function HeroSection() {
    return (  
        <div className="hero-section">
            <HeroContents Image={Image1} Tagline="Innovation for Prosperity" CallToAction="contactus"/>
        </div>
    );
}
function HeroContents({Image, Tagline}:HeroContentsProp){
    return(
        <div className="hero-contents">
           
            <div className="hero-image-wrapper">
            <div className="overlay"></div>
            <img src={Image} alt="" />
            </div>
      <div className="hero-text-content">
      <h1>{Tagline}</h1>
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