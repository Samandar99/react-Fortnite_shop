import React, { useEffect, useState } from "react";
import Header from "./components/Header";

import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Forever from "./pages/Forever";
import { setItems, fetchItems } from "./redux/slices/productsSlice";

// db6f9d93-08a0c602-7b295509-163d7509

function App() {
  const [panelOpen, setPanleOpen] = useState(false);
  
  

  

  return (
    <div className="wrapper">
      <Header setPanleOpen={setPanleOpen} />
      <Routes>
        <Route
          path="/"
          element={<Home panelOpen={panelOpen} setPanleOpen={setPanleOpen} />}
        />
        <Route path="/Forever" element={<Forever />} />
      </Routes>
    </div>
  );
}
export default App;
