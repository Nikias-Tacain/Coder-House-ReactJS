import NavBar from "./components/NavBar";
import React from "react";
import ItemListContainer from "./components/ItemListContainer";
const app = () =>{
  return(
    <div>
      <h1>TRIMAX SHOP</h1>
      <NavBar />
      <ItemListContainer 
      nombre={"Nikias"}
      apellido={"Tacain"}
      edad={19}/>
    </div>
  )
}

export default app;