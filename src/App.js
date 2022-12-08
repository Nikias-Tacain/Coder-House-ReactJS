import React from "react";
import './index.css';
import{BrowserRouter,
      Routes,
      Route
}from 'react-router-dom';
import Header from "./components/Header";
import Presentacion from "./components/Presentacion";
import Tienda from "./components/Tienda";
import MenorAMayor from "./components/MenorAMayor";
import MayorAMenor from "./components/MayorAMenor";
import Gratis from "./components/Gratis";
import DetalleTerraria from "./components/DetalleTerraria";
const app = () =>{
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Presentacion />} />
        <Route exact path="/tienda" element={<Tienda />} />
        <Route exact path="/tienda/categorias/MenorAMayor" element={<MenorAMayor />} />
        <Route exact path="/tienda/categorias/MayorAMenor" element={<MayorAMenor />} />
        <Route exact path="/tienda/categorias/Gratis" element={<Gratis />} />
        <Route exact path="/tienda/detalle/terrariaGame" element={<DetalleTerraria />} />
        <Route exact path="/tienda/categorias/MenorAMayor/detalle/terrariaGame" element={<DetalleTerraria />} />
        <Route exact path="/tienda/categorias/MayorAMenor/detalle/terrariaGame" element={<DetalleTerraria />} />
      </Routes>
    </BrowserRouter>
  )
}

export default app;