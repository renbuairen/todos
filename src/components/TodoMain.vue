<template>
  <div>
    <ul class="todo-list">
      <!-- completed: 完成的类名 -->
      <li :class="{ completed: item.done }" v-for="item in list" :key="item.id">
        <div class="view">
          <input class="toggle" type="checkbox" />
          <label>{{ item.name }}</label>
          <button class="destroy" @click="removeVal(item.id)"></button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['list'])
  },
  methods: {
    ...mapActions('todos', ['removeVal'])
  }
}
</script>
