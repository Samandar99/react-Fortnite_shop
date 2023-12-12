import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Search from "../components/Search";
import BlockProducts from "../components/BlockProducts";
import Drawer from "../components/Drawer/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../redux/slices/productsSlice";
import Skeleton from "../components/BlockProducts/Skeleton";

function Home({ panelOpen, setPanleOpen }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const skeletonItems = Array.from({ length: 7 }, (_, index) => index + 1);

  const items = useSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(fetchItems());

    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [dispatch]);

  return (
    <>
      <Banner />
      <Search />

      {loading ? (
        skeletonItems.map((skeleton, i) => <Skeleton key={i} />)
      ) : (
        <BlockProducts />
      )}

      {panelOpen && <Drawer setPanleOpen={setPanleOpen} />}
    </>
  );
}
export default Home;
