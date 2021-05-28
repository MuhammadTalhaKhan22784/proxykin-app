import React from "react";
import Button from "@material-ui/core/Button";

const AskQueCard = (props) => {
  return (
    <div className="askcard">
      <div>
        <i class="fas fa-quote-right"></i>
        <h2>{props.askText}</h2>
        {/* <hr className="h_hr" /> */}
        <p>{props.askPara}</p>
      </div>
      <Button>Learn More</Button>
    </div>
  );
};

export default AskQueCard;
