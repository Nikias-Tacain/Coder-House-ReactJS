let DetalleTerraria = () => {
    return(
        <div className="terrariaGame">
            <div>
                <h1>Terraria</h1>
                <p>Terraria es un videojuego de mundo abierto en 2D. Contiene elementos de construcción, exploración, aventura y combate.</p>
                <p>El juego comienza en un mundo creado de forma aleatoria. El usuario puede personalizar a su  personaje; cambiando el estilo de su pelo, camisa, pantalones, así como el color de los mismos, su género, entre otras personalizaciones que permite el juego. El jugador tiene a su disposición herramientas de distintos tipos, las cuales sirven para moldear el mundo y trabajar los recursos que el jugador encuentre (tales como minerales). Así mismo, el jugador inicia con una cantidad limitada de vida y puntos de magia, los cuales puede incrementar. También es posible mejorar al personaje incrementando su ataque, defensa, velocidad, entre otros.</p>
                <p>WIKI FANDOM: <a href="https://terraria.fandom.com/es/wiki/Wiki_Terraria">Click aca!</a></p>
                <div className="sectionPrice">
                    <span>$999</span>
                    <button className="buttonTerraria">AGREGAR AL CARRITO</button>
                </div>
            </div>
            <div>
                <img src="/terrariaGame.jpg" alt="Terraria juego" />
                <p>Portada del juego</p>
            </div>
        </div>
    )
}

export default DetalleTerraria;