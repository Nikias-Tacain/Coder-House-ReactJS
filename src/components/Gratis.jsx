import Categorias from "./Category"
let Gratis = () => {
    return(
        <div>
            <div className="divTienda">
                <Categorias />
                <div className="productos">
                    <div className="card tamañoCard">
                        <img src="/lol.jpg" class="card-img-top" alt="Juego de terraria" />
                        <div class="card-body">
                            <h5 class="card-title">League of Legends</h5>
                            <p class="card-text">League of Legends, es un videojuego multijugador en línea desarrollado por Riot Games.</p>
                            <p>FREE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gratis;