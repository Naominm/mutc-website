import { ReactNode } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin,FaAlignJustify } from 'react-icons/fa';
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/mutc-images/logo.png"

import "./Header.css"


type HeaderContactsProps={
    Icon:ReactNode;
    Text:string;
};

type HamburgerProps={
    HamburgerMenuIcon:ReactNode;
    
};
function Header() {
    return ( 
        <div className="header">
        <div className="header-section-parent">
            <div className="header-contacts">
            <HeaderContacts Icon={<FaPhone/>} Text='+254 712 345 678  or  +254 712 345 678'/>
            <HeaderContacts Icon={<FaEnvelope/>} Text="info@muttechclub.com"/>
          
            </div>
            <div className="header-socials">
                <HeaderContacts Icon={<FaXTwitter/>} Text=''/>
                <HeaderContacts Icon={<FaLinkedin/>} Text=''/>
                <HeaderContacts Icon={<FaYoutube/>} Text=''/>
            </div>
          
  
        </div>
        <div className="header-navigations">
        <HeaderNavigation/>
        <HamburgerMenu HamburgerMenuIcon={<FaAlignJustify />} />
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

  function HeaderNavigation(){
    return(
        <div className="header-navigation-parent">
        <div className="logo-container">
             <img src={Logo} alt="" />
                </div>
                <div className="navs">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link link" : "link")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link link" : "link")}
          to="/Leadership"
        >
          Leadership
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link link" : "link")}
          to="/Tracks"
        >
          Tracks
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link link" : "link")}
          to="/Events"
        >
          Events
        </NavLink>
      </div>
      </div>
    )
  }
  function HamburgerMenu({ HamburgerMenuIcon }:HamburgerProps) {
    return <div className="hamburger-menu-container">{HamburgerMenuIcon}</div>;
  }

export default Header;