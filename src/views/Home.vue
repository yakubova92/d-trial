<template>
  <div class="home">
    <Header />
    <Navbar />
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'home',
  components: {
    Header,
    HelloWorld,
    Navbar
  }
}
</script>
