import "./Header.css";

import { RiArrowDropDownLine } from "react-icons/ri";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BiCart, BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserLarge } from "react-icons/fa6";
import logo from "../../assets/icons/logo.png";
import user from "../../assets/icons/user.png";
import smLogo from "../../assets/icons/sm-logo.png";

const navbarItems = [
  "Laptops",
  "Desktop PCs",
  "Networking Devices",
  "Printers & Scanners",
  "PC Parts",
  "All Other Products",
  "Repairs",
];

const Header = () => {
  return (
    <nav className="header-container">
      <div className="header-contact-container">
        <div className="header-contact">
          <div className="header-date-container">
            <span className="header-date">Mon-Thu: </span>
            <span> 9:00 AM - 5:30 PM</span>
            <RiArrowDropDownLine size={25} />
          </div>
          <div className="header-address">
            <span className="header-address-street">
              Visit our showroom in 1234 Street Adress City Address, 1234{" "}
            </span>
            <span className="contact-us">Contact Us</span>
          </div>
          <div className="header-social">
            <div className="header-tele">Call Us: (00) 1234 5678</div>
            <AiFillFacebook size={22} />
            <AiFillInstagram size={22} />
          </div>
        </div>
      </div>

      <div className="navbar-container">
        <div className="navbar">
          <div className="nav-item-container">
            <img className="logo" src={logo} alt="logo" />
            <div className="nav-items-container">
              {navbarItems.map((item, index) => {
                return (
                  <div key={index} className="nav-items">
                    {item}
                  </div>
                );
              })}
              <button className="nav-button">Our Deals</button>
            </div>
          </div>
          <div className="nav-right">
            <FiSearch size={25} />
            <BiCart size={25} className="cart-icon" />
            <span className="cart-count">2</span>
            <img className="user-image" src={user} alt="user" />
          </div>
        </div>
      </div>

      <div className="navbar-container-mobile">
        <div className="hamburger-mobile">
          <GiHamburgerMenu size={22} />
        </div>
        <img src={smLogo} alt="" className="sm-logo" />
        <div className="input-box">
          <BiSearch size={22} />
          <input type="text" placeholder="Search here" />
        </div>
        <div className="cart-user-mobile">
          <div className="cart-container-mobile">
            <BiCart size={38} className="cart-icon-mobile" />
            <span className="cart-count-mobile">2</span>
          </div>
          <div className="user-icon-div">
            <FaUserLarge size={19} className="user-icon-mobile" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
