<template>
  <div>
    <InformacionProductos></InformacionProductos>
    <Listado></Listado>
  </div>

</template>

<script>
import InformacionProductos from "@/components/InformacionProductos";
import Listado from "@/components/Listado";

export default {
  name: "HomeView",
  components: {
    InformacionProductos,
    Listado
  }
}
</script>

<style scoped>

</style>