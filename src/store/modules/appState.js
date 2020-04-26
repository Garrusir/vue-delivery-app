export default {
  state: {
    vendors: [
      {
        id: 'kfc',
        title: 'KFC',
      },
      {
        id: 'burger_king',
        title: 'Burger King',
      },
      {
        id: 'mcdonalds',
        title: 'Mcdonalds',
      },
      {
        id: 'shokoladnica',
        title: 'Шоколадница',
      }
    ],
  },
  getters: {
    getVendors(state) {
      return state.vendors;
    },
  },
  mutations: {
  },
  actions: {
  },
}
