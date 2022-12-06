import React from "react";
import './index.css';
import{BrowserRouter,
      Routes,
      Route
}from 'react-router-dom';
import Header from "./components/Header";
import Presentacion from "./components/Presentacion";
const app = () =>{
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Presentacion/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default app;