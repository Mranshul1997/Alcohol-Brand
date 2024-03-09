import React, { useState } from "react";
import "./Permission.css";

const Permission = ({ onAgeVerification }) => {
  const [age, setAge] = useState("");

  const handleEnter = () => {
    if (age) {
      const currentYear = new Date().getFullYear();
      const birthYear = new Date(age).getFullYear();
      const userAge = currentYear - birthYear;

      if (userAge >= 21) {
        onAgeVerification(true);
      } else {
        onAgeVerification(false);
      }
    }
  };

  return (
    <div className="main">
      <div id="logo"></div>
      <div className="para">
        <h2 id="beer">TELL US HOW OLD ARE YOU?</h2>
      </div>
      <div id="country">
        <h3>India</h3>
        <div id="arrow"></div>
      </div>

      <div id="Dob">
        <input
          type="date"
          placeholder="Enter Your DOB."
          value={age}
          onChange={(e) => setAge(e.target.value)} //???????
        />

        <button id="button" onClick={handleEnter}>
          Enter
        </button>
      </div>

      <div id="para">
        <p>
          This website will make use of cookies. By submitting this form, you
          agree to the privacy and cookie policy of this website.
          <br />
          <span id="span">
            To learn more, please read our Privacy Policy and Cookie Policy.🍺
          </span>
        </p>
      </div>
      <div id="remember">
        <div className="gol"></div>
        <h1>Remember me</h1>
      </div>
    </div>
  );
};

export default Permission;
