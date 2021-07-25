import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    token: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    setToken(state, payload) {
      state.token = payload
    },
  },
  actions: {
    async userLoggin({ commit }, usuario) {
      try {
        const res = await fetch('http://localhost:8080/login',
          {
            method: 'POST',
            body: JSON.stringify({
              username: usuario.email,
              password: usuario.password,
            })
          })

        const token = await res.json();

        if (token.error) {
          return console.log(token.error)
        }

        commit('setToken', token.Bearer)

        var base64Url = token.Bearer.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        //console.log('token', JSON.parse(jsonPayload));
        const user = {
          username: JSON.parse(jsonPayload).sub,
          email: JSON.parse(jsonPayload).email
        }

        commit('setUser', user);

        localStorage.setItem('usuario', JSON.stringify(user))
        router.push('/')
      } catch (error) {
        console.log(error)
      }
    },

    cerrarSesion({ commit }) {
      commit('setUser', null)
      router.push('/ingreso')
      localStorage.removeItem('usuario')
    },


  },
  getters: {
    usuarioAutenticado(state) {
      return !!state.user
    },
    usuarioAutenticadoObject(state) {
      if (!!state.user) {
        return state.user
      }
      return null

    },
    tokenObject(state) {
      if (!!state.token) {
        return state.token
      }
      return null

    },
  },
  modules: {
  }
})
