import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import search from "../assets/images/search.svg";
import { setSearchs } from "../redux/slices/productsSlice.js";

function Search() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.products.searchTerm);

  console.log(searchTerm);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    dispatch(setSearchs(inputValue));
  };

  return (
    <div className="container d-flex">
      <h2 className="title">Все Fortnite</h2>
      <div className="search">
        <img src={search} alt="" />
        <input
          value={searchTerm}
          onChange={handleInputChange}
          type="text"
          placeholder="Поиск..."
        />
      </div>
    </div>
  );
}

export default Search;
