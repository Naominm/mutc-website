import { ReactNode } from 'react';
import AboutImage from "../../assets/mutc-images/hero2.jpg"

import "./About.css"

 type AboutSectionContentProps={
    Image:string;
    TextContent:String;
 }
 interface VisionMisionProps{
    FlatIcon:ReactNode;
    Text:string;
 }
function AboutSection() {
    return ( 
        <section className="about-section">
            <h1>Mut Tech Club Is The Top Tech Club In Muranga University</h1>
            <AboutSectionContent Image={AboutImage} TextContent=" TechClub stands as the premier global IT solution provider, delivering cutting-edge services and unmatched expertise to meet the diverse needs of industries worldwide." />
        </section>
     );
}

function AboutSectionContent({Image, TextContent}:AboutSectionContentProps){
    return(
        <div className='parent'>

     
        <div className="about-contents">
  <div className="image-wrapper">
    <img src={Image} alt="" />
  </div>
  <div className="text-container">
  <p>{TextContent}</p>
  <div className="sec-2">
  <VisionMision FlatIcon='' Text='members'/>
  <VisionMision FlatIcon='' Text='Tracks '/>
  </div>
  </div>
  
        </div>
        <div className="text-container-2">
    <VisionMision FlatIcon='' Text='our mission'/>
    <VisionMision FlatIcon='' Text='values'/>
    <VisionMision FlatIcon='' Text='objective '/>
  </div>
        </div>
    )
}

function VisionMision({FlatIcon,Text}:VisionMisionProps){
    return(
        <div className="parent-v">
            <div className="m-v-containers">
            <p>{FlatIcon}</p>
            <p>{Text}</p>
            </div>
       
        </div>
    )
}

export default AboutSection;