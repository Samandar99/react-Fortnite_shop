import React, { useEffect, useState } from "react";
import heart from "../../assets/images/heart_Cart.svg";
import foto from "../../assets/images/image5.jpg";
import addbtn from "../../assets/images/addCart.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchItems,
  setCurrentPage,
  setPageCount,
} from "../../redux/slices/productsSlice";
import ReactPaginate from "react-paginate";

export default function BlockProducts() {
  const [countPagination, setCountPagination] = useState(0);

  let paginatsions = [1, 2, 3, 4];

  const dispatch = useDispatch();
  function selectPage(i) {
    setCountPagination(i);
  }

  const currentPage = useSelector((state) => state.products.currentPage);
  const itemsPerPage = useSelector((state) => state.products.itemsPerPage);

  const items = useSelector((state) => state.products.items);
  const searchTerm = useSelector((state) => state.products.searchTerm);

  const filteredItems = items.filter((item) =>
    item.displayName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch, currentPage, itemsPerPage]);

  const startIdx = (currentPage - 1) * itemsPerPage;

  const endIdx = startIdx + itemsPerPage;

  const displayedItems = filteredItems.slice(startIdx, endIdx);

  const handlePageChange = ({ selected }) => {
    dispatch(setCurrentPage(selected + 1));
  };

  console.log(displayedItems);

  console.log(items);

  return (
    <>
      <div className="container grid">
        {displayedItems.map((item) => (
          <div className="card" key={item.mainId}>
            <button className="card__heart">
              <img src={heart} alt="" />
            </button>
            <img className="card__img" src={item.displayAssets[0].url} alt="" />
            <p className="card__info">{item.displayName}</p>
            <div className="card__footer">
              <div>
                <span>Цена:</span>
                <p>{item.price.regularPrice} руб.</p>
              </div>
              <button className="card__add">
                <img src={addbtn} alt="" />
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
