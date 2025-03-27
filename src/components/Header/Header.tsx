import { ReactNode, useState } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaAlignJustify, FaTimes } from 'react-icons/fa';
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/mutc-images/logo.png";
import "./Header.css";

type HeaderContactsProps = { Icon: ReactNode; Text: string };
type HamburgerProps = { HamburgerMenuIcon: ReactNode; onClick: () => void };

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prevState => !prevState);

  return (
    <div className="header">
      <div className="header-section-parent">
        <div className="header-contacts">
          <HeaderContacts Icon={<FaPhone />} Text='+254 712 345 678 or +254 712 345 678' />
          <HeaderContacts Icon={<FaEnvelope />} Text="info@muttechclub.com" />
        </div>
        <div className="header-socials">
          <HeaderContacts Icon={<FaXTwitter />} Text='' />
          <HeaderContacts Icon={<FaLinkedin />} Text='' />
          <HeaderContacts Icon={<FaYoutube />} Text='' />
        </div>
      </div>

      <div className="header-navigations">
        <HeaderNavigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <HamburgerMenu 
          HamburgerMenuIcon={isMenuOpen ? <FaTimes /> : <FaAlignJustify />} 
          onClick={toggleMenu} 
        />
      </div>

      <div className={`sidebar-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
    </div>
  )
}

function HeaderContacts({ Icon, Text }: HeaderContactsProps) {
  return (
    <div className="header-contact-container">
      {Icon}
      <p>{Text}</p>
    </div>
  )
}

function HeaderNavigation({ isMenuOpen, toggleMenu }: { isMenuOpen: boolean; toggleMenu: () => void }) {
  return (
    <div className={`header-navigation-parent ${isMenuOpen ? "show-navs" : ""}`}>
      <div className="logo-container">
        <img src={Logo} alt="Logo" />
        <p>Mutc</p>
      </div>
      <div className={`navs ${isMenuOpen ? "mobile-navs" : ""}`}>
        <NavLink 
          className={({ isActive }) => (isActive ? "active-link link" : "link")} 
          to="/"
          onClick={toggleMenu}
        >
          Home
        </NavLink>
        <NavLink 
          className={({ isActive }) => (isActive ? "active-link link" : "link")} 
          to="/Leadership"
          onClick={toggleMenu}
        >
          Leadership
        </NavLink>
        <NavLink 
          className={({ isActive }) => (isActive ? "active-link link" : "link")} 
          to="/Tracks"
          onClick={toggleMenu}
        >
          Tracks
        </NavLink>
        <NavLink 
          className={({ isActive }) => (isActive ? "active-link link" : "link")} 
          to="/Events"
          onClick={toggleMenu}
        >
          Events
        </NavLink>
      </div>
    </div>
  )
}

function HamburgerMenu({ HamburgerMenuIcon, onClick }: HamburgerProps) {
  return (
    <div className="hamburger-menu-container" onClick={onClick}>
      {HamburgerMenuIcon}
    </div>
  )
}

export default Header;