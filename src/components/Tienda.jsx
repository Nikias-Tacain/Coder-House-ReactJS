import DivTienda from "./DivTienda";
import ProductList from "./ProductList";
let Tienda = () => {
    return(
        <div>
            <h2 className="tituloTienda">Bienvenidos a la tienda</h2>
            <DivTienda />
            <ProductList />
        </div>
        
    )
}

export default Tienda;