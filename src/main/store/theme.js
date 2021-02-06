export default {
  namespaced: true,
  state: () => {
    return {
      currentTheme: 'light',
      currentThemePrefix: 'lm'
    }
  },
  mutations: {
    setTheme (state, { currentTheme, currentThemePrefix }) {
      state.currentTheme = currentTheme
      state.currentThemePrefix = currentThemePrefix
    }
  },
  getters: {
    currentTheme (state) {
      return state.currentTheme
    },

    currentThemePrefix (state) {
      return state.currentThemePrefix
    }
  }
}
