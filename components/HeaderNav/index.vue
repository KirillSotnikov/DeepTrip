<template>
  <div class="header-nav">
    <nuxt-link to="/" class="header-nav__logo">
      <img src="~/assets/logo.svg"/>
    </nuxt-link>
    <transition name="fade" :duration="200">
      <div v-if="activeCity && isHeaderVisible" class="header-nav__select">
        <material-icon name="place" class="header-nav__icon"/>
        <span class="header-nav__text">{{ activeCity.name }}</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    activeCityId() {
      return this.$store.getters.activeCityId;
    },
    activeCity() {
      return this.activeCityId ? this.$store.getters.getCityById(this.activeCityId) : null;
    },
    isHeaderVisible() {
      return this.$store.getters.isHeaderVisible
    }
  }
}
</script>

<style scoped>
.header-nav{
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
  background: #262626;
}
.header-nav__logo{
  height: 35px;
}
.header-nav__select{
  display: flex;
  align-items: center;
}
.header-nav__icon{
  color: #EA9C1F;
  font-size: 20px;
}
.header-nav__text{
  color: #ECECEC;
  font-size: 14px;
  line-height: 17px;
  margin-left: 8px;
}
</style>
