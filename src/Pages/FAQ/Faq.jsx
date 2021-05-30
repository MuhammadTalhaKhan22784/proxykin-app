import React, { useState } from "react";
import "./Faq.css";
const Faq = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      <div className="faq_section">
        <div className="faq_hero">
          <h2>Help Center</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
            voluptate. Sapiente repellendus autem eos quaerat reiciendis
            obcaecati nihil veritatis veniam quidem, ratione ipsa eaque tempora
            minus? Maxime pariatur cumque nihil.
          </p>
        </div>
        <div className="faq_main">
          <iframe
            className="faq_video"
            src="https://www.youtube.com/embed/mC5uJGUmyOU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="faq_content">
          <div className="faq_box">
            <div className="fqb_text">
              <span>1. What is the Estate Enforcer?</span>
              <button
                style={{ display: show === false ? "block" : "none" }}
                onClick={() => setShow(true)}
              >
                +
              </button>
              <button
                style={{ display: show === false ? "none" : "block" }}
                onClick={() => setShow(false)}
              >
                -
              </button>
            </div>
            <div
              className="fqb_para"
              style={{ display: show === false ? "none" : "flex" }}
            >
              <p>
                Estate Enforcer (EE) is a cloud-native application that allows
                you to create, revise, revoke, store and track the use of your
                power of attorneys, wills and proxies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Faq;
