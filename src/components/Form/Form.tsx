import { MdEmail } from "react-icons/md";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { IoCall } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaSquareInstagram } from "react-icons/fa6";
import "./Form.css";

import { ReactNode } from "react";

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

function ContactPage() {
  return (
    <div className="contact-page">
      <ContactPageElements/>
    </div>
  );
}

function ContactPageElements(){
return(
  <div className="contact-page-container">
    <div className="top-contact-container">
     <MapContainer/>
      <div className="form-container-element">
        <div className="form-title">
          <h2>Lets Get In touch</h2>
        </div>
        <div className="form-subtitle">
          or just send an email to hello@zaphtours.com
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
      </div>
    </div>
    <div className="bottom-container">
    <div className="form-title">
          <h2>We'd Love to Hear From you</h2>
        </div>
        <div className="form-subtitle">
          or just send an email to hello@zaphtours.com
        </div>
        <div className="bottom-contact-elements">
<OfficeContact contactIcon={<MdEmail/>} contactTitle="Email Support" contactText="Our Team Respond Instantly" contactDetail="hello@zaphtours.com"/>
<OfficeContact contactIcon={<PiBuildingOfficeBold/>} contactTitle="Visit Our Office" contactText="Visit our Location" contactDetail="22Land Moi Ave, Nairobi"/>
<OfficeContact contactIcon={<IoCall/>} contactTitle="Call Us Directly" contactText="Mon-sat 8am-5pm" contactDetail="+254 71 2345 678"/>
        </div>
    </div>
    <div className="social-media">
      <SocialMedia socialTitle="Follow Us"/>
      <SocialMedia SocialIcon={<FaFacebookF/>}/>
      <SocialMedia SocialIcon={<FaXTwitter/>}/>
      <SocialMedia SocialIcon={<FaSquareInstagram/>}/>
    </div>
  </div>
)
}
function MapContainer(){
  return(
    <div className="map-container-element">
    <div className="map-container">
    </div>
  </div>
  )
}
function OfficeContact({contactIcon,contactTitle, contactText,contactDetail}:OfficeContactProps){
  return(
    <div className="office-contact">
<div className="contact-icon">
  {contactIcon}
</div>
<div className="contact-title">
  <h3>{contactTitle}</h3>
</div>
<div className="contact-text">
  <p>{contactText}</p>
</div>
<div className="contact-detail">
  <a href="/">{contactDetail}</a>
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
export default ContactPage;
