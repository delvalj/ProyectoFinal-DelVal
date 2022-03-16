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
          <b-card-text>
            {{ producto.descripcionProducto }}
            {{ producto.precio }}
          </b-card-text>

          <b-button href="#" variant="dark" @click="enviarCarrito">COMPRAR </b-button>
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
    enviarCarrito() {
      const nuevo = {
        titulo: this.arrayProductos[0].tituloProducto,
        precio: this.arrayProductos[0].precio,
      }

      this.$emit("nuevo", nuevo)

    }
  }
}
</script>

<style scoped>

</style>