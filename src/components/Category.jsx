import { Link } from "react-router-dom"

let Category = () => {
    return(
        <div className="divCategorias">
            <span>Filtrar por precio</span>
            <li><Link to={"/tienda/category/MenorAMayor"}>Menor a mayor precio</Link></li>
            <li><Link to={"/tienda/category/MayorAMenor"}>Mayor a menor precio</Link></li>
            <li><Link to={"/tienda/category/Gratis"}>Gratis</Link></li>
            <span>Filtrar por generos</span>
            <li><Link to={"/tienda/category/rol"}>Juegos de rol</Link></li>
            <li><Link to={"/tienda/category/accion"}>Juegos de accion</Link></li>
        </div>
    )
}

export default Category;