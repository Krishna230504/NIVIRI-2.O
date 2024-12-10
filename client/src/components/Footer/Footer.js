import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <div className="footer__email">
          <p>Get in touch with us</p>
          <div className="footer__email-input">
            <input type="email" placeholder="Email address" />
            <button>➔</button>
          </div>
        </div>
        <div className="footer__about">
          <p>
            Hello, we are Lift Media. Our goal is to translate the positive
            effects from revolutionizing how companies engage with their
            clients & their team.
          </p>
        </div>
        <button className="footer__book-btn">Book a Service</button>
      </div>
      <div className="footer__bottom">
        <div className="footer__logo">
          <img
            src="https://via.placeholder.com/50"
            alt="Temporary Logo"
            className="footer__logo-img"
          />
          <span>argon</span>
        </div>
        <div className="footer__links">
          <a href="#" className="footer__link">Terms</a>
          <a href="#" className="footer__link">Privacy</a>
          <a href="#" className="footer__link">Cookies</a>
          <a href="#" className="footer__link">Business Login</a>
        </div>
        <div className="footer__socials">
          <a href="#" className="footer__social-link">in</a>
          <a href="#" className="footer__social-link">f</a>
          <a href="#" className="footer__social-link">t</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
