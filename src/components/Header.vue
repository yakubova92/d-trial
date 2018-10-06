<template>
  <div class="header">
    <img alt="Vue logo" src="../assets/logo.png">
    <p> AIRLINE </p>
    <p> Organization </p>
    <p> drop down </p>
    <p> bell </p>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  width: 10px;
  height: 10px;
}
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: navy;
  color: white;
}
</style>
