<template>
    <div class="header">
        <div class="header-wrap">
            <div
            @click="$router.push({name: 'Home'}).catch(err => {})"
            class="header__logo">
                <span class="header__title">Самовар</span>
            </div>

            <div
            v-if="!$store.getters.getUser"
            @click="$store.commit('openLoginForm')"
            class="header__login header__navigation">
                <span class="header__icon material-icons">
                    person
                </span>
                <span class="header__text"> Войти </span>
            </div>

            <div
            v-else
            class="header__navigation">
            <div
              v-if="user.role === 1"
              @click="$router.push(`/admin/${user.restaurant}`)"
              class="header__login">
                <span class="header__icon material-icons">
                    person
                </span>
                <span class="header__text"> Администрация ресторана </span>
              </div>

              <div
              v-if="user.role === 2 || !user.role"
              @click="$router.push('/history')"
              class="header__login">
                <span class="header__icon material-icons">
                    person
                </span>
                <span class="header__text"> Мои заказы </span>
              </div>

              <div
              v-if="user.role === 3"
              @click="$router.push('/delivery/my-orders')"
              class="header__login">
                <span class="header__icon material-icons">
                  fastfood
                </span>
                <span class="header__text"> Активные заказы </span>
                </div>
              <div
              @click="logout"
              class="header__login">
                <span class="header__icon material-icons">
                  logout
                </span>
                  <span class="header__text"> Выйти </span>
              </div>
            </div>
        </div>
        </div>
</template>

<script>
  export default {
    name: 'HeaderDude',
    methods: {
        logout() {
            this.$store.dispatch('signOut');
            this.$router.push({name:'Home'});
        }
    },
    created() {
        this.user && this.$store.dispatch('findRole', this.user)
    },
    computed: {
        user() {
            return this.$store.getters.getUser;
        }
    }
  }
</script>

<style lang="scss">
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

    .header__navigation {
        display: flex;
        flex-flow: row nowrap;
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
