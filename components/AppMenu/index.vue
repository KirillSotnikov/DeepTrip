<template>
  <div :class="{'app-menu-visible': isVisibleMenu}" class="app-menu">
    <div class="app-menu__list">
      <p 
        class="app-menu__item" 
        v-for="(item, i) in menuList"
        :key="i"
      >
        {{item.title}}
      </p>
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
  }
}
</script>

<style>
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
}
</style>