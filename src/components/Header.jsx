import React from "react";
import logo from "../assets/images/logo.svg";
import cart from "../assets/images/cart.svg";
import heart from "../assets/images/heart.svg";
import user from "../assets/images/user.svg";
import { Link } from "react-router-dom";

function Header({ setPanleOpen }) {
  function open() {
    setPanleOpen(true);
  }

  return (
    <header className="header">
      <nav className="nav">
        <div className="container">
          <Link to={"/"} className="nav__logo">
            <img src={logo} alt="" />
            <div>
              <h3 className="nav__title">REACT Fortnite</h3>
              <span className="nav__db">Магазин лучших Fortnite</span>
            </div>
          </Link>

          <ul className="nav__list">
            <li>
              <a className="nav__sum" onClick={open}>
                <img src={cart} alt="" />
                <span className="nav__sum-info">1205 руб.</span>
              </a>
            </li>
            <li className="nav__list_img">
              <Link to={"/Forever"}>
                <img src={heart} alt="" />
              </Link>
              <a href="#">
                <img src={user} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Header;
