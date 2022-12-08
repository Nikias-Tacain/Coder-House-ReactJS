import { Link } from "react-router-dom";
const NavBar = () =>{
    return (
        <div className="navBar">
            <ul className="navBar__ul">
                <li className="navBar__ul__li">
                    <Link to={"/"}>INICIO</Link>
                </li>
                <li className="navBar__ul__li">
                    <Link to={"/tienda"}>TIENDA</Link>
                </li>
                <li className="navBar__ul__li">
                    <Link to={"/sobreNosotros"}>SOBRE NOSOTROS</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;