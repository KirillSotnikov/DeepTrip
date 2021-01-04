<template>
  <div class="list-header">
    <p class="list-header__title">{{title}}</p>
    <nuxt-link class="list-header__link" to="/">
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
.list-header__link{
  font-weight: 500;
  font-size: 14px;
  color: #262626;
  opacity: 0.4;
  text-decoration: none;
}
</style>