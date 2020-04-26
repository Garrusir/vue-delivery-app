<template>
  <div class="vendor-list">
    <VendorItem
    v-for="item in vendorList"
    :key="item.id"
    @click="go(item)"
    :title="item.title"/>
  </div>
</template>

<script>
// @ is an alias to /src
import VendorItem from "../components/VendorItem";

export default {
  name: 'Home',
  components: {
    VendorItem,
  },
  created() {
    console.log();
  },
  computed: {
    vendorList() {
      return this.$store.getters.getVendors;
    }
  },
  methods: {
    go(item) {
      console.log(item);
      this.$router.push(`vendor/${item.id}`)
    }
  }
}
</script>

<style>
  .vendor-list {
    display: flex;
    flex-flow: row wrap;
  }
</style>
