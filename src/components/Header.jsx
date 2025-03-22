import React, { useEffect, useState } from 'react';
import logo from '/images/logo.png';
import burgerIcon from '/images/burger-icon.png';
import xMark from '/images/x-mark.png';
import searchIcon from '/images/search-icon.png';

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 586);
  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 586);
    };

    // Set up event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <div className="news-alerts" style={{ display: isVisible ? "" : "none" }}>
        <p>
          LIVE RACE STREAM FROM GATOR NATIONALS IN SARASOTA, FL /{' '}
          <a className="news-link">WATCH NOW</a>
        </p>
        <div className="close-icon" onClick={() => setIsVisible(false)}>
          <img src={xMark} />
        </div>
      </div>
      <header>
        <div className="menu">
          <img className="logo" src={logo} alt="Adidas Logo"></img>

          {isTablet ? (
            <div className="header-buttons">
              <button>MEMBERSHIP</button>
              <button>ACCOUNT</button>
            </div>
          ) : (
            <img
              className="burger-icon"
              src={burgerIcon}
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
        {!isTablet ? (
          <div className="header-buttons">
            <button>MEMBERSHIP</button>
            <button>ACCOUNT</button>
          </div>
        ) : (
          ''
        )}
        <div className={`secondary-navbar ${isOpen ? 'navbar-open' : 'navbar-close'}`}>
          <nav>
            <ul>
              <li className="active">
                <a href="#">OUR TRACKS</a>
              </li>
              <li>
                <a href="#">FIND EVENTS</a>
              </li>
              <li>
                <a href="#">TRACK MAP</a>
              </li>
              <li>
                <a href="#">SHOP</a>
              </li>
              <li>
                <a href="#">ABOUT US</a>
              </li>
            </ul>
          </nav>
          <div className="search-box">
            <input type="text" placeholder="SEARCH" />
            <img src={searchIcon} />
          </div>
      </div>
      </header>
    </>
  );
};
