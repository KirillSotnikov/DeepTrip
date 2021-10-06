<template>
  <div class="bottom-nav">
    <NavItem
      v-for="(navItem, index) in navbarArray"
      :key="index"
      :handleClick="navItem.clickHandler"
      :title="navItem.title"
      :icon="navItem.icon"
      :link="navItem.link"
    />
  </div>
</template>

<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import StarIcon from 'vue-material-design-icons/StarOutline.vue'
import PersonIcon from 'vue-material-design-icons/AccountOutline.vue'
import NavItem from './NavItem'

export default {
  components: {
    NavItem,
    MenuIcon,
    StarIcon,
    PersonIcon,
  },
  computed: {
    isVisibleMenu() {
      return this.$store.getters.isVisibleMenu
    },
    navbarArray() {
      return [
        {
          title: 'Меню',
          icon: MenuIcon,
          clickHandler: () => {
            this.toggleMenu()
          }
        },
        {
          title: 'Избранное',
          icon: StarIcon,
          clickHandler: () => {
            this.closeMenu()
          },
          link: '/saved'
        },
        {
          title: 'Профиль',
          icon: PersonIcon,
          clickHandler: () => {
            this.closeMenu()
          }
        },
      ]
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
