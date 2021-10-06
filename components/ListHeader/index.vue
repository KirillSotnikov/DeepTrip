<template>
  <div class="list-header">
    <div class="list-header__container">
      <p class="list-header__title">{{title}}</p>
    </div>
    <nuxt-link class="list-header__link" :to="moreLink">
      Подробнее
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    moreLink: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.list-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list-header__title{
  font-weight: 600;
  font-size: 22px;
  color: #262626;
}
.is-desktop .list-header__title{
  font-size: 36px;
}
.is-desktop .list-header__link{
  font-size: 18px;
}
.list-header__link{
  font-weight: 500;
  font-size: 14px;
  color: #262626;
  opacity: 0.4;
  text-decoration: none;
}
</style>
