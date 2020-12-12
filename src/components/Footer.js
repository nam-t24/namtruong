import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      {/*<section className='footer-contact'>
        <p className='footer-contact-heading'>
          Contact
        </p>
        <p className='footer-contact-text'>
          namtruong831@gmail.com
        </p>
      </section>*/}
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Contact</h2>
            <a href="mailto:namtruong831@gmail.com" target="-blank">
              namtruong831@gmail.com
            </a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <a href="http://github.com/nam-t24" target="-blank">
              Github
            </a>
            <a href="https://www.linkedin.com/in/namtruongcs/" target="-blank">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      {/* style={{color:"#fff"}}*/}
      <section class="social-media">
        <div class="social-media-wrap">
          <small class="website-rights">© 2020 Nam Truong</small>
          <div class="social-icons">
            <a
              href="http://github.com/nam-t24"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="GitHub"
              class="social-icon-link"
            >
              <i className="fab fa-github" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/namtruongcs/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="LinkedIn"
              class="social-icon-link"
            >
              <i class="fab fa-linkedin" aria-hidden="true" />
            </a>
            <a
              href="mailto:namtruong831@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              data-toggle="tooltip"
              data-placement="bottom"
              title="namtruong831@gmail.com"
              class="social-icon-link"
            >
              <i class="fas fa-envelope" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
