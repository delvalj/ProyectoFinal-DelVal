<template>
  <section class="p-4 bg-light col-12">
    <b-row cols="4">
      <b-col v-for="producto in productos" :key="producto.id">
        <b-card
            :title=producto.tituloProducto
            :img-src=producto.imgProducto
            img-top
            tag="article"
            style="max-width: 16rem;"
            class="m-3"
        >
          <b-card-text style="height: 8rem; overflow: hidden">
            {{ producto.descripcionProducto }}
          </b-card-text>

          <b-card-text>
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
    // arrayProductos: {
    //   type: Array,
    //   default: () => []
    // },
  },
  created() {
    this.$store.dispatch('getProducts')
  },
  data() {
    return {
      productos: this.$store.state.productos
    }
  },
  methods: {
    enviarCarrito(id) {
      const nuevo = {
        titulo: this.productos[id].tituloProducto,
        descripcion: this.productos[id].descripcionProducto,
        precio: this.productos[id].precio,
        imagenProducto: this.productos[id].imgProducto
      }
      this.$emit("nuevo", nuevo)
    }
  }
}
</script>

<style scoped>

</style>