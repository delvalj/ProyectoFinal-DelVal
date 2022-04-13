<template>
  <div>
    <h1 class="pseudoTitulo">Productos </h1>
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
  </div>
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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,500;1,600&family=Raleway:ital,wght@0,300;1,500;1,600&display=swap');

h1 {
  color: #918696;
  font-family: 'Raleway', monospace;
  font-weight: 600;
}

section {
  font-family: 'Open Sans', monospace;
  font-weight: normal;
}


.pseudoTitulo {
  margin-top: 10px;
  padding: 10px;
  border: 4px dashed #d0d0d0;
}

.pseudoTitulo::before {
  content: 'Los Mejores ';
  color: #020024;
}

.pseudoTitulo::after {
  content: 'Los Encuentras Aqui!';
  color: #d0d0d0;

}

/*h1::before {*/
/*  content: '';*/
/*  animation: flip 6s linear infinite;*/
/*}*/

/*@keyframes flip {*/
/*  from { content: 'Los Mejores Productos ...'; }*/
/*  to { content: 'Los Encuentras Aqui'; }*/
/*}*/

</style>
