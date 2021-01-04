<template>
  <div @click="handleClick" class="bottom-nav__item">
    <material-icon class="bottom-nav__icon" :name="iconName"/>
    <span class="bottom-nav__text">{{title}}</span>
  </div>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    handleClick: {
      type: Function,
      default: () => {}
    }
  }
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