import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.jpg";
import appstoreIcon from "../Assets/appstore-icon.svg";
import googlePlayIcon from "../Assets/googleplay-con.svg";
import "./style.css";
const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="fc_content">
          <div className="fc_1">
            <img src={logo} alt="..." />
            <h2>Blockchain Safe Power Of Attorney</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classNameical Latin literature
            </p>
          </div>
          <div className="fc_2">
            <span>Company</span>
            <Link to="/about">About</Link>
            <Link>Team</Link>
            <Link to="/privacy">PRIVACY</Link>
            <Link>News</Link>
          </div>
          <div className="fc_3">
            <span>Help Center</span>
            <Link>Give Feedback</Link>
            <Link>FAQs</Link>
            <Link>Contact us</Link>
          </div>
          <div className="fc_4">
            <img
              src={appstoreIcon}
              alt="..."
            />
            <img
              src={googlePlayIcon}
              alt="..."
            />
          </div>
        </div>
        <div className="f_bottom">
          <span>
            Privacy Policy | © 2020 <strong>ProxyKin.</strong> All rights
            reserved
          </span>
          <div className="f_social_links">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin-in"></i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;