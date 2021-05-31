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
            <Button className="s_btn">Sign up</Button>
            <Button className="l_btn">Sign in</Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
