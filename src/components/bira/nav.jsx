import React from "react";
import "./Nav.css";

function nav() {
  return (
    <>
      <div className="sigma">
        <div className="nav">
          <div className="logo"></div>
          <div className="list">
            <ul id="frst">
              <li className="link">OUR BEERS</li>
              <li className="link">BEYOND BEERS</li>
              <li className="link">TAPROOMS</li>
              <li className="link">MAKE PLAY</li>
              <li className="link">SUPER FRESH</li>
              <li className="link">MERCH STORE</li>
              <li className="link">OUR STORY</li>
              <li className="link">CAREERS</li>
            </ul>
          </div>
        </div>
        <div id="slogan">
          <h1 id="make">MAKE PLAY WITH FLAVORS</h1>
          <h3>FOR OUR GENERATION, 🍺 BEER MEANS FLAVOUR ✌️</h3>
          <button id="red">MAKE PLAY </button>
          <button id="blank">OUR BEERS</button>
        </div>
      </div>
      <div className="Flavors">
        <h1 id="our">OUR FLAVORS</h1>
        <div className="photo">
          <div className="card1">
            <h1>TOASTED & CREAMY WHEAT STRONG BEER</h1>
          </div>
          <div className="card2">
            <h1>CRISP & REFRESHING LAGER</h1>
          </div>
          <img
            id="gold"
            src="https://www.bira91.com/img/beer-details-gold/hero-gold.jpg"
            alt=""
          />
          <img
            id="gold2"
            src="https://www.bira91.com/img/beer-details-stout/hero-bg.jpg"
            alt=""
          />
        </div>
        <h3 id="h1">GOLD WHEAT STRONG</h3>
        <h3 id="h2">INDIAN COFFEE BEAN</h3>
      </div>

      <div id="flavor"></div>
      <footer id="footer">
        <div className="Logo2"></div>
        <h3 id="slide">SLIDE INTO OUR DMs</h3>
        <div id="Logos">
          <div id="insta"></div>
          <div id="twitter"></div>
          <div id="facebook"></div>
          <div id="youtube"></div>
        </div>
        <p id="P">
          PLEASE DRINK RESPONSIBLY. © B9 BEVERAGES PVT. LTD. ALL RIGHTS
          RESERVED.
        </p>

        <div id="alig">
          <div id="One">
            <h3>BIRA 91</h3>
            <ul id="ul">
              <li>Our Beers</li>
              <li>Taproom</li>
              <li>Make Play with Falvors</li>
              <li>Make play App</li>
              <li>Mission To Zero</li>
              <li>Merch Store</li>
            </ul>
          </div>

          <div id="Two">
            <ul id="ul2">
              <li>Our Story</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Sendiments</li>
              <li>Investor Relations</li>
            </ul>
          </div>

          <div id="Three">
            <h3>BEERS</h3>
            <ul id="ul3">
              <li>Superfresh White</li>
              <li>Gold</li>
              <li>Boom Super Strong</li>
              <li>Boom Classic</li>
              <li>Blonde Summer Lager</li>
              <li>Rise</li>
            </ul>
          </div>

          <div id="Four">
            <ul id="ul4">
              <li>IPA Brewed With Pomelo</li>
              <li>Malabar Stout</li>
              <li>Light</li>
              <li>Imagined In India</li>
              <li>IPL Beers</li>
            </ul>
          </div>

          <div id="Five">
            <h1>WEBSITE POLICY</h1>
            <h4 id="h5">privacy Policy</h4>
          </div>
        </div>
        <div id="navbar">
          <input
            type="text"
            placeholder="Don't be a stranger. Enter your email ID to stay updated."
          />
          <button>SUBMIT</button>
        </div>
      </footer>
    </>
  );
}

export default nav;
