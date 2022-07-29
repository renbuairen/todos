import list from '@/assets/数据'

export default {
  namespaced: true,
  state: {
    list
  },
  getters: {},
  mutations: {
    addValNext(state, item) {
      state.list.unshift(item)
    },
    removeValNext(state, index) {
      state.list.splice(index, 1)
    }
  },
  actions: {
    addVal(context, val) {
      if (!val) return alert('输入值为空')
      const id = context.state.list.length ? context.state.list[0].id + 1 : 1
      const item = { name: val, done: false, id }
      context.commit('addValNext', item)
    },
    removeVal(context, id) {
      const index = context.state.list.findIndex((item) => {
        return item.id === id
      })
      context.commit('removeValNext', index)
    }
  }
}
