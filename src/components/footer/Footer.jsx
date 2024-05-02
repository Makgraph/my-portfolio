import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">
          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>

            <li>
              <a href="#portfolio" className="footer__link">
                Project
              </a>
            </li>
          </ul>

          <span className="footer__copy">
            &#169; Makgraphcoder. All rigths reserved
          </span>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
