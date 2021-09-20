<template>
  <div class="app" :class="{'is-desktop': !isMobileMode}">
    <HeaderNav class="app-header"/>
    <div class="app-container">
      <Nuxt />
    </div>
    <AppMenu class="app-menu"/>
    <transition name="fade">
      <div
        v-if="!isMobileMode && isVisibleMenu"
        class="app-menu__overlay"
        @click="closeMenu"
      ></div>
    </transition>
    <BottomNav v-if="isMobileMode" class="app-footer"/>
  </div>
</template>

<script>
export default {
  computed: {
    isMobileMode() {
      return this.$store.getters.isMobileMode;
    },
    isVisibleMenu() {
      return this.$store.getters.isVisibleMenu
    }
  },
  methods: {
    setMobileMode() {
      const isMobileMode = window.innerWidth <= 768;
      this.$store.dispatch('setIsMobileMode', isMobileMode);
    },
    closeMenu() {
      this.$store.dispatch('closeMenu')
    }
  },
  mounted() {
    window.addEventListener('resize', this.setMobileMode);
    this.setMobileMode();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setMobileMode);
  },
  watch: {
    '$route.name'() {
      const element = document.querySelector('.app-container');
      element.scrollTo(0, 0);
    }
  }
}
</script>

<style lang="scss">
html {
  font-family: 'Montserrat';
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #efefef;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
p, a, span, button, div, h1, h2, h3, h4, h5, h6, input {
  font-family: 'Montserrat';
  margin: 0;
  padding: 0;
}
.wrapper{
  max-width: 1200px;
  width: 100%;
  display: block;
  margin: 0 auto;
  padding: 0px 15px;
}

.app{
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.app-header{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
.app-container{
  position: fixed;
  left: 0;
  right: 0;
  top: 60px;
  bottom: 60px;
  overflow: auto;
}
.app-footer{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
.app-menu{
  position: fixed;
  left: 0;
  top: 60px;
  right: 0;
  bottom: 60px;
  background: #262626;
  transition: all .3s ease-out;
}

.is-desktop{
  .app-container{
    bottom: 0;
  }
  .app-menu{
    right: unset;
    width: 400px;
    bottom: 0;
    z-index: 2;
  }
  .app-menu__overlay{
    position: fixed;
    left: 0;
    top: 60px;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.7);
    z-index: 1;
  }
}

*{
  &::-webkit-scrollbar{
    width: 1px;
    height: 1px;
  }
  &::-webkit-scrollbar-track{
    background: transparent;
  }
  &::-webkit-scrollbar-thumb{
    background: #888;
    &:hover{
      background: #181818;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
