<template>
  <div class="navbar">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/flightboard">Flightboard</router-link> |
      <router-link to="/people">People</router-link> |
      <router-link to="/policy">Policy</router-link> |
      <router-link to="/payment-options">Payment Options</router-link> |
      <router-link to="/reporting">Reporting</router-link> |
      <router-link to="/settings">Settings</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
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
.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
