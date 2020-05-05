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
    }
  }

</script>
<style lang="scss">
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Tahoma, Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f6f6f6;
  }
  .layout__content {
    margin: 16px 60px;
  }
</style>
