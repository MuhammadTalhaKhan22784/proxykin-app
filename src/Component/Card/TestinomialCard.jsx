import React from "react";
import testinomialUser from "../../Assets/testinomial-user.jpg";
const TestinomialCard = () => {
  return (
    <React.Fragment>
    <div className="testinomial_card">
      <img src={testinomialUser} alt="..." />
      <div className="tc_content">
        <h2>Guillermo Figueredo</h2>
        <p>
          The greatest discovery of all time is that a person can changes his
          futures by some merely changing his attitude & some life style.
        </p>
      </div>
      <i class="fas fa-quote-right"></i>
    </div>
    </React.Fragment>
  );
};

export default TestinomialCard;
