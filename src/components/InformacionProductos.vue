<template>
  <section class="mt-5 p-4 bg-light col-12">
      <b-row cols="4">
      <b-col v-for="producto in arrayProductos" :key="producto.id">
        <b-card
            :title=producto.tituloProducto
            :img-src=producto.imgProducto
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
          <b-card-text style="height: 8rem; overflow: hidden">
            {{ producto.descripcionProducto }}
          </b-card-text>

          <b-card-text >
            Precio: ${{ producto.precio }}
          </b-card-text>

          <b-button href="#" variant="dark" @click="enviarCarrito(producto.id)">COMPRAR</b-button>
        </b-card>

      </b-col>
    </b-row>

  </section>
</template>

<script>
export default {
  name: "InformacionProductos",
  props: {
    arrayProductos: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {

    }
  },
  methods: {
    enviarCarrito(id) {
      const nuevo = {
        titulo: this.arrayProductos[id].tituloProducto,
        descripcion: this.arrayProductos[id].descripcionProducto,
        precio: this.arrayProductos[id].precio,

      }

      this.$emit("nuevo", nuevo)

    }
  }
}
</script>

<style scoped>

</style>