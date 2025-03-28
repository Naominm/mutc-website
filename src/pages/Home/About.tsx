
import AboutImage from "../../assets/mutc-images/hero2.jpg"
import FlatImage from "../../assets/mutc-images/mission.png"
import FlatImage2 from "../../assets/mutc-images/value.png"
import FlatImage3 from "../../assets/mutc-images/objective.png"

import { MdGroups2 } from "react-icons/md";
import { LiaAwardSolid } from "react-icons/lia";

import "./About.css"

 type AboutSectionContentProps={
    Image:string;
    TextContent:String;
 }
 interface VisionMisionProps{
    FlatIcon:string;
    Text:string;
    description:string;
 }
function AboutSection() {
    return ( 
        <section className="about-section">
            <h1>Mut Tech Club </h1>
            <AboutSectionContent Image={AboutImage} TextContent=" Murang'a University Tech Club (MUTC) is the premier technology club at Murang'a University, dedicated to advancing members' knowledge in programming and technology. " />
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
    <div className="member">
    <h1> <MdGroups2/> </h1>
    <span> 200+ Members</span>
   
    
    </div>
<div className="award">
<h1><LiaAwardSolid/></h1>
<span>5+ Awards</span>


</div>

 
  </div>
  <div className="btn-class">
  <button className="btn1">Join us</button>
  </div>
 
  </div>
  
        </div>
        <div className="text-container-2">
<VisionMision 
    FlatIcon={FlatImage} 
    Text='Our Mission' 
    description='To empower individuals and organizations by delivering innovative technology solutions that drive growth, efficiency, and positive impact.'
      />

<VisionMision 
    FlatIcon={FlatImage2} 
    Text='Our Vision' 
    description='To be a global leader in technology solutions, inspiring innovation and transforming industries for a sustainable future.'
  />

<VisionMision 
    FlatIcon={FlatImage3} 
    Text='Our Values' 
    description='We are committed to integrity, innovation, collaboration, and customer-centric solutions to deliver outstanding results.'
/>

  </div>
        </div>
    )
}

function VisionMision({FlatIcon,Text,description}:VisionMisionProps){
    return(
     <div className="parent-v">
     <div className="m-v-containers">
    <div className="flat-image-wrapper">
     <img src={FlatIcon} alt="" />
     </div>
    <p className="text-c">{Text}</p>
     <p className='text-desc-m-v'>{description}</p>
     </div>
       
        </div>
    )
}

export default AboutSection;