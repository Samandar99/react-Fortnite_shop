import React, { useEffect, useRef } from "react";
import back from "../assets/images/back.svg";
import heart from "../assets/images/heart_Cart.svg";
import foto from "../assets/images/image5.jpg";
import addbtn from "../assets/images/addCart.svg";
import { Link, useNavigate } from "react-router-dom";
import Drawer from "../components/Drawer/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { setForevers } from "../redux/slices/foreverSlice";

function Forever({ panelOpen, setPanleOpen }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMounted = useRef(false);

  const foreverItems = useSelector((state) => state.forever.foreverItems);
  console.log(foreverItems);
  useEffect(() => {
  
    const storedForeverItems = JSON.parse(localStorage.getItem("forever"));
    
  
    if (storedForeverItems && isMounted.current) {
      dispatch(setForevers(storedForeverItems));
    }

    // Сохраняем в localStorage при изменении foreverItems
    const json = JSON.stringify(foreverItems);
    localStorage.setItem("forever", json);

    isMounted.current = true;
  }, [dispatch, foreverItems]);
  
  const handleHeartClick = (item) => {
    dispatch(setForevers(item))
  }


  return (
    <>
      {panelOpen && (
        <Drawer setPanleOpen={setPanleOpen} panelOpen={panelOpen} />
      )}
      <div className="forever container">
        <div className="forever__head">
          <button onClick={() => navigate("/")} className="forever__btn">
            <img src={back} alt="" />
          </button>
          <h2 className="forever__title">Мои закладки</h2>
        </div>

        <div className="grid mts">
          {foreverItems.map((item) => (
            <div className="card" key={item.mainId}>
              <button className="card__heart">
                <img src={heart} alt="" />
              </button>
              <img
                className="card__img"
                src={item.displayAssets[0].url || ""}
                alt=""
              />
              <p className="card__info">{item.displayName}</p>
              <div className="card__footer">
                <div>
                  <span>Цена:</span>
                  <p>{item.price.regularPrice || 0} руб.</p>
                </div>
                <button className="card__add">
                  <img src={addbtn} alt="" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Forever;
