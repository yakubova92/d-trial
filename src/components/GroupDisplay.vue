<template>
  <div class="group-display">
    <h3> {{ totalGroups }} record(s) found </h3>
    <group-card v-for="group in groups" :group="group" :key="group.id"></group-card>
  </div>
</template>

<script>
import GroupCard from '@/components/GroupCard.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'GroupDisplay',
  components: {
    GroupCard
  },
  // mounted () {
  //   //this.$store.dispatch('loadGroups')
  // },
  computed: {
    ...mapGetters([
      'groups',
      'totalGroups'
    ]),
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
