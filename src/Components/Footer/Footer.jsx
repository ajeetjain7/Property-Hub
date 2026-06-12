import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__column">
          <h3>Private Property Rental</h3>
          <p>Find your dream rental home or list your property with ease.</p>
        </div>
        <div className="footer__column">
          <h4>Company</h4>
          <a href="#home">Home</a>
          <a href="#houses">Houses</a>
          <a href="#listing">List Your Home</a>
        </div>
        <div className="footer__column">
          <h4>Support</h4>
          <a href="#contact">Contact</a>
          <a href="#help">Help Center</a>
          <a href="#terms">Terms</a>
        </div>
        <div className="footer__column">
          <h4>Connect</h4>
          <p>Email: support@pprental.com</p>
          <p>Phone: +91 9XXXXXXXXX</p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Private Property Rental. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
