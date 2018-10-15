<template>
  <div class="people-display">
    <h3> {{ totalPeople }} record(s) found </h3>
    <people-card v-for="person in filterPeople" :person="person" :key="person.id"></people-card>
  </div>
</template>

<script>
import PeopleCard from '@/components/PeopleCard.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'PeopleDisplay',
  components: {
    PeopleCard
  },
  mounted () {
    this.$store.dispatch('loadPeople')
  },
  computed: {
    ...mapGetters([
      'filterPeople',
      'totalPeople'
    ]),
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
