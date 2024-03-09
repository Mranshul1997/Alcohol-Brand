import React from "react";
import "./CaptainMorgan.css";

export default function CaptainMOrgan() {
  return (
    <div >
      <div>
        <header id="header">
          <img
            src="https://media.captainmorgan.com/media/1543/red-logo.png?mode=crop"  alt=""/>
          <ul>
            <li>COCKTAILS</li>
            <li>SPIRIT DRINKS</li>
            <li>HISTORY OF RUMS</li>
          </ul>
        </header>
      </div>
      <div id="rst">
        <div id="subFrst">
          <h1>
            GET YOUR <br />
            PARTY <br />
            STARTED!
          </h1>
          <br />
          <br />
          <br />
          <button className="bttn">VIEW COCKTAILS</button>
        </div>
      </div>
      <div id="scnd">
        <div id="sub2">
          <center>
            <h1>LATEST AUTUMN DRINKS</h1>
            <p>
              Get ready for the long evenings with these great tasting drinks
            </p>
          </center>
        </div>
        <div id="subScnd">
          <div id="captain">
            <img
              src="https://media.captainmorgan.com/media/1084/cnctest.png?mode=crop"
              alt=""
            />
            <h2>CAPTAIN & COLA</h2>
            <p>
              A classic combination of Captain Morgan Original Spiced Gold,Cola
              and a dash of lime
            </p>
          </div>
          <div id="mojito">
            <img
              src="https://media.captainmorgan.com/media/1116/mojitosquare.png?mode=crop"
              alt=""
            />
            <h2>MOJITO</h2>
            <p>Looking for something fresh? This one's for you.</p>
          </div>
        </div>
        <button className="bttn">MORE RECIPES</button>
      </div>
      <div id="variety1">
        <div id="variety">
          <div className="brand">
            <h2>CAPTAIN MORGAN ORIGINAL SPICED GOLD</h2>
            <img
              src="https://media.captainmorgan.com/media/1126/osgbottle.png?mode=crop&width=2028"
              alt=""
            />
          </div>
          <div className="brand">
            <h2>CAPTAIN MORGAN WHITE RUM</h2>
            <img
              src="https://media.captainmorgan.com/media/1051/caribbean-white-rum.png?center=0.5,0.5&mode=crop&width=2028"
              alt=""
            />
          </div>
          <div className="brand">
            <h2>CAPTAIN MORGAN DARK RUM</h2>
            <img
              src="https://media.captainmorgan.com/media/1019/dark_rum.png?center=0.5,0.5&mode=crop&width=2028"
              alt=""
            />
          </div>
        </div>
        <center>
          <button id="btn">DISCOVER OUR RANGE</button>
        </center>
      </div>

      <div id="history">
        <h1>HISTORY OF RUM</h1>
        <button className="bttn">DISCOVER</button>
      </div>
      <div id="share">
        <h1>SHARE</h1>
        <ul>
          <li><img src="" alt="" /></li>
          <li><img src="https://icon-library.com/images/fb-icon-png/fb-icon-png-29.jpg" alt="" /></li>
          <li><img src="https://seeklogo.com/images/T/twitter-icon-circle-blue-logo-0902F48837-seeklogo.com.png" alt="" /></li>
        </ul>
      </div>
      <div id="follow">
        <h1>FOLLOW CAPTAIN MORGAN</h1>
        <p>Be the first to know about events, promotions and competitons</p>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>

      </div>
      <footer>
        <div>
          <ul id="ul1">
            <li>UK</li>
            <li>SOUTH AFRICA</li>
            <li>GERMANY</li>
            <li>Czech Republic</li>
            <li>Mexico</li>
            <li>USA</li>
          </ul>         
        </div>
        <div id="terms">
          <ul>
            <li>Conditions of Use</li>
            <li>Diageo Privacy Centre</li>
            <li>UGC POLICY</li>
            <li>Accessibility</li>
          </ul>
          <ul>

            <li>Privacy Settings</li>
            <li>Privacy and Cookie Notice</li>
            <li>Resposible Drinking</li>
            <li>DrinkIQ</li>
            <li>theBar.com</li>
          </ul>
        </div>
       <h3>COPYRIGHT@DIAGEO 2023</h3>
       <h4>Please do not share with anyone under the legal purchase age for alcohol. Drink Responsibly.</h4> 

      </footer>
    </div>
  );
}
