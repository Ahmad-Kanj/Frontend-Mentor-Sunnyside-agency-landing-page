import reactDom from "react-dom";
import "./App.css";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { data, data2 } from "./data";
function App() {
  const headerNavArray = useRef(["About", "Services", "Projects", "Contact"]);
  const footerNavArray = useRef(["About", "Services", "Projects"]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menu, setMenu] = useState(false);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 1150) {
      setMenu(false);
    }
  }, [windowWidth]);

  return (
    <main>
      <header>
        {windowWidth < 1150 ? (
          <div
            style={
              menu ? { opacity: "1" } : { opacity: "0", pointerEvents: "none" }
            }
            className="mobileMenu"
          >
            <div className="triangle-bottomright"></div>
            {headerNavArray.current.map((element, index) => {
              return (
                <button
                  className={` ${
                    element === "Contact" ? "yellow" : ""
                  } mobileMenuBtn`}
                  key={index}
                >
                  {element}
                </button>
              );
            })}
          </div>
        ) : (
          ""
        )}

        <nav className="headerNav">
          <img className="logo" src="images/logo.svg" alt="logo" />
          {windowWidth < 1150 ? (
            <img
              className="menu"
              src="images/icon-hamburger.svg"
              alt="Menu"
              onClick={() => {
                setMenu(!menu);
              }}
            />
          ) : (
            ""
          )}
          <div className="navElements">
            {headerNavArray.current.map((element, index) => {
              return (
                <button
                  className={`navBtn ${element === "Contact" ? "white" : ""} `}
                  key={index}
                >
                  {element}
                </button>
              );
            })}
          </div>
        </nav>
        <div className="headerContent">
          <h1 className="maintitle">We are creatives</h1>
          <div className="arrow">
            <img src="images/icon-arrow-down.svg" alt="" />
          </div>
        </div>
      </header>
      <section className="cards">
        <div className="card card1">
          <div className="container1">
            <div className="title">Transform your brand</div>
            <div className="content">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </div>
            <a href="http://">Learn More</a>
          </div>
        </div>
        <div className="card2 card"></div>
        <div className="card3 card"></div>
        <div className="card4 card">
          <div className="container2">
            <div className="title">Stand out to the right audience</div>
            <div className="content">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </div>
            <a href="http://">
              <span className="primaryUnderline"> Learn More </span>
            </a>
          </div>
        </div>
        <div className="card5 card">
          <div className="wrapper">
            <div className="cardTitle">Graphic Design</div>
            <div className="cardContent">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </div>
          </div>
        </div>
        <div className="card6 card">
          <div className="wrapper">
            <div className="cardTitle">Photography</div>
            <div className="cardContent">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </div>
          </div>
        </div>
      </section>
      <section className="reviews">
        <h1 className="reviewsTitle">Client testimonials</h1>
        <div className="reviewsContainer">
          {data.map((element) => {
            const { id, name, job, rev, pic } = element;
            return (
              <div key={id} className="review">
                <img className="revImage" src={pic} alt={name} />
                <p className="revText">{rev}</p>
                <h4 className="revName">{name}</h4>
                <p className="revJob">{job}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="gallery">
        {data2.map((element) => {
          const { id, picD, picM } = element;
          return (
            <img
              key={id}
              src={windowWidth > 1150 ? picD : picM}
              alt="gallery-img"
            />
          );
        })}
      </section>
      <footer>
        <img className="footerLogo" src="images/logo.svg" alt="logo" />
        <nav className="footerNav">
          {footerNavArray.current.map((element, index) => {
            return (
              <button className={`footerBtn`} key={index}>
                {element}
              </button>
            );
          })}
        </nav>
        <div className="socailMedia">
          <a className="socialLink" href="http://facebook.com">
            <img src="images/icon-facebook.svg" alt="facebook" />
          </a>
          <a className="socialLink" href="http://instagram.com">
            {" "}
            <img src="images/icon-instagram.svg" alt="instagram" />
          </a>
          <a className="socialLink" href="http://twitter.com">
            <img src="images/icon-twitter.svg" alt="twitter" />
          </a>
          <a className="socialLink" href="http://pintrest.com">
            <img src="images/icon-pinterest.svg" alt="pinterest" />
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
