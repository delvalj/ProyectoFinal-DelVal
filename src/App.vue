<template>
  <div class="container">
    <Navbar></Navbar>
    <Login></Login>
    <Register></Register>
    <!--  <Carrito></Carrito>-->
    <!--  <InformacionProductos></InformacionProductos>-->
    <!--  <Listado></Listado>-->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Register from "@/components/Register";
import Login from "@/components/Login";
// import Carrito from "@/components/Carrito";
// import InformacionProductos from "@/components/InformacionProductos";
// import Listado from "@/components/Listado";


export default {
  name: 'App',
  components: {
    Navbar,
    Register,
    Login,
    // Carrito,
    // InformacionProductos,
    // Listado
  }
}
</script>

<style>

</style>
