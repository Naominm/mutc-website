
import { ReactNode } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaSquareInstagram } from "react-icons/fa6";
import contactImage from "../../assets/mutc-images/hero3.jpg"
import "./Form.css";


interface SocialMediaProps {
    socialTitle?: string;
    SocialIcon?: ReactNode;
}

function ContactSection() {
  return (
    <div className="contact-page">
      <ContactPageElements/>
    </div>
  );
}

function ContactPageElements(){
return(
  <div className="contact-page-container">
       <div className="form-title">
          <h2>We'd Love to Hear From you</h2>
        </div>
        <div className="form-subtitle">
          or just send an email to hello@ mutech club.com
        </div>
    <div className="top-contact-container">
 
      <div className="img-contact-wrapper">
      <img src={contactImage} alt="" />
      </div>

      <div className="form-container-element">
        <div className="form-title">
          <h2>Lets Get In touch</h2>
        </div>
       <form className="formElement">
       <div className="form-name-elements">
       <div className="email-element">
          <label htmlFor="email">Full Name</label>
          <input type="email" placeholder="Enter Your Email Address" />
        </div>
        
      
        </div>
        <div className="email-element">
          <label htmlFor="email">Email Address</label>
          <input type="email" placeholder="Enter Your Email Address" />
        </div>
      
        <div className="email-element">
          <label htmlFor="subject">Course</label>
          <input type="text" placeholder="Enter Your course" />
        </div>
        <div className="email-element">
          <label htmlFor="subject">Year of study</label>
          <input type="number" placeholder="Enter Your Email" />
        </div>
        <div className="track-element">
          <label htmlFor="track">Track</label>
         <select name="track" id="">
          <option value="Cybersecurity">Cyber Security</option>
          <option value="UI UX Design">UI UX Design</option>
          <option value="Web Development">Web Development</option>
          <option value="Mobile Apps Development">Mobile Apps Development</option>
          <option value="Cloud Engineering">Cloud Engineering</option>
          <option value="Power Platform">Power Platform</option>
         </select>
        </div>
        <button className="submit-btn">Submit Form</button>
       </form>
       <div className="social-media">
      <SocialMedia socialTitle="Follow Us"/>
      <SocialMedia SocialIcon={<FaFacebookF/>}/>
      <SocialMedia SocialIcon={<FaXTwitter/>}/>
      <SocialMedia SocialIcon={<FaSquareInstagram/>}/>
    </div>
      </div>
    </div>
    <div className="bottom-container">
    
    </div>
    
  </div>
)
}

 function SocialMedia({socialTitle, SocialIcon}: SocialMediaProps){
  return(
    <div className="social-media-elements">
      <div className="social-title">
        <h3>{socialTitle}</h3>
      </div>
      <div className="social-icon">
        <a href="/">{SocialIcon}</a>
      </div>
    </div>
  )
 }
export default ContactSection;
