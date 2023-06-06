import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>Visit Our Website:</p>
        <a href="https://codi.tech/">Codi Tech</a>
      </div>
      <div className="social-media">
        <p>Follow us on:</p>
        <ul>
          <li>
            <a href="https://www.facebook.com/coditechlb">
              <FaFacebook />
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/codi_tech/">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
