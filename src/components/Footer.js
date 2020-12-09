import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Contact
        </p>
        <p className='footer-subscription-text'>
          namtruong831@gmail.com
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href="http://github.com/nam-t24" target="-blank">Github</a>
            <a href="https://www.linkedin.com/in/namtruongcs/" target="-blank">LinkedIn</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>Nam Truong</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link github'
              to='/'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
            
              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i class="fa fa-linkedin-square" aria-hidden="true"/>
              </a>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;