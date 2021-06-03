import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const AskQueCard = (props) => {
  return (
    <div className="askcard">
      <div>
        <i class="fas fa-quote-right"></i>
        <h2>{props.askText}</h2>
        {/* <hr className="h_hr" /> */}
        <p>{props.askPara}</p>
      </div>
      <Link to="/faq"><Button>Learn More</Button></Link>
    </div>
  );
};

export default AskQueCard;
