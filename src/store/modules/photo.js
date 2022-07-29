export default {
  namespaced: true,
  state: {
    color: null
  },
  getters: {},
  mutations: {
    replaceColorNext(state, color) {
      state.color = color
    }
  },
  actions: {
    replaceColor(context) {
      const getRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
      }

      const color = `rgb(${getRandom(0, 255)}, ${getRandom(
        0,
        255
      )}, ${getRandom(0, 255)})`

      context.commit('replaceColorNext', color)
    }
  }
}
