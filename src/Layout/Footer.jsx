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
            <a target="blank" href="http://proxykin.com/blog">
              Blog
            </a>
          </div>
          <div className="fc_3">
            <span>Help Center</span>
            <Link>Give Feedback</Link>
            <Link to="/faq">FAQs</Link>
            <Link>Contact us</Link>
          </div>
          <div className="fc_4">
            <span>Newsletter</span>
            <p>
              Join all the people who get the best exchange rates with lorem.
              We’re cheaper than most leading African Banks. Enjoy rapid
              transfers and the lowest fees. Your friends and family get more
              when you send them money with lorem
            </p>
            <div className="f_host">
              <img src={appstoreIcon} alt="..." />
              <img src={googlePlayIcon} alt="..." />
            </div>
          </div>
        </div>
        <div className="f_bottom">
          <span>
            Privacy Policy | © 2021 <strong>Estate Enforcer.</strong> All rights
            reserved
          </span>
          <div className="f_social_links">
            <a target="blank" href="https://www.facebook.com/ProxyKin">
              {" "}
              <i class="fab fa-facebook-f"></i>
            </a>
            <a target="blank" href="https://www.instagram.com/theproxykin/?hl=en">
              <i class="fab fa-instagram"></i>
            </a>
            <a target="blank" href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fproxykin%2Fabout%2F">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
