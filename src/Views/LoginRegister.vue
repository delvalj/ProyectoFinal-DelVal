<template>
  <div>
    <Login></Login>
    <Register></Register>
  </div>
</template>

<script>
import Login from "@/components/Login";
import Register from "@/components/Register";

export default {
  name: "LoginRegister",
  components: {
    Login,
    Register
  },
}
</script>

<style scoped>

</style>