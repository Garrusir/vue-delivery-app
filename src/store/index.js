import Vue from 'vue'
import Vuex from 'vuex'

import appState from './modules/appState'
import vendorState from './modules/vendorState'
import basketState from "./modules/basketState";
import authorization from "./modules/authorization";
import orderHistory from "./modules/orderHistory";
import administration from './modules/administration';
import delivery from './modules/deliveryState';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    appState,
    vendorState,
    basketState,
    authorization,
    orderHistory,
    administration,
    delivery
  }
})
