<template>
  <div class="flightboard">
    <Header />
    <Navbar />
    <h1>This is a Flightboard page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'home',
  components: {
    Header,
    Navbar
  }
}
</script>
