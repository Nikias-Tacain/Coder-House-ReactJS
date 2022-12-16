import React from "react";
import './index.css';
import{BrowserRouter,
      Routes,
      Route
}from 'react-router-dom';
import Header from "./components/Header";
import Tienda from "./components/Tienda";
import MenorAMayor from "./components/MenorAMayor";
import MayorAMenor from "./components/MayorAMenor";
import Gratis from "./components/Gratis";
import ItemListContainer from "./components/ItemListContainer";
import DetailTerraria from "./components/DetailTerraria";
const app = () =>{
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/tienda" element={<Tienda />} />
        <Route exact path="/tienda/category/MenorAMayor" element={<MenorAMayor />} />
        <Route exact path="/tienda/category/MayorAMenor" element={<MayorAMenor />} />
        <Route exact path="/tienda/category/Gratis" element={<Gratis />} />
        <Route exact path="/tienda/item/:name" element={<DetailTerraria />} />
      </Routes>
    </BrowserRouter>
  )
}

export default app;