<template>
  <div class="app_footer">
    <div class="app_footer__logo">
      <img src="~/assets/logo.svg" class="app_footer__image">
    </div>
    <div v-if="isMobileMode" class="app_footer__menu">
      <router-link
        v-for="(item, index) in menuList"
        :key="index"
        :to="item.link"
        class="app_footer__menu-item"
      >
        {{ item.title }}
      </router-link>
    </div>
    <div class="app_footer__info">
      <div class="app_footer__info-item">
        <PhoneIcon class="app_footer__info-icon"/>
        <p class="app_footer__info-text">+38 (055) 236-18-18</p>
      </div>
      <div class="app_footer__info-item">
        <MailIcon class="app_footer__info-icon"/>
        <p class="app_footer__info-text">deep-trip@gmail.com</p>
      </div>
    </div>
    <div v-if="!isMobileMode" class="wrapper">
      <div class="app_footer__menu">
        <router-link
          v-for="(item, index) in menuList"
          :key="index"
          :to="item.link"
          class="app_footer__menu-item"
        >
          {{ item.title }}
        </router-link>
      </div>
    </div>
    <div class="app_footer__social">
      <div class="app_footer__social-item">
        <img src="~/assets/instagram.svg" class="app_footer__social-icon">
      </div>
      <div class="app_footer__social-item">
        <img src="~/assets/telegram.svg" class="app_footer__social-icon">
      </div>
    </div>
  </div>
</template>

<script>
import PhoneIcon from 'vue-material-design-icons/Cellphone.vue';
import MailIcon from 'vue-material-design-icons/EmailOutline.vue';
export default {
  components: {
    PhoneIcon,
    MailIcon
  },
  data() {
    return {
      menuList: [
        {
          title: 'Главная',
          link: '/'
        },
        {
          title: 'Вопросы и ответы',
          link: '/faq'
        },
        {
          title: 'Избранное',
          link: '/saved'
        },
        {
          title: 'Блог',
          link: '/blog'
        },
        {
          title: 'О нас',
          link: '/about'
        },
        {
          title: 'Интересные места',
          link: '/interesting-places'
        },
        {
          title: 'Контакты',
          link: '/contacts'
        },
        {
          title: 'Развлечения',
          link: '/entertainments'
        },
      ]
    }
  },
  computed: {
    isMobileMode() {
      return this.$store.getters.isMobileMode;
    },
  }
}
</script>

<style lang="scss">
.app_footer{
  background: #262626;
  padding: 40px 30px;

  &__logo{
    height: 45px;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }
  &__image{
    height: 100%;
  }

  &__menu{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 8px;
    margin-bottom: 40px;

    &-item{
      font-size: 14px;
      line-height: 17px;
      text-decoration: none;

      color: #ECECEC;
    }
  }

  &__info{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;

    &-item{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 15px;

      &:last-child{
        margin-bottom: 0;
      }
    }

    &-text{
      color: #F2F2F2;
    }
    &-icon{
      color: #EA9C1F;
      margin-right: 10px;
    }
  }

  &__social{
    display: flex;
    align-items: center;
    justify-content: center;
    &-item{
      height: 24px;
      margin: 0 13px;
    }
    &-icon{
      height: 100%;
    }
  }
}
.is-desktop .app_footer__menu{
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}
.is-desktop .app_footer__info{
  margin-bottom: 40px;
}
</style>
