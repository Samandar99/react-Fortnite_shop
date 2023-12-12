import React from "react";
import empty from "../../assets/images/cartEmpty.svg";

function Empty() {
  return (
    <div className="empty">
      <img src={empty} alt="" />
      <h3>Корзина пустая</h3>
      <p className="empty__text">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
      <button className="empty__btn">Вернуться назад</button>
    </div>
  );
}
export default Empty;
