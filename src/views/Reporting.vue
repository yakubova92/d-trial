<template>
  <div class="reporting">
    <Header />
    <Navbar />
    <h1>This is a reporting page</h1>
    <Parent />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Parent from '@/components/Parent.vue'

export default {
  name: 'home',
  components: {
    Header,
    Navbar,
    Parent
  }
}
</script>
