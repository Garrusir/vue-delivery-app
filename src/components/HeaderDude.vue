<template>
    <div class="header">
        <div class="header-wrap">
            <div
            @click="$router.push('/')"
            class="header__logo">
                <img src="@/assets/logo.svg">
                <span class="header__title">Название</span>
            </div>
            <div
            @click="$store.commit('openLoginForm')"
            class="header__login">
                <span class="header__icon material-icons">
                    person
                </span>
                <span class="header__text"> Войти </span>
            </div>
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

    .header__logo {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        margin: 16px 32px;
        cursor: pointer;
        img {
            height: 100%;
        }
    }

    .header__title {
        font-size: 28px;
        color: #818181;
        text-transform: uppercase;
        font-weight: bold;
        margin-left: 12px;
    }

    .header__login {
        cursor: pointer;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        margin: 16px 32px;
        color: #818181;
        .header__text {
            font-size: 14px;
            text-transform: uppercase;
            font-weight: bold;
        }
    }
</style>
