<template>
  <footer class="p-5 bg-dark">
    Created By <a href="https://www.linkedin.com/in/joaquindelval/"><span> Joaquin del Val</span></a> <br>
    <p>Check out my <a href="https://github.com/delvalj"> Github profile</a></p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

span, p , footer {
  font-size: 10px;
}

span:hover {
  text-decoration: underline;
  text-underline: #42b983;
  color: white;
  cursor: pointer;
  font-family: 'Raleway', monospace;
  font-weight: 600;
}

a {
  text-decoration: none;
  color: #2c3e50;
  cursor: pointer;
  font-weight: 600;
  font-size: 10px;

}

a:hover {
  text-decoration: underline;
  text-underline: #42b983;
  color: white;
  cursor: pointer;

}
</style>
