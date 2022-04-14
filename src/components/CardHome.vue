<template>
  <div>
    <div>
      <b-card
          overlay
          img-src="https://picsum.photos/900/400/?image=1080"
          img-alt="Card Image"
          text-variant="white"
          sub-title="HOME"
      >
        <div class="mt-5">
          <b-card-text class="fst-italic">
            <h1 class="tituloHome">Bienvenidos a Nuestra Página Oficial</h1>
            Some quick example text to build on the card and make up the bulk of the card's content.
          </b-card-text>
          <router-link to="/productos">
            <b-button class="m-2 p-2 btnHome">Productos</b-button>
          </router-link>

          <router-link to="/about">
            <b-button class="m-2 p-2 text-white btnHome">Sobre Nosotros</b-button>
          </router-link>

        </div>
      </b-card>
    </div>

    <div>
      <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000"
          fade
          indicators
          img-width="1024"
          img-height="480"
          controls
      >
        <b-carousel-slide
            caption-tag="h1"
            caption="Bienvenidos a Nuestra Pagina"
            img-src="https://picsum.photos/1024/480/?image=10"
        ></b-carousel-slide>
        <b-carousel-slide
            caption-tag="body"
            caption="Disfruta los mejores productos!"
            img-src="https://picsum.photos/1024/480/?image=12"
        ></b-carousel-slide>
        <b-carousel-slide
            caption-tag="body"
            caption="Estamos para ayudate en lo que necesites!"
            img-src="https://picsum.photos/1024/480/?image=22"
        ></b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardHome"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,500;1,600&family=Raleway:ital,wght@0,700;0,800;1,600;1,700;1,800&display=swap');

.tituloHome {
  font-size: 60px;
  font-family: 'Raleway', monospace;
  font-weight: 600;
  /*font-style: oblique;*/
}

.btnHome {
  background-color: #A93744;
  font-weight: bold;
  font-style: oblique;
}

.btnHome:hover {
  background-color: #4D191F;

}
</style>
