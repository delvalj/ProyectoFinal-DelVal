<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">LOGO</router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>

        <ul class="navbar-nav mb-2 mb-lg-0 text-white">
          <li class="nav-item dropdown">
            <router-link to="productos" class="nav-link active" aria-current="page" href="#">Productos</router-link>
          </li>

          <li class="nav-item dropdown">
            <router-link to="carrito" class="nav-link active" aria-current="page">
              <a>
                <b-icon icon="cart" class="text-white"></b-icon>
              </a>
            </router-link>
          </li>

          <li class="nav-item dropdown border border-danger">
            <router-link to="login" class="nav-link active border border-danger" aria-current="page" @click="logOut">Log Out</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>

export default {
  name: "Navbar",
  methods: {
    logOut(){
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>

</style>

hacer un boton , ir al setter de user y pasarle null