<template>
  <div class="mt-2 row row-cols-1 row-cols-md-2 g-4">
    <div>
      <div class="m-2 p-2">
        <b-card
            v-for="product in carrito" :key="product.id"
            no-body
            class="overflow-hidden m-2 p-2"
        >
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img :src="product.imagenProducto" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body :title=product.titulo>
                <b-card-text>
                  {{ product.descripcion }}
                </b-card-text>

                <div class="quantity-toggle text-center">
                  <button @click="decrement()">&mdash;</button>
                  <input class="text-center" type="text" :value="quantity" readonly>
                  <button @click="increment()">&#xff0b;</button>

                  <button class="h3 m-2 p-3 text-center">
                    <b-icon icon="trash" @click="eliminarCarrito(carrito.id)"></b-icon>
                  </button>
                </div>

                <b-card-text class="text-center p-2 fw-bold mt-3">
                  Total: ${{ product.precio * quantity }}
                </b-card-text>
              </b-card-body>

            </b-col>
          </b-row>

        </b-card>
      </div>

    </div>
    <div>
      <div
          class="m-2 p-3"
          v-for="product in carrito" :key="product.id"
      >
        <b-card
            header="Header"
            header-tag="header"
            title="Resumen de Compra"
        >
          <b-card-text>Productos: {{ product.titulo }}</b-card-text>
          <b-card-text>El total de tus compras es: {{ product.precio * quantity }}</b-card-text>

          <!--          Modal -->
          <b-button v-model="modalShow" @click="modalShow = !modalShow" href="#" variant="danger">Pagar</b-button>
          <b-modal v-model="modalShow">Muchas Gracias por su compra! Vuelva prontos!</b-modal>

        </b-card>
      </div>
    </div>

  </div>


</template>

<script>
export default {
  name: "Carrito",
  props: {
    carrito: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      quantity: 1,
      modalShow: false
    }
  },
  methods: {
    increment() {
      this.quantity++
    },
    decrement() {
      if (this.quantity === 1) {
        alert('Negative quantity not allowed')
      } else {
        this.quantity--
      }
    },
    eliminarCarrito(id) {
      this.$emit("elimino", id)
      console.log("eliminarCarrito")
    }
  }
}
</script>

<style scoped>


input {
  border: 0;
  border-top: 2px solid #ddd;
  border-bottom: 2px solid #ddd;
  width: 2.5rem;
  text-align: center;
  padding: 0.5rem;
}

button {
  border: 2px solid #ddd;
  padding: .5rem;
  background: #f5f5f5;
  color: #888;
  font-size: 1rem;
  cursor: pointer;
}

</style>
