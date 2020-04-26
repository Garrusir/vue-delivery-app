<template>
  <div id="app">
    <HeaderDude/>
    <router-view/>
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
  body {
    font-family: Tahoma, Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  #app {
  }
</style>
