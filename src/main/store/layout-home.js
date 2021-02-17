const tabs = [
    { key: 'home', name: 'Inicio', icon: 'football' },
    { key: 'teams', name: 'Equipos', icon: 'shield' },
    { key: 'matches', name: 'Partidos', icon: 'whistle' },
    { key: 'map', name: 'Canchas', icon: 'corner-flag' }
]

export default {
    namespaced: true,
    state: () => {
        return {
            activeTab: '',
            background: '',
            tabs
        }
    },
    mutations: {
        setActiveTab (state, value) {
            state.activeTab = value
        },

        setBackground (state, value) {
            state.background = value
        }
    },
    getters: {
        activeTab (state) {
            return state.activeTab
        },

        background (state) {
            return state.background
        },

        tabs (state) {
            return state.tabs
        }
    }
}
