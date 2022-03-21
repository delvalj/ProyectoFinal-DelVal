<template>
  <div class="content">

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'probando',
  created() {
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then((result) => {
      console.log(result);

    })
  }
};
</script>

<style scoped>

</style>