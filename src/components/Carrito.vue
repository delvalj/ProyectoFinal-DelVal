<template>


  <div class="mt-4">
    <h4 class="text-uppercase text-center m-2">Carrito</h4>
    <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3 p-5">
      <b-card-title class="text-center"> HOLA</b-card-title>
      <b-card-text class="text-center p-2">
        Some quick example text to build on the card and make up the bulk of the card's content.
      </b-card-text>

      <div class="quantity-toggle text-center">
        <button @click="decrement()">&mdash;</button>
        <input class="text-center" type="text" :value="quantity" readonly>
        <button @click="increment()">&#xff0b;</button>
      </div>

      <b-card-text class="text-center p-2 fw-bold mt-3">
        Total: $$$$$
      </b-card-text>

      <b-card-text class="text-center m-4">
        <button class="h3 m-2 p-3 ">
          <b-icon icon="trash"></b-icon>
        </button>
        <button class="h3 p-3 m-2">
          Modificar
        </button>

      </b-card-text>

    </b-card>
  </div>

</template>

<script>
export default {
  name: "Carrito",
  data() {
    return {
      quantity: 1
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