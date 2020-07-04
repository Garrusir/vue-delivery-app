<template>
  <div id="app">
    <HeaderDude/>

    <div class="layout__content">
      <router-view/>
    </div>

    <FooterDude/>

    <LoginForm
    v-if="$store.getters.getLoginFormState"/>
  </div>
</template>
<script>
  import FooterDude from "./components/FooterDude";
  import HeaderDude from "./components/HeaderDude";
  import LoginForm from "./components/LoginForm";
  export default {
    name: 'MainLayout',
    components: {
      HeaderDude,
      FooterDude,
      LoginForm,
    },
    created() {
      if (localStorage.userId) {
        // this.$store.commit('updateUser', {uid: localStorage.userId})
        // this.$store.dispatch('findRole', {uid: localStorage.userId});
      }
      // console.log('firebase', firebase);
      // console.log('firebase', this.$firebase);
    }
  }

</script>
<style lang="scss">
  * {
    box-sizing: border-box;
  }
  #app {
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;
  }
  body {
    font-family: Tahoma, Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f6f6f6;
    min-height: 100vh;
    display: flex;
    flex-flow: column nowrap;
  }
  .layout__content {
    flex-grow: 1;
    margin: 16px 60px;
  }

  @media screen and (max-width: 960px) {
    body {
      .vendor-list {
        flex-direction: column;
      }
      .vendor-item {
        min-width: 100%;
      }
      .header-wrap {
        padding: 0 8px;
      }
      .header__logo {
        margin-left: 0;
        margin-right: 0;
        flex-shrink: 1;
      }
      .header__login {
        margin: 0;
      }
      .header__icon {
        font-size: 32px;
        margin-left: 16px;
      }
      .header__title {
        font-size: 32px;
      }
      .vendor-header {
        margin-right: 0;
      }
      .vendor-menu__dish {
        margin-right: 0;
      }
      .vendor-menu__basket {
        right: -300px;
      }
      .vendor-menu__main {
        margin-right: 0;
      }
      .vendor-info, h1 {
        padding: 0 8px;
      }
      .vendor-menu__mobile-button {
        display: block;
      }
      .order-page__main {
        flex-direction: column;
      }
      .order-page__form {
        margin-right: 0;
      }
      .main-form {
        padding: 8px;
      }
      .order-item__date {
        display: none;
      }
      .order-item__vendor {
        width: 25%;
        font-size: 14px;
      }
      .order-item__price {
        width: 25%;
        text-align: right;
        font-size: 14px;
      }
      .order-item__status {
        width: 50%;
        text-align: right;
        font-size: 14px;
      }
      .dish-item {
        box-shadow: none;
      }
      .delivery-order-item__main {
        justify-content: space-between;
        .delivery-order-item__vendor,
        .delivery-order-item__status{
          display: none;
        }
      }
      .order-history {
        .order-item__status,
        .order-item__price{
          display: none;
        }
      }

    }
  }

  @media screen and (max-width: 460px) {
    body {
      .layout__content {
        margin: 0;
      }
      .header__text {
        display: none;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {}
</style>
