import React from "react";
import image from "../../assets/images/image5.jpg";
import close from "../../assets/images/close.svg";
import Empty from "./Empty";
import { useDispatch, useSelector } from "react-redux";
import { delProducts } from "../../redux/slices/cartSlice";

function Drawer({ setPanleOpen }) {
  const drawerProducts = useSelector((state) => state.cart.itemsProducts);
  const totalAllPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  function dellItems(id) {
    // console.log(id);

    dispatch(delProducts(id));
  }

  function closes() {
    setPanleOpen(false);
  }

  function handleDrawerClick(event) {
    event.stopPropagation();
  }

  return (
    <div className="block" onClick={closes}>
      <div className="drawer" onClick={handleDrawerClick}>
        {drawerProducts.length > 0 ? (
          <div>
            <h3 className="drawer__title">Корзина</h3>

            <div className="drawer__items">
              {drawerProducts.map((el) => (
                <div className="drawer__item" key={el.mainId}>
                  <img
                    className="drawer__img"
                    src={el.displayAssets[0].url}
                    alt=""
                  />
                  <div className="drawer__item-info">
                    <p>{el.displayName}</p>
                    <b className="drawer__price">
                      {el.price.regularPrice} руб.
                    </b>
                  </div>
                  <button
                    className="drawer__item-btn"
                    onClick={() => dellItems(el.mainId)}
                  >
                    <img src={close} alt="" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <Empty />
        )}
        {drawerProducts.length > 0 && (
          <div className="drawer__footer">
            <div className="drawer__total">
              <span>Итого: </span>
              <b>{totalAllPrice} руб. </b>
            </div>
            <div className="drawer__tax">
              <span>Налог 5%: </span>
              <b>1074 руб. </b>
            </div>
            <button className="drawer__btn">Оформить заказ</button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Drawer;
