import React, { useState, useLayoutEffect } from "react";

import "./Faq.css";
import up from "../../Assets/FAQ - Button Activated.png";
import down from "../../Assets/FAQ - Button Default.png";
const Faq = () => {
  let [show, setShow] = useState({
    f: false,
    f1: false,
    f2: false,
    f3: false,
    f4: false,
    f5: false,
    f6: false,
    f7: false,
    f8: false,
    f9: false,
    f10: false,
    f11: false,
    f12: false,
    f13: false,
    f14: false,
    f15: false,
  });
  const handleOpen = (e) => {
    setShow({ ...show, [e]: !show[e] });
  };
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <div>
            <h2>ProxyKin: Getting Started</h2>
            <div
              className="faq_box"
              style={{
                background: show.f
                  ? "#eff7fc"
                  : "linear-gradient(to right, #2178bfbf 0%, #2178bfba 100%)",
              }}
            >
              <div className="fqb_text">
                <span className={!show.f ? "fqlist_text" : "active"}>
                  1. What is the Estate Enforcer?
                </span>
                <button onClick={() => handleOpen("f")}>
                  <img src={!show.f ? down : up} alt="..." />
                </button>
              </div>
              <div
                className="fqb_para"
                style={{ display: !show.f ? "none" : "flex" }}
              >
                <p>
                  Estate Enforcer (EE) is a cloud-native application that allows
                  you to create, revise, revoke, store and track the use of your
                  power of attorneys, wills and proxies.
                </p>
              </div>
            </div>

            <div
              className="faq_box"
              style={{
                background: show.f1
                  ? "#eff7fc"
                  : "linear-gradient(to right, #2178bfbf 0%, #2178bfba 100%)",
              }}
            >
              <div className="fqb_text">
                <span className={!show.f1 ? "fqlist_text" : "active"}>
                  2. What does POA mean?
                </span>
                <button onClick={() => handleOpen("f1")}>
                  <img src={!show.f1 ? down : up} alt="..." />
                </button>
              </div>
              <div
                className="fqb_para"
                style={{ display: !show.f1 ? "none" : "flex" }}
              >
                <p>POA is an acronym for Power Of Attorney.</p>
              </div>
            </div>

            <div
              className="faq_box"
              style={{
                background: show.f2
                  ? "#eff7fc"
                  : "linear-gradient(to right, #2178bfbf 0%, #2178bfba 100%)",
              }}
            >
              <div className="fqb_text">
                <span className={!show.f2 ? "fqlist_text" : "active"}>
                  3. What is a power of attorney?
                </span>
                <button onClick={() => handleOpen("f2")}>
                  <img src={!show.f2 ? down : up} alt="..." />
                </button>
              </div>
              <div
                className="fqb_para"
                style={{ display: !show.f2 ? "none" : "flex" }}
              >
                <p>
                  A power of attorney is normally in the form of a document that
                  authorizes someone else, usually someone you trust, to make
                  decisions on your behalf when you cannot, such as when you are
                  physically and/or mentally incapable or you are absent.
                </p>
              </div>
            </div>

            <div
              className="faq_box"
              style={{
                background: show.f3
                  ? "#eff7fc"
                  : "linear-gradient(to right, #2178bfbf 0%, #2178bfba 100%)",
              }}
            >
              <div className="fqb_text">
                <span className={!show.f3 ? "fqlist_text" : "active"}>
                  4. Why do I need a power of attorney?
                </span>
                <button onClick={() => handleOpen("f3")}>
                  <img src={!show.f3 ? down : up} alt="..." />
                </button>
              </div>
              <div
                className="fqb_para"
                style={{ display: !show.f3 ? "none" : "flex" }}
              >
                <p>
                  Life is full of surprises and unfortunately, just because you
                  are mentally and/or physically incapable of making decisions
                  for yourself or for your dependents doesn't mean they don't
                  need to be made. We take for granted how often we are required
                  to make decisions on daily life affairs. Without a power of
                  attorney in place you have no control in deciding who you
                  trust most to continue to make those decisions on your behalf.
                  These decisions include your medical care and how to be
                  treated, such as just after a catastrophic car accident, while
                  at the same time someone needs to decide how to continue to
                  pay your ongoing mortgage payments and your children's
                  tuition. Without a power of attorney, someone may have to be
                  appointed through the courts or by the government, which could
                  be costly, inhibitive and take a really long time when urgency
                  is most important.
                </p>
              </div>
            </div>

            <div
              className="faq_box"
              style={{
                background: show.f4
                  ? "#eff7fc"
                  : "linear-gradient(to right, #2178bfbf 0%, #2178bfba 100%)",
              }}
            >
              <div className="fqb_text">
                <span className={!show.f4 ? "fqlist_text" : "active"}>
                  5. What is a will?
                </span>
                <button onClick={() => handleOpen("f4")}>
                  <img src={!show.f4 ? down : up} alt="..." />
                </button>
              </div>
              <div
                className="fqb_para"
                style={{ display: !show.f4 ? "none" : "flex" }}
              >
                <p>
                  A will, also known as a "last will and testament", normally in
                  the form of a document, provides your instructions as to who
                  you want to be in charge of your money, property and
                  investments of any kind, and what to do with them, including
                  who should get what and how.
                </p>
              </div>
            </div>

            <div
              className="faq_box"
              style={{
                background: show.f5
                  ? "#eff7fc"
                  : "linear-gradient(to right, #2178bfbf 0%, #2178bfba 100%)",
              }}
            >
              <div className="fqb_text">
                <span className={!show.f5 ? "fqlist_text" : "active"}>
                  6. Why do I need a will?
                </span>
                <button onClick={() => handleOpen("f5")}>
                  <img src={!show.f5 ? down : up} alt="..." />
                </button>
              </div>
              <div
                className="fqb_para"
                style={{ display: !show.f5 ? "none" : "flex" }}
              >
                <p>
                  If you die without a will and you are married, have children
                  and assets, your wife may not get anything or very little, and
                  your children may have to wait a long time before they can
                  access your estate to pay for their care. In most cases it
                  will be up to the Courts to appoint someone to administer your
                  estate, and it may not be your surviving spouse or adult
                  children. In some cases if you are not married or do not have
                  a surviving spouse; if your minor children are entitled to any
                  funds from your estate, the government and/or courts may
                  decide how those funds should be invested and what amounts
                  should be paid for your children's maintenance and care. Most
                  importantly, if both you and your spouse are deceased, it will
                  be up to the courts and/or government to decide who should act
                  as guardians of your children. And then once your spouse and
                  children obtain access to your estate it leaves them to fight
                  among themselves in deciding who gets what and why.
                </p>
              </div>
            </div>

            <div
              className="faq_box"
              style={{
                background: show.f6
                  ? "#eff7fc"
                  : "linear-gradient(to right, #2178bfbf 0%, #2178bfba 100%)",
              }}
            >
              <div className="fqb_text">
                <span className={!show.f6 ? "fqlist_text" : "active"}>
                  7. If I have an existing Will, POA or Proxy, what do I do?
                </span>
                <button onClick={() => handleOpen("f6")}>
                  <img src={!show.f6 ? down : up} alt="..." />
                </button>
              </div>
              <div
                className="fqb_para"
                style={{ display: !show.f6 ? "none" : "flex" }}
              >
                <p>
                  Although we prefer you make these documents from scratch on
                  our Estate Enforcer, we support the uploading of your original
                  documents. You can upload an existing POA, proxy or will using
                  the upload button during the document creation process. We
                  accept the following file formats: .jpg, .pdf, and .rtf. The
                  onus is on you to ensure that you are uploading the
                  appropriate document. We will eventually verify and check the
                  documents to ensure they are of the correct type. We have a
                  strict policy that we enforce to not allow inappropriate
                  documents to be submitted through Estate Enforcer.
                </p>
              </div>
            </div>

            <div
              className="faq_box"
              style={{
                background: show.f7
                  ? "#eff7fc"
                  : "linear-gradient(to right, #2178bfbf 0%, #2178bfba 100%)",
              }}
            >
              <div className="fqb_text">
                <span className={!show.f7 ? "fqlist_text" : "active"}>
                  8. What if I don’t have an attorney or 3rd party witness to
                  verify my completed POA?
                </span>
                <button onClick={() => handleOpen("f7")}>
                  <img src={!show.f7 ? down : up} alt="..." />
                </button>
              </div>
              <div
                className="fqb_para"
                style={{ display: !show.f7 ? "none" : "flex" }}
              >
                <p>
                  No need to worry. Estate Enforcer will allow you to add an
                  attorney or witness later to the document once you have found
                  one that is willing to participate in your POA.{" "}
                </p>
              </div>
            </div>

            <div
              className="faq_box"
              style={{
                background: show.f8
                  ? "#eff7fc"
                  : "linear-gradient(to right, #2178bfbf 0%, #2178bfba 100%)",
              }}
            >
              <div className="fqb_text">
                <span className={!show.f8 ? "fqlist_text" : "active"}>
                  9. Who is in My People?
                </span>
                <button onClick={() => handleOpen("f8")}>
                  <img src={!show.f8 ? down : up} alt="..." />
                </button>
              </div>
              <div
                className="fqb_para"
                style={{ display: !show.f8 ? "none" : "flex" }}
              >
                <p>
                  My People is Estate Enforcer's way of keeping track of your
                  next of kin, confidants, and other trusted people within your
                  network that you may use as your attorney, executor or proxy,
                  or be named as your beneficiaries, and most importantly you
                  may share your power of attorneys, wills and proxies with
                  them. Whoever is part of, or named in, your POAs, Wills or
                  Proxies in real life should be stored here as a contact. This
                  includes your family members (who are usually the
                  beneficiaries), witnesses, and any professionals that are
                  relevant in this process such as your trusted lawyer, banker,
                  accountant, doctor, financial adviser, etc.
                </p>
              </div>
            </div>

            <div
              className="faq_box"
              style={{
                background: show.f9
                  ? "#eff7fc"
                  : "linear-gradient(to right, #2178bfbf 0%, #2178bfba 100%)",
              }}
            >
              <div className="fqb_text">
                <span className={!show.f9 ? "fqlist_text" : "active"}>
                  10. When the time comes to use one of these documents, how do
                  I go about doing that?
                </span>
                <button onClick={() => handleOpen("f9")}>
                  <img src={!show.f9 ? down : up} alt="..." />
                </button>
              </div>
              <div
                className="fqb_para"
                style={{ display: !show.f9 ? "none" : "flex" }}
              >
                <p>
                  Given you had created your power of attorney, will or proxy
                  correctly, its authenticity was verified as well as you, and
                  you agreed for it to be legally binding, the information
                  provided by you will be safely and securely called and
                  assembled whenever it is to be used by your attorney, executor
                  or proxy. The power of attorney, will or proxy is accessible
                  from the Estate Enforcer app or our companion website,
                  “estateenforcer.com”. At that point in time you, and whoever
                  you grant access to, can view the details of your power of
                  attorney, proxy or will. Also, at any time you can check any
                  activity your POA, Will or Proxy may have had since the last
                  time you looked at it.
                </p>
              </div>
            </div>

            <div
              className="faq_box"
              style={{
                background: show.f10
                  ? "#eff7fc"
                  : "linear-gradient(to right, #2178bfbf 0%, #2178bfba 100%)",
              }}
            >
              <div className="fqb_text">
                <span className={!show.f10 ? "fqlist_text" : "active"}>
                  11. What kind of notifications will I get?
                </span>
                <button onClick={() => handleOpen("f10")}>
                  <img src={!show.f10 ? down : up} alt="..." />
                </button>
              </div>
              <div
                className="fqb_para"
                style={{ display: !show.f10 ? "none" : "flex" }}
              >
                <p>
                  You will be notified when and where your power of attorneys,
                  wills and proxies are being used. You will be notified when
                  someone has accepted, denied or resigned as your attorney,
                  executor or proxy, or as part of your People. You will be
                  notified when Estate Enforcer detects any potential misuses
                  and searches of your documents. You will be notified when your
                  documents have been initially created or recently modified.
                </p>
              </div>
            </div>

            <div
              className="faq_box"
              style={{
                background: show.f11
                  ? "#eff7fc"
                  : "linear-gradient(to right, #2178bfbf 0%, #2178bfba 100%)",
              }}
            >
              <div className="fqb_text">
                <span className={!show.f11 ? "fqlist_text" : "active"}>
                  12. What happens when I no longer need a power of attorney,
                  will or proxy through Estate Enforcer?
                </span>
                <button onClick={() => handleOpen("f11")}>
                  <img src={!show.f11 ? down : up} alt="..." />
                </button>
              </div>
              <div
                className="fqb_para"
                style={{ display: !show.f11 ? "none" : "flex" }}
              >
                <p>
                  If you no longer need the power of attorney, proxy or will you
                  created, you can simply deactivate (revoke) and archive it. At
                  that point, the POA, Will or Proxy loses all its authoritative
                  power and is simply stored away. Even though it's kept for
                  your records, it can no longer be used in the legal sense.
                  This will allow you to easily avoid having multiple versions
                  of your power of attorney, will or proxy in circulation. The
                  key relevant parties involved in the document such as your
                  executors, attorneys, witnesses, lawyers, etc. will only be
                  notified in real-time that your document has been revoked.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2>Blockchain: Trust and Safety</h2>
            <div
              className="faq_box"
              style={{
                background: show.f12
                  ? "#eff7fc"
                  : "linear-gradient(to right, #2178bfbf 0%, #2178bfba 100%)",
              }}
            >
              <div className="fqb_text">
                <span className={!show.f12 ? "fqlist_text" : "active"}>
                  13. What is Data Provenance?
                </span>
                <button onClick={() => handleOpen("f12")}>
                  <img src={!show.f12 ? down : up} alt="..." />
                </button>
              </div>
              <div
                className="fqb_para"
                style={{ display: !show.f12 ? "none" : "flex" }}
              >
                <p>
                  The concept of provenance originates in the fine art world
                  where it describes the documented evidence that’s used to
                  prove that a work of art has not been altered, forged,
                  reproduced, or stolen.
                  <br />
                  <p>
                    Data provenance is a historical record for any piece of
                    data. Data provenance systems track changes that are made to
                    data, where data originates and moves to, and who makes
                    changes to it over time. In other words, data provenance is
                    “showing your work” in a database. This historical record of
                    information can then be trusted for data validation and
                    audit purposes.
                  </p>
                  <p>
                    The provenance of our customers POAs /Proxies/Wills is
                    accomplished by Estate Enforcer using industry standard
                    blockchain technology.
                  </p>
                </p>
              </div>
            </div>

            <div
              className="faq_box"
              style={{
                background: show.f13
                  ? "#eff7fc"
                  : "linear-gradient(to right, #2178bfbf 0%, #2178bfba 100%)",
              }}
            >
              <div className="fqb_text">
                <span className={!show.f13 ? "fqlist_text" : "active"}>
                  14. Estate Enforcer evidence in legal proceedings
                </span>
                <button onClick={() => handleOpen("f13")}>
                  <img src={!show.f13 ? down : up} alt="..." />
                </button>
              </div>
              <div
                className="fqb_para"
                style={{ display: !show.f13 ? "none" : "flex"}}
              >
                <p>
                  A blockchain-based POA/Wills/Proxies storage and provenance
                  system could revolutionize the use of digital
                  POA/Wills/Proxies( evidence) in legal proceedings. By
                  utilizing a blockchainpowered distributed ledger, the
                  "evidence" could automatically be uploaded to a peer-to-peer
                  network and appended with provenance information like time and
                  date stamps, i.p. addresses, IMEI number, MAC addresses etc.
                  Since blockchains are immutable, prosecutors, defendants, or
                  judges would not be able to modify the "evidence" to serve
                  their own agenda, and all parties would have greater assurance
                  that the "evidence" is completely authentic and unedited.{" "}
                </p>
              </div>
            </div>
            <div
              className="faq_box"
              style={{
                background: show.f14
                  ? "#eff7fc"
                  : "linear-gradient(to right, #2178bfbf 0%, #2178bfba 100%)",
              }}
            >
              <div className="fqb_text">
                <span className={!show.f14 ? "fqlist_text" : "active"}>
                  15. What is My Estate?
                </span>
                <button onClick={() => handleOpen("f14")}>
                  <img src={!show.f14 ? down : up} alt="..." />
                </button>
              </div>
              <div
                className="fqb_para"
                style={{ display: !show.f14 ? "none" : "flex" }}
              >
                <p>
                  The estate is our comprehensive and convenient way of keeping
                  track of all the items in your estate that are impacted by
                  your Wills, Power of Attorneys, and more. These range from
                  vehicles to digital assets. As one makes the specific bequests
                  in their Wills, their Estate populates with said items and
                  their granular bequeathment details. One can track all
                  relevant metadata for each estate item and understand their
                  estate and its distribution at a high level through the estate
                  summaries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Faq;
