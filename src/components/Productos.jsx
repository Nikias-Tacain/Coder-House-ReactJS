import { Link } from "react-router-dom";

let Productos = () => {
    return(
        <div className="productos">
            <div class="card tamañoCard">
                <img src="../terrariaGame.jpg" class="card-img-top" alt="Juego de terraria" />
                <div class="card-body">
                    <h5 class="card-title">Terraria</h5>
                    <p class="card-text">Terraria es un videojuego de acción y aventura producido por el estudio Re-Logic.</p>
                    <p>$999</p>
                    <Link to={"/tienda/detalle/terrariaGame"}>Ver👁️</Link>
                </div>
            </div>
            <div className="card tamañoCard">
            <img src="../minecraft.jpg" class="card-img-top" alt="Juego de terraria" />
                <div class="card-body">
                    <h5 class="card-title">Minecraft</h5>
                    <p class="card-text">Minecraft es un videojuego de construcción de tipo "mundo abierto"</p>
                    <p>$2000</p>
                    <Link to={"/tienda/:name"}>Ver👁️</Link>
                </div>
            </div>
            <div className="card tamañoCard">
            <img src="../lol.jpg" class="card-img-top" alt="Juego de terraria" />
                <div class="card-body">
                    <h5 class="card-title">League of Legends</h5>
                    <p class="card-text">League of Legends, es un videojuego multijugador en línea desarrollado por Riot Games.</p>
                    <p>FREE</p>
                    <Link to={"/tienda/:name"}>Ver👁️</Link>
                </div>
            </div>
        </div>
        
    )
}
export default Productos;