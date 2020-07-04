<template>
  <div class="vendor-page">
    <div
    class="vendor-header"
    :style="{
      'background-image': `url(${vendor.img})`
    }">
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

          <div class="vendor-header__title"> {{ vendor.name }}</div>
        </div>
      </div>
    </div>

    <div class="vendor-menu-container">
      <div class="vendor-menu__main" @click="showMobileBasket = false">
        <h1> Меню </h1>
        <div class="vendor-menu">
          <DishItem
                  v-for="dish in dishList"
                  :key="dish.id"
                  :dish="dish"
                  class="vendor-menu__dish"/>
        </div>
        <div class="vendor-info">
          <h2> Информация </h2>
          <p>
         {{vendor.description}}
          </p>
          <p>
            Телефон: {{vendor.phone}}
          </p>
        </div>
      </div>

      <div class="vendor-menu__basket"
      :class="{
        'vendor-menu__basket--show' : showMobileBasket
      }">
        <BasketDude/>
      </div>

      <BaseButton
      v-if="basket"
      class="vendor-menu__mobile-button" @click="showMobileBasket = true"> Перейти к корзине </BaseButton>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DishItem from "../components/DishItem";
import BasketDude from "../components/BasketDude";
import BaseButton from "../components/blocks/BaseButton";

export default {
  name: 'Vendor',
  components: {
    DishItem,
    BasketDude,
    BaseButton
  },
  created() {
    this.$store.dispatch('updateVendor', this.$route.params.id);
    this.$store.dispatch('updateDishes', this.$route.params.id);
  },
  computed: {
    dishList() {
      return this.$store.getters.getDishes;
    },
    vendor() {
      return this.$store.getters.getCurrentVendor;
    },
    basket() {
      return this.$store.getters.getBasketItems.length
    }
  },
  data: () => ({
    showMobileBasket: false
  })
}
</script>

<style lang="scss">
  .vendor-header {
    background-size: cover;
    background-position: center;
    height: 240px;
    margin-right: 260px;
  }

  .vendor-header__blackout {
    height: 100%;
    background-color: rgba(0,0,0, .5);
  }

  .vendor-header__wrap {
    height: 100%;
    width: 90%;
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
    margin-left: 32px;
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
    min-width: 240px;
    width: calc(100% / 3 - 11px);
    overflow: hidden;
    flex-grow: 1;
    margin-bottom: 16px;
    margin-right: 16px;
    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  .vendor-menu__main {
    flex-grow: 1;
    flex-shrink: 1;
    margin-right: 260px;
  }

  .vendor-menu__basket {
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    width: 300px;
    margin-left: 18px;
    position: fixed;
    top: 70px;
    right: 0;
    background-color: #fff;
    height: 100%;
    box-shadow: 0 0px 8px 0 rgba(0,0,0,.04),
                0 0px 8px 0 rgba(0,0,0,.04);
    transition: all 300ms ease-in-out;
  }

  .vendor-info p{
    color: #555;
  }

  .vendor-menu__mobile-button {
    display: none;
    position: fixed;
    width: 100%;
    bottom: 10px;
    box-sizing: border-box;
    padding: 0 8px;

  }
  .vendor-menu__basket--show {
    right: 0 !important;
    z-index: 9;
  }
</style>
