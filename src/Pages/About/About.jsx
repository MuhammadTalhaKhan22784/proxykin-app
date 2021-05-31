import React,{useLayoutEffect} from "react";
import "./About.css";
const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <div className="about_section">
        <div className="abt_hero">
          <h2>About Us</h2>
          <hr className="h_hr" />
        </div>
        <div className="abt_content">
          {/* <div className="abt_left">
            <iframe
              className="faq_video"
              src="https://www.youtube.com/embed/mC5uJGUmyOU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div> */}
          <div className="abt_right">
            {/* <h2>About Us</h2>
            <hr className="h_hr" /> */}
            <p>
              By keeping everyone informed, collectively they will help monitor
              your estate, the use of your Power of Attorneys and Wills, and the
              changes that may affect the legacy you decide to leave behind.
              Together you and your stakeholders will eliminate the misuse of
              the power you delegate and the carrying out of your wishes.
              <br />
              Ensuring that your estate is well managed by those you entrusted
              with it.
            </p>
            <p>
              Estate Enforcer is an application to safely and easily manage your
              power of attorneys and wills – all in one place. Whether it’s
              choosing who will have power of attorney privileges over you,
              preparing instructions to your lawyer to draft your will, or
              keeping tabs on everyone involved, Estate Enforcer is your
              lifetime tool!
            </p>
            <p>
              We know how important these decisions are. What you shouldn’t have
              to worry about is the accessibility and security of the decisions
              you made over your estate and how to leave behind a legacy that
              you can trust. That’s why all of our features are made to put you
              in control of your power of attorneys and wills, by keeping you
              informed and apprised of everyone involved and their situation
              together with yours.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
