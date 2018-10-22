<template>
  <div class="parent">
  <todo-list :todos="todos">
    <template slot-scope="{ todo }">
      <span v-if="todo.complete"> + </span>
      {{todo.text}}
    </template>
  </todo-list>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList';

export default {
  name: "Parent",
  props: ["todos"],
  components: {
    TodoList
  }
}
</script>
