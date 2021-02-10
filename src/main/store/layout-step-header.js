export default {
  namespaced: true,
  state: () => {
    return {
      title: '',
      backView: ''
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
    }
  },
  getters: {
    currentTitle (state) {
      return state.title
    },

    backView (state) {
      return state.backView
    }
  }
}
