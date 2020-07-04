import {db} from "../../firebaseConfig";

export default{
  state: {
    allOrders: [],
    myOrders: [],
  },
  getters: {
    getAllOrders(state) {
      return state.allOrders
    },
    getMyOrders(state) {
      return state.myOrders
    }
  },
  mutations: {
    setAllOrders(state, data) {
      state.allOrders = data;
    },
    setMyOrders(state, data) {
      state.myOrders = data;
    },
  },
  actions: {
    updateAllOrders({commit}) {
      db
        .collection('orders')
        .get()
        .then(data => {
          const orders = [];
          data.forEach(doc => {
            orders.push({id: doc.id, ...doc.data()});
          })
          commit("setAllOrders", orders);
        });
    },
    updateMyOrders({commit, getters}) {
      db
        .collection('orders')
        .where("deliverId", "==", getters.getUser.uid)
        .get()
        .then(data => {
          const orders = [];
          data.forEach(doc => {
            orders.push({id: doc.id, ...doc.data()});
          })
          commit("setMyOrders", orders);
        });
    },
    updateOrder({commit, getters}, id) {
      commit('setLoading', true);
      return db
        .collection('orders')
        .doc(id)
        .update({
          deliverId: getters.getUser.uid,
          status: 'taken',
        })
    },
    doneOrder({commit, getters}, id) {
      commit('setLoading', true);
      return db
        .collection('orders')
        .doc(id)
        .update({
          deliverId: getters.getUser.uid,
          status: 'done',
        })
    },
  },
  modules: {
  }
}
