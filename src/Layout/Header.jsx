import React from "react";
import "./style.css";
import Button from "@material-ui/core/Button";
import logo from "../Assets/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="nav_logo">
          <Link to="/"><img src={logo} alt="..." /></Link>
        </div>
        <div>
          <div className="h_btn">
            <a target="blank" href="https://proxykin.web.app/auth/register"><Button className="s_btn">Sign up</Button></a>
            <a target="blank" href="https://proxykin.web.app/auth/login"><Button className="l_btn">Sign in</Button></a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
