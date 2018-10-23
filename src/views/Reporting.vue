<template>
  <div class="reporting">
    <Header />
    <Navbar />
    <h1>This is a reporting page</h1>
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
    Navbar,
  }
}
</script>
