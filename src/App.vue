<template>
  <div id="app">
    <HeaderDude/>
    <div class="layout__content">
      <router-view/>
    </div>
    <FooterDude/>
  </div>
</template>
<script>
  import FooterDude from "./components/FooterDude";
  import HeaderDude from "./components/HeaderDude";
  export default {
    components: {
      HeaderDude,
      FooterDude
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
