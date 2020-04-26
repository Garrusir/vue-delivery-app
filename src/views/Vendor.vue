<template>
  <div class="vendor-page">
    <div class="vendor-header">
      <div class="vendor-header__blackout">
        <div class="vendor-header__wrap">
          <router-link
          tag="a"
          class="vendor-header__link"
          to="/">Все рестораны</router-link>
          <div class="vendor-header__title"> {{  $route.params.id  }}</div>
        </div>
      </div>
      Header
    </div>
    <div class="vendor-menu">
      Menu
    </div>
    <div class="vendor-info">
      Info
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import VendorItem from "../components/VendorItem";

export default {
  name: 'Vendor',
  created() {
    console.log();
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
  }

  .vendor-header__link {
    color: #fff;
  }

  .vendor-header__title {
    font-size: 46px;
    font-weight: 700;
    color: #fff;
  }
</style>
