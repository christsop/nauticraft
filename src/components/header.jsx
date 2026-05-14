import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <span className="intro-eyebrow">Elite Marine Services • Greece</span>
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span>Ναυτική Αριστεία</span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#about"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Μαθετε περισσότερα
                </a>
                <a className="hero-scroll-hint" href="#about">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    aria-hidden="true">
                    <path d="M12 5v14M5 12l7 7 7-7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
