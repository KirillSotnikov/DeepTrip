// import users from './modules/users'

export default {
  modules: {
    // users
  },
  state: {
    isVisibleMenu: false
  },
  mutations: {
    openMenu(state) {
      state.isVisibleMenu = true
    },
    closeMenu(state) {
      state.isVisibleMenu = false
    }
  },
  getters: {
    isVisibleMenu(state) {
      return state.isVisibleMenu
    }
  }
}
