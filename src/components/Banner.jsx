import React from "react";
import banner from "../assets/images/banner.png";

function Banner() {
  return (
    <div className="container mt-3">
      <img className="banner_img" src={banner} alt="" />
      <div className="banner__info">
        <h1 className="banner__info-title">
          Fortnite Smith <span>Forever</span>
        </h1>
        <button className="banner__btn">Купить</button>
      </div>
    </div>
  );
}
export default Banner;
