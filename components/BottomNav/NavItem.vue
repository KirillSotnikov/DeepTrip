<template>
  <nuxt-link :to="link" :tag="link ? 'a' : 'div'" @click.native="handleClick" class="bottom-nav__item">
    <component :is="icon" class="bottom-nav__icon"></component>
    <span class="bottom-nav__text">{{title}}</span>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    icon: Object,
    title: {
      type: String,
      default: ''
    },
    handleClick: {
      type: Function,
      default: () => {}
    },
    link: {
      type: String,
      default: '',
    }
  },
}
</script>

<style scoped>
  .bottom-nav__item{
    width: 33.33%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
  }
  .bottom-nav__icon{
    font-size: 30px;
    line-height: 1;
    color: #262626;
    opacity: .7;
  }
  .bottom-nav__text{
    font-size: 12px;
    text-align: center;
    color: #262626;
    opacity: 0.5;
  }
</style>
