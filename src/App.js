import React from "react";
import './index.css';
import{BrowserRouter,
      Routes,
      Route
}from 'react-router-dom';
import Header from "./components/Header";
import Tienda from "./components/Tienda";
import ItemListContainer from "./components/ItemListContainer";
const app = () =>{
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/tienda" element={<Tienda />} />
      </Routes>
    </BrowserRouter>
  )
}

export default app;