import React from "react";
import { Instagram, Twitter,Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#2B5541", padding: "20px", color: "#FFFFFF", borderTop: "1px solid #3498db" }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        {/* Company Name and Contacts */}
        <div>
          <h2 style={{ color: "#FE6D73" }}>Aurioun</h2>
          <p>Contact us:</p>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <a href="https://instagram.com/aurioun_official" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", color: "#FFFFFF", textDecoration: "none" }}>
                <Instagram size={18} style={{ marginRight: "5px", color:"E4405F" }} />
                @aurioun_official
              </a>
            </li>
            <li>
              <a href="https://twitter.com/aurioun" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", color: "#FFFFFF", textDecoration: "none" }}>
                <Twitter size={18} style={{ marginRight: "5px",color:"#1DA1F2" }} />
                Twitter
              </a>
            </li>
            <li>
              <a href="mailto:contact@aurioun.com" style={{ color: "#FFFFFF", textDecoration: "none" }}>
              <Mail size={18} style={{ marginRight: "5px", color: "#D44638" }} />
                contact@aurioun.com
              </a>
            </li>
          </ul>
        </div>

        {/* Columns */}
        <div>
          <h3>About Us</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>Our Story</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h3>Customer Policy</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Refund Policy</li>
          </ul>
        </div>
        <div>
          <h3>Help</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>FAQs</li>
            <li>Support</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div style={{ borderTop: "1px solid #FFFFFF", marginTop: "20px", paddingTop: "10px", textAlign: "center" }}>
        <p>&copy; {new Date().getFullYear()} Aurioun. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;