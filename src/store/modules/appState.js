import {db} from "../../firebaseConfig";

export default {
  state: {
    vendors: [],
  },
  getters: {
    getVendors(state) {
      return state.vendors;
    },
  },
  mutations: {
    setVendors(state, data) {
      state.vendors = data;
    },
  },
  actions: {
    updateVendors({commit}) {
      db
        .collection('restaurants')
        .get()
        .then(data => {
          const vendors = [];
          data.forEach(doc => {
            vendors.push({id: doc.id, ...doc.data()});
          })
          commit("setVendors", vendors);
        });
    },
  },
}
