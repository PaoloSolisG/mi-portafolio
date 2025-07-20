import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <hr />
      <div className="footer-container">
        <div className="footer-section redes">
          <div className="social-icons">
            <a
              href="https://www.facebook.com/paolo.solis.94"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/paolo.francis.solis/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://x.com/Paolo32591566"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="footer-section direccion">
          <p className="direccion-linea">
            Lima, Perú &nbsp;|&nbsp; Tel: +51 959 234 857 &nbsp;|&nbsp;
            paolosolisgomez1@gmail.com
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Paolo SG . Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
