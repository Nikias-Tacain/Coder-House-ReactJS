let Presentacion = () =>{
    return(
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-4 imgPortada" src="./finalFantasy.jpg" alt="Final Fantasy Game"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-4 imgPortada" src="./lostArk.jpg" alt="Lost Ark Game"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-4 imgPortada" src="./theCrew2.webp" alt="The Crew 2 Game"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon caler" aria-hidden="true"></span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon caler" aria-hidden="true"></span>
  </a>
</div>
  )
}
export default Presentacion;