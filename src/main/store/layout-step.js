export default {
  namespaced: true,
  state: () => {
    return {
      title: '',
      backView: '',
      background: 'UmtStepBkg',
      showThemeToggle: false
    }
  },
  mutations: {
    setTitle (state, value) {
      if (value == null)
        throw new Error('Ingrese título para header de layout step. Este puede estar en blanco pero nunca undefined.')

      state.title = value
    },

    setBackView (state, value) {
      state.backView = value
    },

    setBackground (state, value) {
        if (value)
            state.background = value
        else
            state.background = 'UmtStepBkg'
    },

    setShowThemeToggle (state, value) {
        if (value)
            state.showThemeToggle = value
        else
            state.showThemeToggle = false
    }
  },
  getters: {
    currentTitle (state) {
      return state.title
    },

    backView (state) {
      return state.backView
    },

    background (state) {
        return state.background
    },

    showThemeToggle (state) {
        return state.showThemeToggle
    }
  }
}
