<template>
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
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  }
}
</script>

<style>
.carousel-caption h1 {
  margin-bottom: 400px;
  font-size: 80px;
  font-family: italic;
}


</style>