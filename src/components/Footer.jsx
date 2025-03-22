import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">OUR TRACKS</a> /<a href="#">FIND EVENTS</a> /
        <a href="#">TRACK MAP</a> <br />
        <a href="#">SHOP</a> /<a href="#">ABOUT US</a>
      </div>

      <div className="social-icons">
        <a href="#">
          <img src="/images/facebook-icon.png" alt="facebook link" />
        </a>
        <a href="#">
          <img src="/images/twitter-icon.png" alt="twitter link" />
        </a>
        <a href="#">
          <img src="/images/instagram-icon.png" alt="instagram link" />
        </a>
        <a href="#">
          <img src="/images/linkedin-icon.png" alt="" />
        </a>
      </div>

      <p className="copyright">© copyright 2020 Adidas</p>
    </footer>
  );
};
