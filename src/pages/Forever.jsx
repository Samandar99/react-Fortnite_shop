import React from "react";
import back from "../assets/images/back.svg";
import heart from "../assets/images/heart_Cart.svg";
import foto from "../assets/images/image5.jpg";
import addbtn from "../assets/images/addCart.svg";
import { Link } from "react-router-dom";

function Forever() {
  return (
    <div className="forever container">
      <div className="forever__head">
        <Link to={"/"} className="forever__btn">
          <img src={back} alt="" />
        </Link>
        <h2 className="forever__title">Мои закладки</h2>
      </div>

      <div className="grid mts">
        <div className="card">
          <button className="card__heart">
            <img src={heart} alt="" />
          </button>
          <img className="card__img" src={foto} alt="" />
          <p className="card__info">Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className="card__footer">
            <div>
              <span>Цена:</span>
              <p>12 999 руб.</p>
            </div>
            <button className="card__add">
              <img src={addbtn} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Forever;
