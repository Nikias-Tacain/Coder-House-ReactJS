import { Link } from "react-router-dom"

let Categorias = () => {
    return(
        <div className="divCategorias">
            <span>Filtrar por precio</span>
            <li><Link to={"/tienda/categorias/MenorAMayor"}>Menor a mayor precio</Link></li>
            <li><Link to={"/tienda/categorias/MayorAMenor"}>Mayor a menor precio</Link></li>
            <li><Link to={"/tienda/categorias/Gratis"}>Gratis</Link></li>
            <span>Filtrar por generos</span>
            <li><Link to={"/tienda/categorias/rol"}>Juegos de rol</Link></li>
            <li><Link to={"/tienda/categorias/accion"}>Juegos de accion</Link></li>
        </div>
    )
}

export default Categorias;