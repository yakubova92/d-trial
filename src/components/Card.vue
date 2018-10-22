<template>
  <div class="card">
    <div class="col-1">
      <h3> {{heading.col1}} </h3>
      <p>{{ item.name }} </p>
      <p>{{ item.description }} </p>
    </div>
    <div class="col-2">
      <h3> {{heading.col2}} </h3>
      <p>{{ item.members }} </p>
    </div>
    <div class="col-3">
      <h3> {{heading.col3}} </h3>
      <p>{{ item.policy }} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ["item", "heading"],
  components: {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 0px 0 0;
}
p {
  margin: 0px
}
.card {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid grey;
}
.col-1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px dotted red;
}
.col-2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px dotted blue;
}
.col-3 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px dotted green;
}
</style>
