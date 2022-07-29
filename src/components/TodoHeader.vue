<template>
  <header class="header">
    <h1 :style="{ color }">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model.trim="val"
      @keydown.enter="addVal(val)"
      @keyup.enter="val = ''"
    />
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      val: ''
    }
  },
  methods: {
    ...mapActions('todos', ['addVal'])
  },
  computed: {
    ...mapGetters(['color'])
  }
}
</script>
