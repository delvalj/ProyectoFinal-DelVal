<template>
  <div class="container">
    <Navbar></Navbar>
    <Login></Login>
    <Register></Register>
      <InformacionProductos></InformacionProductos>
      <Listado></Listado>
      <Carrito></Carrito>

  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";
import Carrito from "@/components/Carrito.vue";
import InformacionProductos from "@/components/InformacionProductos.vue";
import Listado from "@/components/Listado.vue";


export default {
  name: 'App',
  components : {
    Navbar,
    InformacionProductos,
    Register,
    Login,
    Carrito,
    Listado
  }
}
</script>

<style>

</style>
