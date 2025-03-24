import HeroSection from "./Hero";
import AboutSection from "./About";
import Testimonial from "./Testimnonial";

function Home() {
    return (
        <div className="home">
            <HeroSection/>
            <AboutSection/>
            <Testimonial/>  
        </div>
     );
}

export default Home;