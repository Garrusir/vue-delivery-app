<template>
  <div class="vendor-page">
    <div class="vendor-header">
      <div class="vendor-header__blackout">
        <div class="vendor-header__wrap">
          <router-link
          tag="a"
          class="vendor-header__link"
          to="/">
            <i class="material-icons vendor-header__icon">
              keyboard_arrow_left
            </i>

            <span>
              Все рестораны
            </span>
          </router-link>
          <div class="vendor-header__title"> {{  $route.params.id  }}</div>
        </div>
      </div>
    </div>

    <div class="vendor-menu-container">
      <div class="vendor-menu__main">
        <h1> Меню </h1>
        <div class="vendor-menu">
          <DishItem
                  v-for="dish in dishList"
                  :key="dish.id"
                  :dish="dish"
                  class="vendor-menu__dish"/>
        </div>
        <div class="vendor-info">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aliquid atque consectetur cum cupiditate delectus dolor earum error eveniet exercitationem, explicabo, fuga illo magni maiores minima molestiae molestias nisi non numquam obcaecati odio officia praesentium quaerat qui quia quibusdam ratione reiciendis rem sit tempora, ut veniam vero? Fugiat, perferendis.
        </div>
      </div>
      <div class="vendor-menu__basket">
        <BasketDude/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DishItem from "../components/DishItem";
import BasketDude from "../components/BasketDude";

export default {
  name: 'Vendor',
  components: {
    DishItem,
    BasketDude,
  },
  computed: {
    dishList() {
      return this.$store.getters.getDishes;
    },
  }
}
</script>

<style lang="scss">
  .vendor-header {
    background-image: url("https://www.delivery-club.ru/naturmort/5ea337f3ba2c2_720x450.jpg");
    background-size: cover;
    background-position: center;
    height: 240px;
  }

  .vendor-header__blackout {
    height: 100%;
    background-color: rgba(0,0,0, .5);
  }

  .vendor-header__wrap {
    height: 100%;
    width: 800px;
    margin: 0 auto;
    padding: 16px 0;
  }

  .vendor-header__link {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    text-decoration: none;
  }

  .vendor-header__icon {
    font-size: 32px;
  }

  .vendor-header__title {
    font-size: 46px;
    font-weight: 700;
    color: #fff;
  }

  .vendor-menu-container {
    display: flex;
    flex-flow: row nowrap;
  }

  .vendor-menu {
    display: flex;
    flex-flow: row wrap;
  }

  .vendor-menu__dish {
    overflow: hidden;
    flex-grow: 1;
    margin-right: 16px;
    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  .vendor-menu__main {
    flex-grow: 1;
    flex-shrink: 1;
  }

  .vendor-menu__basket {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 300px;
    margin-left: 18px;
  }
</style>
