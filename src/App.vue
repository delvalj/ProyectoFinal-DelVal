<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view :arrayProductos="productos" :carrito="arrayCarrito" @nuevo="nuevo"/>
  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import Navbar from "@/components/Navbar.vue";


export default {

  name: 'App',
  components: {
    Navbar,
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
          precio: 3725
        },
        {
          id: 6,
          tituloProducto: 'titulo del producto 6',
          imgProducto: 'https://picsum.photos/600/300/?image=273',
          descripcionProducto: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, " +
              "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          precio: 2725
        },

        {
          id: 7,
          tituloProducto: 'titulo del producto 7',
          imgProducto: 'https://picsum.photos/600/300/?image=653',
          descripcionProducto: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, " +
              "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          precio: 1725
        },

        {
          id: 8,
          tituloProducto: 'titulo del producto 8',
          imgProducto: 'https://picsum.photos/600/300/?image=219',
          descripcionProducto: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, " +
              "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          precio: 4725
        },

        {
          id: 9,
          tituloProducto: 'titulo del producto 9',
          imgProducto: 'https://picsum.photos/600/300/?image=321',
          descripcionProducto: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, " +
              "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          precio: 72.5
        },
      ],
      arrayCarrito: [],
    }
  },
  methods: {
    nuevo(param) {
      this.arrayCarrito.push(param)
      console.log(this.arrayCarrito);
    },
    // eliminar(id){
    //   this.arrayCarrito.splice(id)
    //   console.log(this.arrayCarrito)
    // },

  }
}
</script>




