export default {
  state: {
    dishes: [
      {
        id: 1,
        title: 'Карбонара',
        description: 'Очень по итальянски. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aliquid atque consectetur cum cupiditate delectus dolor earum error eveniet exercitationem',
        image: 'https://www.delivery-club.ru/media/cms/relation_product/33267/313105348_m650.jpg',
        price: 100,
      },
      {
        id: 2,
        title: 'Другя карбонара',
        description: 'Совсем не по итальянски.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aliquid atque consectetur cum cupiditate delectus dolor earum error eveniet exercitationem',
        image: 'https://www.delivery-club.ru/media/cms/relation_product/33267/313105348_m650.jpg',
        price: 200,
      },
      {
        id: 3,
        title: 'Карбонара от Васяна',
        description: 'С докторской колбасой и майонезом lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aliquid atque consectetur cum cupiditate delectus dolor earum error eveniet exercitationem',
        image: 'https://www.delivery-club.ru/media/cms/relation_product/33267/313105348_m650.jpg',
        price: 300,
      },
    ]
  },
  getters: {
    getDishes(state) {
      return state.dishes;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
}
