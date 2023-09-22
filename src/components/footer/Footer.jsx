import React, { useState } from "react";
import "./Footer.css";
import paypalImg from "../../assets/images/paypal.png";
import visaImg from "../../assets/images/visa.png";
import maestroImg from "../../assets/images/maestro.png";
import discoverImg from "../../assets/images/discover.png";
import americanExpImg from "../../assets/images/american-express.png";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";
import { Collapse } from "react-bootstrap";

const information = [
  "About Us",
  "About Zip",
  "Privacy Policy",
  "Search",
  "Terms",
  "Orders and Returns",
  "Contact Us",
  "Advanced Search",
  "Newsletter Subscription",
];

const pcPorts = [
  "CPUS",
  "App On Cards",
  "Hard Drives (Internal)",
  "Graphic Cards",
  "Keyboards / Mice",
  "Cases / Power Supplies / Cooling",
  "RAM (Memory)",
  "Software",
  "Speakers / Headsets",
  "Motherboards",
];

const desktopPcs = [
  "Custom PCs",
  "Servers",
  "MSI All-In-One PCs",
  "HP/Compaq PCs",
  "ASUS PCs",
  "Tecs PCs",
];

const laptops = [
  "Evryday Use Notebooks",
  "MSI Workstation Series",
  "MSI Prestige Series",
  "Tablets and Pads",
  "Netbooks",
  "Infinity Gaming Notebooks",
];

const address = [
  { title: "Address", desc: "1234 Street Adress City Address, 1234" },
  { title: "Phones", link: "(00) 1234 5678" },
  { title: "We are open", desc: "Monday-Thursday: 9:00 AM - 5:30 PM" },
  { title: "Friday", desc: "9:00 AM - 6:00 PM" },
  { title: "E-mail", link: "shop@email.com" },
];

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="top-section">
          <div className="left-div">
            <h1>sign up to our newsletter.</h1>
            <p>Be the first to hear about the latest offers.</p>
          </div>
          <div className="subscribe-div">
            <input type="text" placeholder="Your Email" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
        <div className="list-div">
          <div>
            <th>Information</th>
            {information.map((item, i) => (
              <td key={i}>{item}</td>
            ))}
          </div>
          <div>
            <th>PC Parts</th>
            {pcPorts.map((item, i) => (
              <td key={i}>{item}</td>
            ))}
          </div>
          <div>
            <th>Desktop PCs</th>
            {desktopPcs.map((item, i) => (
              <td key={i}>{item}</td>
            ))}
          </div>
          <div>
            <th>Laptops</th>
            {laptops.map((item, i) => (
              <td key={i}>{item}</td>
            ))}
          </div>
          <div>
            <th>Address</th>
            {address.map((item, i) => (
              <td key={i}>
                {item.title}: <span className="link">{item?.link}</span>
                <span className="">{item?.desc}</span>
              </td>
            ))}
          </div>
        </div>
        <div className="accordions">
          <Accordions title={"Information"} data={information} />
          <Accordions title={"PC Parts"} data={pcPorts} />
          <Accordions title={"Desktop PCs"} data={desktopPcs} />
          <Accordions title={"Laptops"} data={laptops} />
        </div>
        <div className="hr-line"></div>
        <div className="footer-bottom">
          <div className="social-icons">
            <AiFillFacebook className="icon" />
            <AiFillInstagram className="icon" />
          </div>
          <div className="card-images">
            <img src={paypalImg} alt="" />
            <img src={visaImg} alt="" />
            <img src={maestroImg} alt="" />
            <img src={discoverImg} alt="" />
            <img src={americanExpImg} alt="" />
          </div>
          <small>Copyright © 2020 Shop Pty. Ltd.</small>
        </div>
        <div className="sm-card-images card-images">
          <img src={paypalImg} alt="" />
          <img src={visaImg} alt="" />
          <img src={maestroImg} alt="" />
          <img src={discoverImg} alt="" />
          <img src={americanExpImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

const Accordions = ({ data, title }) => {
  const [open, setOpen] = useState();
  return (
    <div className="accordion">
      <div
        onClick={() => setOpen(!open)}
        aria-controls="accordion-content"
        aria-expanded={open}
        className="accordion-header-div"
      >
        <span className="accordion-header" style={{ fontWeight: "bold" }}>
          {title}
        </span>
        {!open ? <PiCaretDownBold /> : <PiCaretUpBold />}
      </div>
      <Collapse in={open} className="accordion-content">
        <div className="list-items">
          {data.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </Collapse>
    </div>
  );
};
