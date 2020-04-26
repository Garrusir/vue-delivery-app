<template>
    <div class="header">
        <div class="header-wrap">
            <div class="header__logo">Лого</div>
            <div class="header__login">Вход</div>
        </div>
        </div>
</template>

<script>
  export default {
    name: 'HeaderDude',
  }
</script>

<style scoped lang="scss">
    .header {
        height: 72px;
    }
    .header-wrap {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        height: 72px;
        position: fixed;
        background-color: #fff;
        width: 100%;
        z-index: 100;
        border-bottom: 1px solid #ccc;
    }
</style>
