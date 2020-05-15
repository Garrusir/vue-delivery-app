const firebase = require('@/firebaseConfig.js');
import router from '@/router'

export default{
  state: {
    loginForm: false,
    user: null,
  },
  getters: {
    getLoginFormState(state) {
      return state.loginForm;
    },
    getUser(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return !!state.user;
    }
  },
  mutations: {
    openLoginForm(state) {
      state.loginForm = true;
    },
    closeLoginForm(state) {
      state.loginForm = false;
    },
    updateUser(state, user) {
      if (user) {
        state.user = user;
        localStorage.userId =user.uid;
      } else {
        state.user = null;
        localStorage.removeItem('userId');
      }
    },
  },
  actions: {
    createUser({commit}, user) {
      commit('setLoading', true);
      firebase
      .auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(data => {
        commit('setLoading', false);
        console.log('data', data);
      })
      .catch(error => {
        commit('setLoading', false);
        console.log('error', error.message);
      })
    },
    signIn({commit}, {email, password}) {
      commit('setLoading', true);
      firebase
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        console.log('logged', data);
        commit('updateUser', data.user);
        commit('closeLoginForm');
        commit('setLoading', false);
      })
      .catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        commit('setLoading', false);
      });
    },
    signOut({commit}) {
      console.log('logout');
      firebase
        .auth
        .signOut();
      commit('updateUser', null);
      router.push({name: 'Home'});
    }
  },
  modules: {
  }
}
