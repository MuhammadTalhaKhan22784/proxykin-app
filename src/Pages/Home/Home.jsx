import React, { useLayoutEffect } from "react";
import EesCard from "../../Component/Card/EesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper";
// assets
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import himg2 from "../../Assets/himg2.png";
import eeimg from "../../Assets/ee_img.jpg";
import tcardimg1 from "../../Assets/tcardimg1.jpg";
import tcardimg2 from "../../Assets/tcardimg2.jpg";
import tcardimg3 from "../../Assets/tcardimg3.jpg";
import appstoreIcon from "../../Assets/appstore-icon.svg";
import googlePlayIcon from "../../Assets/googleplay-con.svg";
// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/components/effect-flip/effect-flip.min.css";
import "./Home.css";
import TeamCard from "../../Component/Card/TeamCard";
import AskQueCard from "../../Component/Card/AskQueCard";
import TestinomialCard from "../../Component/Card/TestinomialCard";
SwiperCore.use([Navigation, Pagination, EffectFade]);

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <div className="main_home">
        <div className="h_hero_section">
          <div className="h_hero_main">
            <div className="h_hero_left">
              {/* <Fade top delay={700} duration={1000}>
                <img src={logo} alt="..." />
              </Fade> */}
              <Fade left delay={1000} duration={2000}>
                <h1>
                  Monitor your executors & attorneys, and control your legacy!
                </h1>
              </Fade>
              <Fade bottom delay={3000} duration={1000}>
                <hr className="h_hr" />
              </Fade>

              <ul className="hl_ul">
                <Fade left delay={4000} duration={1000}>
                  <li>
                    Confirm your attorneys and executors and stay informed of
                    changes.
                  </li>
                </Fade>
                <Fade left delay={4100} duration={1000}>
                  <li>
                    Change your POA and will and inform everyone involved.
                  </li>
                </Fade>
                <Fade left delay={4200} duration={1000}>
                  <li>
                    Keep track of anyone using or relying on your POA and will.
                  </li>
                </Fade>
                <Fade left delay={4300} duration={1000}>
                  <li>
                    Maintain an audit trail of instructions to your lawyer and
                    other stakeholders.
                  </li>
                </Fade>
                <Fade left delay={4400} duration={1000}>
                  <li>Decide what your beneficiaries should know and when.</li>
                </Fade>
              </ul>
            </div>
            <div className="h_hero_right">
              <Flip bottom delay={4400} duration={2200}>
                <img src={himg2} alt="..." />
              </Flip>
            </div>
          </div>
          <Fade bottom delay={3100} duration={1000}>
            <div className="h_media">
              <img src={appstoreIcon} alt="..." />
              <img src={googlePlayIcon} alt="..." />
            </div>
          </Fade>
        </div>
        <div className="h_details_section">
          <Swiper
            className="h_swiper"
            effect="flip"
            spaceBetween={50}
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="ee_main">
                <img src={eeimg} alt="..." />
                <div className="hds_content">
                  <h2>What is Estate Enforcer?</h2>
                  <hr className="h_hr" />
                  <div>
                    <p>
                      Ensuring that your estate is well managed by those you
                      entrusted with it.
                    </p>
                    <p>
                      By keeping everyone informed, collectively they will help
                      monitor your estate, the use of your Power of Attorneys
                      and Wills, and the changes that may affect the legacy you
                      decide to leave behind. Together you and your stakeholders
                      will eliminate the misuse of the power you delegate and
                      the carrying out of your wishes.
                    </p>
                    <p>
                      Estate Enforcer is an application to safely and easily
                      manage your power of attorneys and wills – all in one
                      place. Whether it’s choosing who will have power of
                      attorney privileges over you, preparing instructions to
                      your lawyer to draft your will, or keeping tabs on
                      everyone involved, Estate Enforcer is your lifetime tool!
                    </p>
                    <p>
                      We know how important these decisions are. What you
                      shouldn’t have to worry about is the accessibility and
                      security of the decisions you made over your estate and
                      how to leave behind a legacy that you can trust. That’s
                      why all of our features are made to put you in control of
                      your power of attorneys and wills, by keeping you informed
                      and apprised of everyone involved and their situation
                      together with yours.
                    </p>
                    <p>
                      Your personal information and legal documents will soon be
                      kept secure and accessible anywhere in the world using the
                      power of blockchain.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="ee_main">
                <img src={eeimg} alt="..." />
                <div className="hds_content">
                  <h2>Why</h2>
                  <hr className="h_hr" />
                  <div>
                    <p>
                      When an attorney misuses their authority that is granted
                      to them, it is considered power of attorney abuse. This
                      typically manifests in the form of not making decisions in
                      your best interest as the donor. In some cases, the
                      appointed attorney will neglect your needs as the donor.
                      If the power of attorney was created for personal care,
                      this is a serious issue since your health and welfare as
                      the donor is at stake. It is typically known as breach of
                      fiduciary duty. Fiduciary duties can include, but are not
                      limited to:
                    </p>
                    <p>
                      By keeping everyone informed, collectively they will help
                      monitor your estate, the use of your Power of Attorneys
                      and Wills, and the changes that may affect the legacy you
                      decide to leave behind. Together you and your stakeholders
                      will eliminate the misuse of the power you delegate and
                      the carrying out of your wishes.
                    </p>
                    <p>
                      Estate Enforcer is an application to safely and easily
                      manage your power of attorneys and wills – all in one
                      place. Whether it’s choosing who will have power of
                      attorney privileges over you, preparing instructions to
                      your lawyer to draft your will, or keeping tabs on
                      everyone involved, Estate Enforcer is your lifetime tool!
                    </p>
                    <p>
                      We know how important these decisions are. What you
                      shouldn’t have to worry about is the accessibility and
                      security of the decisions you made over your estate and
                      how to leave behind a legacy that you can trust. That’s
                      why all of our features are made to put you in control of
                      your power of attorneys and wills, by keeping you informed
                      and apprised of everyone involved and their situation
                      together with yours.
                    </p>
                    <p>
                      Your personal information and legal documents will soon be
                      kept secure and accessible anywhere in the world using the
                      power of blockchain.
                    </p>
                    <p>
                      1. Ensuring that you, as the donor, is informed about any
                      changes to your finances, affairs, or personal
                      information.
                      <br /> 2. Refraining from transferring your property or
                      finances to the attorney unless indicated in the power of
                      attorney. <br />
                      3. Receiving consent for making any changes or profiting
                      from your finances.
                    </p>
                    <p>
                      Medical abuse can occur in the forms of you unwillingly
                      being brought to a nursing home, unneeded medical
                      appointments being made, or adequate care not being
                      provided. If your concerned parties (such as friends and
                      family) are becoming prohibited from seeing or
                      communicating with you, it is often a red flag. Care
                      expenses not being covered and unreasonable changes to
                      assistance are other signs of misuse.
                    </p>
                    <p>
                      Power of attorneys created for property can be abused for
                      the financial gain of the appointed attorney. Money can be
                      transferred from your bank to theirs, property can be sold
                      for their gain, and similar financial situations.
                    </p>
                    <p>
                      When the abuse of a power of attorney borders identity
                      theft, it is considered fraud. Having full access to your
                      personal information, bank accounts, and sensitive data
                      can enable your attorney to commit many fraud related
                      crimes, especially if no one else knows until it is too
                      late.
                    </p>
                    <p>
                      Firstly, credit cards, bank accounts, and other financial
                      products can be opened in your name. Welfare and tax fraud
                      can be done under your name without you or anyone else who
                      cares about you, ever knowing. Performing forgery to
                      become a beneficiary or owner of property is another form
                      of fraud that can be performed.
                    </p>
                    <p>
                      Since power of attorneys are typically granted to care for
                      sick, elderly, or disabled individuals, they are the ones
                      who are most at risk. As they are already in physically
                      and mentally vulnerable positions, dishonest attorneys can
                      take advantage of them. If you live alone or have very few
                      relatives to rely on, you are also very susceptible.
                    </p>
                    <p>
                      Not to mention, there are many forms of will fraud. The
                      most common is when an executor submits an earlier version
                      of a will for probate in an attempt to deceive the
                      beneficiaries as to their latest entitlements under a more
                      recent will, often motivated by direct or indirect
                      personal gain. This is common because often one would
                      create a will, give out copies to executors and
                      beneficiaries or let them know where the original is
                      stored. When wills are later changed, the executors and
                      beneficiaries may not be notified, or their involvement or
                      inheritance was altered such that it was uncomfortable for
                      the deceased to inform them at the time. Not knowing
                      better, or knowing and not agreeing with the changes, the
                      executor may intentionally act on an older will that they
                      may have a copy of, or know where the original one is.
                      Keep in mind these wills can be altered by “slip
                      sheeting”, where pages of the will are swapped with
                      fraudulently drafted ones and commingled with the actual
                      pages of the will in order to effect the result the
                      fraudster desires.
                    </p>
                    <p>
                      Fraud can even begin earlier by inducing the bequest of
                      the testator through duress or undue influence. Or taking
                      advantage of the testator when they are not of sound mind,
                      often involving a less scrupulous lawyer and notary,
                      tricking the testator into altering or drafting a new will
                      without any of the original beneficiaries and executors
                      knowing, or even family members and confidants, such as
                      the original lawyer. Also, another example is when the
                      testator disposed of his property differently because of
                      the intentional misrepresentation that the testator
                      considered important but where the misrepresentation was
                      not directed to a particular provision in the will. For
                      instance, if a fraudster convinces the testator that an
                      heir apparent has already died, but is, in fact, alive,
                      this would probably cause the testator to distribute his
                      assets differently, either in the execution of the already
                      drafted original will or a codicil or revoking a will that
                      included the heir, so that a new will can be executed not
                      including the presumed deceased heir. Another example of
                      this is in the execution of the will, which occurs when
                      the fraudster misrepresents the document that the testator
                      is signing as the testator's will, when, in fact, it is
                      not. For instance, fraud in the execution would occur if
                      the fraudster drew another will naming himself as the
                      primary beneficiary then substituted his will for the
                      testator's will and had the testator sign it as if it was
                      his will. Because for some reason testators feel that they
                      need to keep their wills private and hidden, no one ever
                      finds out. By not keeping your beneficiaries and executors
                      informed, as well as your loved ones, friends, confidants
                      and lawyer; perpetrating fraud in this manner is easier
                      than you may think!
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="h_video_section">
          <iframe
            className="faq_video"
            src="https://www.youtube.com/embed/mC5uJGUmyOU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="h_more_section">
          <div className="hms_left">
            <div className="hmsl_content">
              <h2>Manage your Power of Attorneys</h2>
              <span>
                Control who will have power of attorney privileges over you.
              </span>
              <div className="hmsl_text">
                <p>
                  The process for creating a power of attorney can be lengthy,
                  difficult and expensive. Estate Enforcer's technology cuts out
                  the loss of control once your power of attorney documents are
                  in circulation, by offering a safe and easy way to instruct,
                  create and manage your power of attorneys, putting you in
                  control. Even more, you have the ability to revoke or cancel
                  power of attorney privileges – which in normal circumstances
                  would be a daunting task.
                </p>
                <p>
                  Estate Enforcer allows you to easily create various types of
                  power of attorneys based on your needs, and confirm with your
                  circle of trust who can and will act in your best interest.
                </p>
                <p>
                  Already have an existing power of attorney? Great, upload it
                  and safely store it here which will soon be on our blockchain.
                  Answer a few questions, and you can enjoy the same benefits as
                  if you created it here from new. Get notifications of its use.
                  Confirm your attorney’s ability or willingness to act or
                  continue. And most importantly track any changes and revoke
                  anyone you don’t want involved.
                </p>
              </div>
            </div>
          </div>
          <div className="hms_right">
            <img
              src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGF3eWVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="..."
            />
          </div>
        </div>

        <div className="h_more_section2">
          <div className="hms_left">
            <div className="hmsl_content">
              <h2>So What's the Big Deal?</h2>
              <span>
                You could lose everything even when alive, often leaving nothing
                for your heirs.
              </span>
              <div className="hmsl_text">
                <p>
                  The amount of American's aged 65 and older is projected to
                  more than double by the year 2060. It's also estimated that
                  elderly individuals lose approximately $2.9 billion annually
                  from financial fraud and scams.
                </p>
                <p>
                  A power of attorney is a legal document which enables another
                  party to make decisions on your behalf in the case you are
                  unable to, such as being in a coma, losing mental capacity,
                  while in the military being deployed overseas, or simply being
                  out of the country. The other party granted power is
                  considered the “attorney”. There are two forms of this
                  document:
                </p>
                <p>
                  1. Property type: Your attorney has deciding power over your
                  housing, investments, bills, and other financial assets.
                </p>
                <p>
                  2. Personal care type: Your attorney is able to make decisions
                  related to your health, clothing, and other aspects of your
                  personal life.
                </p>
                <p>
                  To prepare a power of attorney, you must first be mentally
                  capable to do so. To sign a power of attorney for property,
                  you must understand:
                </p>
                <p>1. What assets you own and their worth.</p>
                <p>2. That you will have obligations to the attorney.</p>
                <p>3. The power and control you are giving to the attorney.</p>
                <p>A power of attorney for personal care requires you to:</p>
                <p>1. Have a genuine need for assistance.</p>
                <p>
                  2. Understand the importance of choosing the correct
                  individual to appoint as attorney.
                </p>
                <p>
                  Selecting the correct attorney is crucial to avoid misuse and
                  fraud. On average, the appointed individual will have to be an
                  adult and be able to hold property under its name, such as
                  being a minimum of 18 years old. In certain countries,
                  including Canada, the minimum age for a personal care power of
                  attorney is 16 years old. Every person should refer to their
                  local legislation to determine age restrictions.
                </p>
                <p>
                  An attorney for personal care should ideally be a family
                  member or close friend. They should understand all of the
                  responsibilities they will undertake if appointed. Paid
                  individuals are normally not allowed to be an attorney for
                  personal care, which includes:
                </p>
                <p>1. Nurses or health care providers</p>
                <p>2. Teachers or social workers</p>
                <p>3. Landlords</p>
                <p>
                  Attorneys for property can begin making decisions immediately,
                  therefore extra caution is suggested. It is common to state
                  within your power of attorney that the other party is only
                  allowed to make decisions if you are mentally incapable. Trust
                  companies can also be appointed as an attorney for a fee to
                  handle property.
                </p>
                <p>
                  To determine when a power of attorney comes into effect and
                  for how long, there are several categories that can be
                  selected. They are:
                </p>
                <p>
                  1. General: Effective immediately and end on your death or
                  incapacity.
                </p>
                <p>
                  2. Limited: Effective only for specific periods of time or
                  purpose(s) as previously decided by you.
                </p>
                <p>
                  3. Enduring: Effective immediately and continues into
                  incapacity. Ends upon your death or revocation.
                </p>
                <p>
                  4. Springing: Not effective until incapacity occurs or a
                  specified trigger as previously decided by you.
                </p>
                <p>
                  All power of attorneys end on your death, which where the
                  importance of a will comes in!
                </p>
              </div>
            </div>
          </div>
          <div className="hms_right">
            <img
              src="https://images.unsplash.com/photo-1555374018-13a8994ab246?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGxhd3llcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="..."
            />
          </div>
        </div>
        <div className="estate_enforce_section">
          <h2>Why use Estate Enforcer?</h2>
          <p>
            Deciding who your power of attorneys or executors and trustees will
            be is an important decision. It traditionally relies on an expensive
            and emotionally challenging exercise, often relying on advice you do
            not necessarily need. Estate Enforcer alleviates how you manage this
            in a way that is safe, secure and private.
          </p>
          <div className="ees_cards_section">
            <EesCard />
            <EesCard />
            <EesCard />
            <EesCard />
            <EesCard />
            <EesCard />
          </div>
        </div>
        <div className="h_team_section">
          <h1>Meet the team</h1>
          <p>
            We're made up of industry experts that see a better way to manage
            your power of attorneys and wills.
          </p>
          <div className="team_cards_section">
            <div className="team_card_wrapper">
              <TeamCard
                img={tcardimg1}
                name="Jeff Levy"
                role="Founder and CEO"
              />
              <TeamCard img={tcardimg2} name="Niraj Prasad" role="Partner" />
              <TeamCard
                img={tcardimg3}
                name="Amrit Prasad"
                role="CTO, Principal Developer"
              />
            </div>
          </div>
        </div>
        <div className="ask_questions_section">
          <h1>Frequently Asked Questions</h1>
          <p>
            Have a question about ProxyKin, power of attorney privilege or
            anything else? We've got the answers here.
          </p>
          <div className="askcard_section">
            <AskQueCard
              askText="What is a Power of Attorney?"
              askPara="A power of attorney is normally in the form of a document that authorizes someone else, usually someone you trust, to make decisions on your behalf when you cannot, such as when you are physically and/or mentally incapable or you are absent."
            />
            <AskQueCard
              askText="What is a Will?"
              askPara='A will also known as a "last will and testament", normally in the form of a document, provides your instructions as to who you want to be in charge of your money, property and investments of any kind, and what to do with them, including who should get what and how.'
            />
            <AskQueCard
              askText="If I have an existing Will, POA or Proxy, what do I do?"
              askPara="Although we prefer you make these documents from scratch on our Proxykin, we support the uploading of your original documents. You can upload an existing POA, proxy or will using the upload button during the document creation process."
            />
          </div>
        </div>
        <div className="testinomial_section">
          <h1>What our clients say</h1>
          <p>See what users just like you are saying about Proxykin.</p>
          <div className="testinomial_card_section">
            <Swiper
              className="testinomial_slide"
              spaceBetween={50}
              slidesPerView={1}
              // navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <TestinomialCard />
              </SwiperSlide>
              <SwiperSlide>
                <TestinomialCard />
              </SwiperSlide>
              <SwiperSlide>
                <TestinomialCard />
              </SwiperSlide>
              <SwiperSlide>
                <TestinomialCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
