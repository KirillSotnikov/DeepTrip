// import users from './modules/users'

const cities = {
  'odesa': 'Одесса',
  'kyiv': 'Киев',
  'lviv': 'Львов',
}

// const cities = [
//   {
//     id: 'odesa',
//     name: '',
//     mainImage: ''
//   }
// ]

export default {
  modules: {
    // users
  },
  state: {
    isVisibleMenu: false,
    activeCityId: null
  },
  mutations: {
    openMenu(state) {
      state.isVisibleMenu = true
    },
    closeMenu(state) {
      state.isVisibleMenu = false
    },
    setActiveCity(state, payload) {
      state.activeCityId = payload;
    }
  },
  actions: {
    openMenu(store) {
      store.commit('openMenu');
    },
    closeMenu(store) {
      store.commit('closeMenu');
    },
    setActiveCity(store, payload) {
      store.commit('setActiveCity', payload);
    }
  },
  getters: {
    isVisibleMenu(state) {
      return state.isVisibleMenu
    },
    activeCity(state) {
      return state.activeCityId ? cities[state.activeCityId] : null;
    }
  }
}
