import Categorias from "./Categorias"
import Productos from "./Productos"

let DivTienda= () =>{
    return(
        <div className="divTienda">
            <Categorias />
            <Productos />
        </div>
    )
}

export default DivTienda;