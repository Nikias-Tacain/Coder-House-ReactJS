import { Link } from "react-router-dom";
import Categorias from "./Categorias"
let MenorAMayor = () => {
    return(
        <div>
            <div className="divTienda">
                <Categorias />
                <h6>Filtro aplicado: Menor a Mayor</h6>
                <div className="productos">
                    <div className="card tamañoCard">
                        <img src="/lol.jpg" class="card-img-top" alt="Juego de terraria" />
                        <div class="card-body">
                            <h5 class="card-title">League of Legends</h5>
                            <p class="card-text">League of Legends, es un videojuego multijugador en línea desarrollado por Riot Games.</p>
                            <p>FREE</p>
                        </div>
                    </div>
                    <div class="card tamañoCard">
                        <img src="/terrariaGame.jpg" class="card-img-top" alt="Juego de terraria" />
                        <div class="card-body">
                            <h5 class="card-title">Terraria</h5>
                            <p class="card-text">Terraria es un videojuego de acción y aventura producido por el estudio Re-Logic.</p>
                            <p>$999</p>
                            <Link to={"/tienda/categorias/MenorAMayor/detalle/terrariaGame"}>Ver👁️</Link>

                        </div>
                    </div>
                    <div className="card tamañoCard">
                        <img src="/minecraft.jpg" class="card-img-top" alt="Juego de terraria" />
                        <div class="card-body">
                            <h5 class="card-title">Minecraft</h5>
                            <p class="card-text">Minecraft es un videojuego de construcción de tipo "mundo abierto"</p>
                            <p>$2000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenorAMayor;