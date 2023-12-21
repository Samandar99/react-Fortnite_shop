import React, { useCallback, useEffect, useState } from "react";
import heart from "../../assets/images/heart_Cart.svg";
import foto from "../../assets/images/image5.jpg";
import addbtn from "../../assets/images/addCart.svg";
import { useDispatch, useSelector } from "react-redux";
import addeds from "../../assets/images/bi_check-lg.svg";

import {
  fetchItems,
  setCurrentPage,
  setPageCount,
} from "../../redux/slices/productsSlice";
import ReactPaginate from "react-paginate";
import { setForevers } from "../../redux/slices/foreverSlice";

import heart_carts from "../../assets/images/heart_carts.svg";
import { addProducts } from "../../redux/slices/cartSlice";

export default function BlockProducts() {
  const [countPagination, setCountPagination] = useState(0);
  const [, setUpdate] = useState(0);
  const dispatch = useDispatch();
  function selectPage(i) {
    setCountPagination(i);
  }
  const [, forceUpdate] = useState();
  const currentPage = useSelector((state) => state.products.currentPage);
  const itemsPerPage = useSelector((state) => state.products.itemsPerPage);

  const items = useSelector((state) => state.products.items);
  const searchTerm = useSelector((state) => state.products.searchTerm);
  const addedGoods = useSelector((state) => state.cart.itemsProducts);
  // console.log(addedGoods);

  const foreverItems = useSelector((state) => state.forever.foreverItems);

  const filteredItems = items.filter((item) =>
    item.displayName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch, currentPage, itemsPerPage]);

  const startIdx = (currentPage - 1) * itemsPerPage;

  const endIdx = startIdx + itemsPerPage;
  const forceUpdateCallback = useCallback(() => forceUpdate({}), []);
  const displayedItems = filteredItems.slice(startIdx, endIdx);

  const handlePageChange = ({ selected }) => {
    dispatch(setCurrentPage(selected + 1));
  };

  function selectForever(item, i) {
    // const {displayName} = item
    forceUpdateCallback();
    dispatch(setForevers(item));
    setUpdate((prev) => prev + 1);
    // console.log(item);
    // console.log(displayName);
  }

  function addItems(products, id) {
    // console.log(products);
    dispatch(addProducts(products));
    // console.log(id);
  }

  // console.log(foreverItems);
  return (
    <>
      <div className="container grid">
        {displayedItems.map((item, i) => (
          <div className="card" key={`{item.mainId}-${i}`}>
            <button
              className="card__heart"
              onClick={() => selectForever(item, i)}
            >
              {foreverItems.length > 0 &&
              foreverItems.some((forever) => forever.mainId === item.mainId) ? (
                <img src={heart_carts} alt="" />
              ) : (
                <img src={heart} alt="" />
              )}
            </button>
            <img className="card__img" src={item.displayAssets[0].url} alt="" />
            <p className="card__info">{item.displayName}</p>
            <div className="card__footer">
              <div>
                <span>Цена:</span>
                <p>{item.price.regularPrice} руб.</p>
              </div>
              <button
                className="card__add"
                onClick={() => addItems(item, item.mainId)}
              >
                {/* {console.log(item.mainId)} */}
                {addedGoods.length > 0 &&
                addedGoods.some(
                  (addedItem) => addedItem.mainId === item.mainId
                ) ? (
                  <div className="card__b">
                    <img src={addeds} alt="" />
                  </div>
                ) : (
                  <img src={addbtn} alt="" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="paginatsions">
        <ReactPaginate
          className="pag"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageChange}
          pageRangeDisplayed={5}
          pageCount={5}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
}
