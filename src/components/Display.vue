<template>
  <div class="display">
    <h3> {{ totalGroups }} record(s) found </h3>
    <p>{{groups}}</p>
    <Card v-for="item in groups" :item="item" :heading="heading" :key="item.id"></Card>
       <!-- <group-card v-for="group in groups" :group="group" :key="group.id"></group-card> -->
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'Display',
  components: {
    Card
  },
  data () {
    return {
      heading: {
        col1: 'Group name',
        col2: 'Members',
        col3: 'Policy'
      }
    }
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
