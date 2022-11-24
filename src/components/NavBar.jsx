import CardWidget from "../components/CardWidget";
const NavBar = () =>{
    return (
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <button class="nav-link active">INICIO</button>
            </li>
            <li class="nav-item">
                <button class="nav-link">TIENDA</button>
            </li>
            <li class="nav-item">
                <button class="nav-link">SOBRE NOSOTROS</button>
            </li>
            <CardWidget/>
        </ul>
    )
}

export default NavBar;