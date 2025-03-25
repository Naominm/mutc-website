
import { ReactNode } from "react";
import { MdEmail } from "react-icons/md";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { IoCall } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaSquareInstagram } from "react-icons/fa6";
import contactImage from "../../assets/mutc-images/hero3.jpg"
import "./Form.css";


interface SocialMediaProps {
    socialTitle?: string;
    SocialIcon?: ReactNode;
}
interface OfficeContactProps {
  contactIcon: ReactNode; 
  contactTitle: string; 
  contactText?: string;   
  contactDetail: string;   
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
        <div className="form-subtitle">
        </div>
       <form className="formElement">
       <div className="form-name-elements">
          <div className="form-block-elements">
           
         <div className="label-container">
         <label htmlFor="firstName">FirstName</label>
         </div>
    
          <input type="text" className="name-input-input" name="firstName" placeholder="Enter your first name" required />
         
          </div>
          <div className="form-block-elements">
                 <div className="label-container">
                 <label htmlFor="LastName">Last Name</label>
                 </div>
   
          <input type="text" className="name-input-input"  placeholder=" Enter Your LastName"/>
          </div>
        
      
        </div>
        <div className="email-element">
          <label htmlFor="email">Email Address</label>
          <input type="email" placeholder="Enter Your Email Address" />
        </div>
        <div className="email-element">
          <label htmlFor="subject">Subject</label>
          <input type="text" placeholder="Enter Your Subject" />
        </div>
        <div className="message-element">
          <label htmlFor="message">Message</label>
          <textarea name="Message" id="message">

          </textarea>
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
