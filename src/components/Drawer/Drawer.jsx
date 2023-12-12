import React from "react";
import image from "../../assets/images/image5.jpg";
import close from "../../assets/images/close.svg";
import Empty from "./Empty";

function Drawer({ setPanleOpen }) {
  function closes() {
    setPanleOpen(false);
  }

  function handleDrawerClick(event) {
    event.stopPropagation();
  }

  return (
    <div className="block" onClick={closes}>
      <div className="drawer" onClick={handleDrawerClick}>
        <div>
          <h3 className="drawer__title">Корзина</h3>

          <div className="drawer__items">
            <div className="drawer__item">
              <img className="drawer__img" src={image} alt="" />
              <div className="drawer__item-info">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b className="drawer__price">12 999 руб.</b>
              </div>
              <button className="drawer__item-btn">
                <img src={close} alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="drawer__footer">
          <div className="drawer__total">
            <span>Итого: </span>
            <b>21 498 руб. </b>
          </div>
          <div className="drawer__tax">
            <span>Налог 5%: </span>
            <b>1074 руб. </b>
          </div>
          <button className="drawer__btn">Оформить заказ</button>
        </div>
        {/* <Empty /> */}
      </div>
    </div>
  );
}
export default Drawer;
