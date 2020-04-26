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
    <div class="vendor-menu">
      <h1> Меню </h1>
      <div class="dish-wrap">
        <DishItem
        title="Карбонара"
        description="Очень по-итальянски"/>

        <DishItem
        title="Карбонара"
        description="Очень по-итальянски"/>

        <DishItem
        title="Карбонара"
        description="Очень по-итальянски"/>
      </div>
    </div>
    <div class="vendor-info">
      Info
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import DishItem from "../components/DishItem";

export default {
  name: 'Vendor',
  components: {
    DishItem,
  },
  computed: {
    vendorList() {
      return this.$store.getters.getVendors;
    }
  }
}
</script>

<style>
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
</style>
