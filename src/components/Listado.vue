<template>
  <div class="bg-light p-3">
    <b-list-group class="m-5" v-for="(producto) in productos" :key="producto.id">
      <b-list-group-item >
        {{ producto.tituloProducto }}
      </b-list-group-item>
      <b-list-group-item >
        {{ producto.precio }}
      </b-list-group-item>
      <b-list-group-item >
        {{ producto.descripcionProducto }}
      </b-list-group-item>

    </b-list-group>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Listado",
  data() {
    return {
      productos: [],
    }
  },
  created() {
    axios.get("https://6238c7400a54d2ceab7a0c3e.mockapi.io/productos").then((result) => {
      this.productos = (result.data)
      // console.log("result.data " + JSON.stringify(result.data))
      // console.dir("result.dir " + JSON.stringify(result.data))
      console.log("productos array " + JSON.stringify(this.productos))
    })
  },
  methods: {}
}
</script>

<style scoped>

</style>