import { ReactNode } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin  } from 'react-icons/fa';
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

import "./Header.css"


type HeaderContactsProps={
    Icon:ReactNode;
    Text:string;
};
function Header() {
    return ( 
        <div className="header-section-parent">
            <div className="header-contacts">
            <HeaderContacts Icon={<FaPhone/>} Text='+254 712 345 678  or +254 712 345 678'/>
            <HeaderContacts Icon={<FaEnvelope/>} Text="info@muttechclub.com"/>
          
            </div>
            <div className="header-socials">
                <HeaderContacts Icon={<FaXTwitter/>} Text=''/>
                <HeaderContacts Icon={<FaLinkedin/>} Text=''/>
                <HeaderContacts Icon={<FaYoutube/>} Text=''/>
            </div>
          
  
        </div>
     );
}

 function HeaderContacts({Icon,Text}:HeaderContactsProps){
    return(
        <div className="header-contact-container">
            {Icon}
            <p>{Text}</p>
        </div>
    )
 }

export default Header;