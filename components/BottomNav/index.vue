<template>
  <div class="bottom-nav">
    <NavItem :handleClick="toggleMenu" iconName="menu" title="Меню"/>
    <NavItem :handleClick="closeMenu" iconName="star_border" title="Избранное"/>
    <NavItem :handleClick="closeMenu" iconName="person_outline" title="Профиль"/>
  </div>
</template>

<script>
import NavItem from './NavItem'
export default {
  components: {
    NavItem
  },
  computed: {
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

<style scoped>
  .bottom-nav{
    background: #EBEBEB;
    display: flex;
    height: 60px;
  }
</style>
