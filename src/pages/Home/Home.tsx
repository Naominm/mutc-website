import HeroSection from "./Hero";
import AboutSection from "./About";
import Testimonial from "./Testimnonial";
import FooterElement from "../../components/Footer/Footer";

function Home() {
    return (
        <div className="home">
            <HeroSection/>
            <AboutSection/>
            <Testimonial/>  
            <FooterElement/>
        </div>
     );
}

export default Home;