import React, { useEffect, useState } from "react";
import "./ImgSlider.css";
import Biraaa from "./Components/Biraaa";
import Morgan from "./Components/Morgan";
import { Link } from "react-router-dom";

const data = [
  "https://www.brewer-world.com/wp-content/uploads/2022/10/Bira-91-Beers-Header.jpg",
  "https://hips.hearstapps.com/hmg-prod/images/captain-morgan-spiced-gold-0-0-and-cola-serve-landscape-64f8a22d09ba0.jpg",
  "https://www.natique.com.br/en/wp-content/uploads/2020/06/carlos_I_500x500.png",
  "https://w0.peakpx.com/wallpaper/834/110/HD-wallpaper-bottle-beer-cool-thumbnail.jpg",
];

const ImgSlider = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handlePreviousImage = () => {
    setActiveImageIndex(
      !activeImageIndex ? data.length - 1 : activeImageIndex - 1
    );
  };

  const handleNextImage = () => {
    setActiveImageIndex((activeImageIndex + 1) % data.length);
  };

  useEffect(() => {
    const chng = setTimeout(() => {
      handleNextImage();
    }, 3000);
  });

  return (
    <>
      <div className="flex justify-center align-item-center">
        {data.map(
          (imageUrl, index) =>
            index === activeImageIndex && (
              <img
                id="photu"
                key={index}
                src={imageUrl}
                alt={"alternative"}
                className="w-[100vw] h-[500px] m-20 object-contain"
              />
            )
        )}
        <center>
          <p id="beerabt">
            The beer brands manufactured and marketed by United Breweries Ltd.
            have always been recognized for their international quality. A name
            synonymous with beer in India, Kingfisher stands for excitement,
            youth, and camaraderie.
            <br />
            <br />
            This largest-selling beer in India, commands a significant market
            share in the country with an alternate bottle of beer sold in India
            being a Kingfisher brand. We are also available in 60+ countries
            across the globe.
            <br />
            <br />
            Over the years, the Kingfisher family has expanded to include brands
            and variants that cater to all segments of our audience. The
            Heineken brands augment our portfolio with stellar products of
            global repute, making UB a preferred option for consumers and
            customers alike.
          </p>
        </center>
      </div>
      <br />
      <br />
      <div>
        <center>
          <div id="images">
            <img
              src="https://beercafe.selfcraftdesign.com/wp-content/uploads/2022/02/bira_whitebeer_330mlbottle-removebg-preview.png"
              alt="alt"
            />
            <img
              id="i2"
              src="https://media.captainmorgan.com/media/1051/caribbean-white-rum.png?center=0.5,0.5&mode=crop&width=2028"
              alt=""
            />
          </div>
          <div id="enter">
            <Link to="/Biraaa">
              <button id="BIRA">
                <img
                  src="https://delistedstocks.in/wp-content/uploads/2021/11/B9-Beverages-Bira-Beer-Ltd-logo.webp"
                  alt="alt"
                />
              </button>
            </Link>
            <Link to="/Morgan">
              <button>
                <img
                  id="CAPTAIN-MORGAN"
                  src="https://th.bing.com/th/id/R.82aebd0dfac7cf8bae42acf7eb01e14d?rik=9ZmMI4byqcm0Qw&riu=http%3a%2f%2fstcroixtourism.com%2fcaptainmorgan%2fcaptain-morgan-new.gif&ehk=K49TjYS26mXwtJt7NI%2fxOGM1%2fZykNBM%2b73V4BgKUsSw%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                />
              </button>
            </Link>
          </div>
        </center>
      </div>
    </>
  );
};

export default ImgSlider;
