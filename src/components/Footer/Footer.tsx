import { ReactNode } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall, IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

import Icon from "../Icon/Icon";

import "./Footer.css";

interface FooterContactsProps{
  FooterContactIcon:ReactNode;
  Text:String;
}
function FooterElement() {
  return (
    <div className="footer-container">
      <FooterContent />
    </div>
  );
}
function FooterContent() {
  return (
    <div className="footer-content-container">
      <div className="footerHeader">
        <div className="header-col">
          <Icon />
          <p className="column-text-sec">
            muttech club text sec
          </p>
        </div>
      </div>
      <div className="footerHeader">
        <div className="header-col">
          <h3>Events and News</h3>
      
            <ul>
              <li>
                <a href="./">Mutech Hackathon</a>
              </li>
              <li>
                <a href="./">Hacker Night</a>
              </li>
              <li>
                <a href="./">Tech Talk</a>
              </li>
              <li>
                <a href="./">Weekly events</a>
              </li>
              <li>
                <a href="./">Metting</a>
              </li>
            </ul>
          
        </div>
      </div>
      <div className="footerHeader">
        <div className="header-col">
          <h3>Quick Links</h3>
          
          <ul>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <a href="/">Leadership</a> 
    
  </li>
  <li>
    <Link to="/">Tracks</Link>
  </li>
  <li>
    <Link to="/">Events</Link>
  </li>
  
</ul>

        
        </div>
      </div>
      <div className="footerHeader">
        <div className="header-col">
          <h3>Reach us</h3>
          <FooterContacts
            FooterContactIcon={<FaLocationDot />}
            Text=" Muranga University f04  Twin-lab Building"
          />
          <FooterContacts FooterContactIcon={<IoCall />} Text="Call Us" />
          <FooterContacts FooterContactIcon={<IoMail />} Text="Email Us" />
        </div>
      </div>
    </div>
  );
}
function FooterContacts({ FooterContactIcon, Text }:FooterContactsProps) {
  return (
    <div className="footer-contacts-container">
      <div className="contacts-footer">
        {FooterContactIcon}
        <p>{Text}</p>
      </div>
    </div>
  );
}

export default FooterElement;
