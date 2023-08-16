import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Footer component: Displays footer information and links
const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        {/* Column 1: Company information */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Our Office</a>
            </li>
            <li>
              <a href="#">Other</a>
            </li>
          </ul>
        </div>
        {/* Column 2: Help and FAQs */}
        <div className="footer-col">
          <h4>Get Help</h4>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">frequently asked questions</a>
            </li>
          </ul>
        </div>
        {/* Column 3: Contact information */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul>
            {/* The Contact Us link */}
            <li>
              <a href="contactUs/contactUs.html">Contact Us</a>
            </li>
          </ul>
        </div>
        {/* Column 4: Social links and copyright */}
        <div className="footer-col">
          <div className="social-links">
            {/* Social media icons */}
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            {/* Copyright notice */}
            <p>© 2023 goldOurs. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

/* The Footer component displays footer information and links, providing users
 with company-related, help, contact, and social media information. It is divided 
 into four columns, each containing specific content such as company details, help 
 resources, contact information, and social media icons. The component is intended
to be placed at the bottom of a web page to enhance user navigation and provide 
essential information */