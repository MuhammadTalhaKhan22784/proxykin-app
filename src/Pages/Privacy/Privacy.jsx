import React,{useLayoutEffect} from "react";
import "./Privacy.css";

// import privacybg from "../../Assets/privacy-bg.jpg"
const Privacy = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <div className="privacy_section">
        <div className="p_hero">
          <h2>Privacy Policy</h2>
          <p>Last updated: December 07, 2020</p>
          <p>
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You.
          </p>
          <p>
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information in accordance with this Privacy Policy.
          </p>
        </div>
        <div className="p_content">
          {/* <h1>Privacy Policy</h1>
          <p className="p_text">Last updated: December 07, 2020</p> */}
          {/* <p>
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You.
          </p>
          <p>
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information in accordance with this Privacy Policy.
          </p> */}
          <h2>Interpretation</h2>
          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>
          <h2>Definitions</h2>
          <p>For the purposes of this Privacy Policy:</p>
          <ul>
            <li>
              <strong>Account</strong> means a unique account created for You to
              access our Service or parts of our Service.
            </li>
            <li>
              <strong> Affiliate</strong> means an entity that controls, is
              controlled by or is under common control with a party, where
              "control" means ownership of 50% or more of the shares, equity
              interest or other securities entitled to vote for election of
              directors or other managing authority.
            </li>
            <li>
              <strong>Application</strong> means the software program provided
              by the Company downloaded by You on any electronic device, named
              Estate Enforcer
            </li>
            <li>
              <strong>Business</strong>, for the purpose of the CCPA (California
              Consumer Privacy Act), refers to the Company as the legal entity
              that collects Consumers' personal information and determines the
              purposes and means of the processing of Consumers' personal
              information, or on behalf of which such information is collected
              and that alone, or jointly with others, determines the purposes
              and means of the processing of consumers' personal information,
              that does business in the State of California.
            </li>
            <li>
              <strong>Company</strong> (referred to as either "the Company",
              "We", "Us" or "Our" in this Agreement) refers to Estate Enforcer
              Inc., 201-315 Eglinton Ave. W., Toronto, ON, M5N 1A1.
              <br />
              For the purpose of the GDPR, the Company is the Data Controller.
            </li>

            <li>
              <strong>Consumer</strong>, for the purpose of the CCPA (California
              Consumer Privacy Act), means a natural person who is a California
              resident. A resident, as defined in the law, includes (1) every
              individual who is in the USA for other than a temporary or
              transitory purpose, and (2) every individual who is domiciled in
              the USA who is outside the USA for a temporary or transitory
              purpose.
            </li>
            <li>
              <strong>Cookies</strong> are small files that are placed on Your
              computer, mobile device or any other device by a website,
              containing the details of Your browsing history on that website
              among its many uses.
            </li>
            <li>
              <strong>Country</strong> refers to: Ontario, Canada
            </li>
            <li>
              <strong>Data Controller</strong>, for the purposes of the GDPR
              (General Data Protection Regulation), refers to the Company as the
              legal person which alone or jointly with others determines the
              purposes and means of the processing of Personal Data.
            </li>
            <li>
              <strong>Device</strong> means any device that can access the
              Service such as a computer, a cellphone or a digital tablet.
            </li>
            <li>Goods refer to the items offered for sale on the Service.</li>
            <li>
              <strong>Do Not Track</strong> (DNT) is a concept that has been
              promoted by US regulatory authorities, in particular the U.S.
              Federal Trade Commission (FTC), for the Internet industry to
              develop and implement a mechanism for allowing internet users to
              control the tracking of their online activities across websites.
            </li>
            <li>
              <strong>Facebook Fan Page</strong> is a public profile named
              Estate Enforcer specifically created by the Company on the
              Facebook social network, accessible from
              https://facebook.com/estate-enforcer
            </li>
            <li>
              <strong>Personal Data</strong> is any information that relates to
              an identified or identifiable individual.
              <br />
              For the purposes for GDPR, Personal Data means any information
              relating to You such as a name, an identification number, location
              data, online identifier or to one or more factors specific to the
              physical, physiological, genetic, mental, economic, cultural or
              social identity
              <br />
              For the purposes of the CCPA, Personal Data means any information
              that identifies, relates to, describes or is capable of being
              associated with, or could reasonably be linked, directly or
              indirectly, with You.
            </li>
            <li>
              <strong>Sale</strong>, for the purpose of the CCPA (California
              Consumer Privacy Act), means selling, renting, releasing,
              disclosing, disseminating, making available, transferring, or
              otherwise communicating orally, in writing, or by electronic or
              other means, a Consumer's personal information to another business
              or a third party for monetary or other valuable consideration.
            </li>
            <li>
              <strong>Service</strong> refers to the Application or the Website
              or both.
            </li>
            <li>
              <strong>Service Provider</strong> means any natural or legal
              person who processes the data on behalf of the Company. It refers
              to third-party companies or individuals employed by the Company to
              facilitate the Service, to provide the Service on behalf of the
              Company, to perform services related to the Service or to assist
              the Company in analyzing how the Service is used. For the purpose
              of the GDPR, Service Providers are considered Data Processors.
            </li>
            <li>
              <strong>Third-party Social Media Service</strong> refers to any
              website or any social network website through which a User can log
              in or create an account to use the Service.
            </li>
            <li>
              <strong>Usage Data</strong> refers to data collected
              automatically, either generated by the use of the Service or from
              the Service infrastructure itself (for example, the duration of a
              page visit).
            </li>
            <li>
              Website refers to Estate Enforcer, accessible from
              http://www.estateenforcer.com
            </li>
            <li>
              You means the individual accessing or using the Service, or the
              company, or other legal entity on behalf of which such individual
              is accessing or using the Service, as applicable.
              <br />
              Under GDPR (General Data Protection Regulation), You can be
              referred to as the Data Subject or as the User as you are the
              individual using the Service.
            </li>
            <li>
              <strong>Website</strong> refers to Estate Enforcer, accessible
              from http://www.estateenforcer.com
            </li>
            <li>
              <strong>You</strong> means the individual accessing or using the
              Service, or the company, or other legal entity on behalf of which
              such individual is accessing or using the Service, as applicable.
              <br />
              Under GDPR (General Data Protection Regulation), You can be
              referred to as the Data Subject or as the User as you are the
              individual using the Service.
            </li>
          </ul>
         
        </div>
      </div>
    </React.Fragment>
  );
};

export default Privacy;
