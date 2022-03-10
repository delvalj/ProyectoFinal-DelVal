<template>
  <section class="mt-5 p-4 bg-light col-12">
      <b-row cols="4">
      <b-col v-for="producto in productos" :key="producto.id">
        <b-card
            :title=producto.tituloProducto
            :img-src=producto.imgProducto
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
          <b-card-text>
            {{ producto.descripcionProducto }}
            {{ producto.precio }}
          </b-card-text>
          <b-button href="#" variant="dark">COMPRAR</b-button>
        </b-card>

      </b-col>
    </b-row>
  </section>
</template>

<script>
export default {
  name: "InformacionProductos",

  data() {
    return {
      productos: [{
        id: 1,
        tituloProducto: 'titulo del producto 1',
        imgProducto: 'https://picsum.photos/600/300/?image=555',
        descripcionProducto: "Lorem ipsum dolor sit amet, " +
            "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        precio: 1500
      },

        {
          id: 2,
          tituloProducto: 'titulo del producto 2',
          imgProducto: 'https://picsum.photos/600/300/?image=254',
          descripcionProducto: "Lorem ipsum dolor sit amet, " +
              "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          precio: 2500
        },

        {
          id: 3,
          tituloProducto: 'titulo del producto 3',
          imgProducto: 'https://picsum.photos/600/300/?image=253',
          descripcionProducto: "Lorem ipsum dolor sit amet, " +
              "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          precio: 1700
        },

        {
          id: 4,
          tituloProducto: 'titulo del producto 4',
          imgProducto: 'https://picsum.photos/600/300/?image=252',
          descripcionProducto: "Lorem ipsum dolor sit amet, " +
              "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          precio: 1200
        },

        {
          id: 5,
          tituloProducto: 'titulo del producto 5',
          imgProducto: 'https://picsum.photos/600/300/?image=251',
          descripcionProducto: "Lorem ipsum dolor sit amet, " +
              "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          precio: 1500
        },

        {
          id: 6,
          tituloProducto: 'titulo del producto 6',
          imgProducto: 'https://picsum.photos/600/300/?image=259',
          descripcionProducto: "Lorem ipsum dolor sit amet, " +
              "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          precio: 725
        },
      ]
    }
  },

}
</script>

<style scoped>

</style>