<template>
  <div>
    <InformacionProductos></InformacionProductos>
    <SectionInformacion></SectionInformacion>
  </div>
</template>

<script>
import InformacionProductos from "@/components/InformacionProductos";
import SectionInformacion from "@/components/SectionInformacion";

export default {
  name: "ProductsView",
  components: {
    InformacionProductos,
    SectionInformacion
  },

}
</script>



<style scoped>

</style>
