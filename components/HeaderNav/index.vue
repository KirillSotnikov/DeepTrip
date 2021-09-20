<template>
  <div class="header-nav">
    <div class="header-nav__container">
      <div
        v-if="!isMobileMode"
        @click="toggleMenu"
        class="header-nav__burger"
        :class="{'header-nav__burger-active': isVisibleMenu}"
      >
        <span class="header-nav__burger-item"></span>
        <span class="header-nav__burger-item"></span>
        <span class="header-nav__burger-item"></span>
      </div>
      <nuxt-link to="/" class="header-nav__logo">
        <img src="~/assets/logo.svg"/>
      </nuxt-link>
    </div>
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
    isMobileMode() {
      return this.$store.getters.isMobileMode;
    },
    activeCity() {
      return this.activeCityId ? this.$store.getters.getCityById(this.activeCityId) : null;
    },
    isHeaderVisible() {
      return this.$store.getters.isHeaderVisible
    },
    isVisibleMenu() {
      return this.$store.getters.isVisibleMenu
    }
  },
  methods: {
    toggleMenu() {
      this.isVisibleMenu ? this.closeMenu() : this.openMenu()
    },
    openMenu() {
      this.$store.dispatch('openMenu')
    },
    closeMenu() {
      this.$store.dispatch('closeMenu')
    }
  }
}
</script>

<style scoped lang="scss">
.header-nav{
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
  background: #262626;

  &__container{
    display: flex;
    align-items: center;
  }

  &__burger{
    width: 30px;
    height: 23px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    cursor: pointer;

    &-item{
      width: 100%;
      height: 3px;
      display: block;
      background: #efefef;
      border-radius: 10px;
      transition: all .3s linear;

      &:nth-child(1) {
        transform-origin: left top;
      }

      &:nth-child(3) {
        transform-origin: left bottom;
      }
    }

    &-active{
      .header-nav__burger-item{
        &:nth-child(1) {
          transform: rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
          transform: translateX(-100%);
        }
        &:nth-child(3) {
          transform: rotate(-45deg);
        }
      }
    }
  }
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
