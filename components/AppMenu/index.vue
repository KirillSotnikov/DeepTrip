<template>
  <div :class="{'app-menu-visible': isVisibleMenu}" class="app-menu">
    <div class="app-menu__list">
      <router-link
        class="app-menu__item"
        v-for="(item, i) in menuList"
        :key="i"
        :to="item.link"
      >
        {{item.title}}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          title: 'Главная',
          link: '/'
        },
        {
          title: 'Блог',
          link: '/blog'
        },
        {
          title: 'Интересные места',
          link: '/interesting-places'
        },
        {
          title: 'Развлечения',
          link: '/entertainments'
        },
        {
          title: 'Вопросы и ответы',
          link: '/faq'
        },
        {
          title: 'О нас',
          link: '/about-us'
        },
        {
          title: 'Контакты',
          link: '/contacts'
        },
        {
          title: 'Выйти',
          link: '/'
        },
      ]
    }
  },
  computed: {
    isVisibleMenu() {
      return this.$store.getters.isVisibleMenu
    }
  },
  methods: {
    closeMenu() {
      this.$store.dispatch('closeMenu')
    }
  },
  watch: {
    '$route'() {
      this.closeMenu();
    }
  }
}
</script>

<style lang="scss">
.app-menu{
  transform: translateX(-100%);
}
.app-menu-visible{
  transform: none;
}
.app-menu__list{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.app-menu__item{
  color: #fff;
  text-align: center;
  color: #ECECEC;
  opacity: 0.5;
  text-decoration: none;
}

.is-desktop{
  .app-menu{
    display: grid;
    overflow: auto;
    align-items: center;
    &__list{
      min-height: 700px;
      height: unset;
    }
    &__item{
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
}
</style>
