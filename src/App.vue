<template>
  <div class="container">
    <Navbar></Navbar>
    <Login></Login>
    <Register></Register>
    <InformacionProductos :arrayProductos="productos" @nuevo="nuevo"></InformacionProductos>
    <Listado></Listado>
    <Carrito :carrito="arrayCarrito"></Carrito>
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
  components: {
    Navbar,
    InformacionProductos,
    Register,
    Login,
    Carrito,
    Listado
  },
  data() {
    return {
      productos: [
          {
        id: 0,
        tituloProducto: 'titulo del producto 1',
        imgProducto: 'https://picsum.photos/600/300/?image=555',
        descripcionProducto: "Lorem ipsum dolor sit amet, " +
            "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        precio: 1500
      },

        {
          id: 1,
          tituloProducto: 'titulo del producto 2',
          imgProducto: 'https://picsum.photos/600/300/?image=254',
          descripcionProducto: "Lorem ipsum dolor sit amet, " +
              "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          precio: 2500
        },

        {
          id: 2,
          tituloProducto: 'titulo del producto 3',
          imgProducto: 'https://picsum.photos/600/300/?image=253',
          descripcionProducto: "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet " +
              "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          precio: 1700
        },

        {
          id: 3,
          tituloProducto: 'titulo del producto 4',
          imgProducto: 'https://picsum.photos/600/300/?image=252',
          descripcionProducto: "Lorem ipsum dolor sit amet, " +
              "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          precio: 1200
        },

        {
          id: 4,
          tituloProducto: 'titulo del producto 5',
          imgProducto: 'https://picsum.photos/600/300/?image=251',
          descripcionProducto: "Lorem ipsum dolor sit amet, " +
              "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          precio: 1500
        },

        {
          id: 5,
          tituloProducto: 'titulo del producto 6',
          imgProducto: 'https://picsum.photos/600/300/?image=259',
          descripcionProducto: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, " +
              "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          precio: 725
        },
      ],
      arrayCarrito: [],
    }
  },
  methods: {
    nuevo(param) {
      this.arrayCarrito.push(param)
      console.log(this.arrayCarrito);
    }
  }
}
</script>

<style>

</style>
