<template>
  <div class="about-row" :class="{'about-row-reverted': reverted}">
    <img class="about-row-image" :src="avatar" alt="">
    <p class="about-row-text">{{text}}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    avatar: {
      type: String,
      default: '',
    },
    reverted: {
      type: Boolean,
      default: false,
    }
  },
  mounted() {
    console.log(this.reverted)
  }
}
</script>

<style scoped lang="scss">
  .about{
    &-row{
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-reverted{
        flex-direction: row-reverse;
      }
      &-image{
        width: 40%;
        border-radius: 100%;
      }
      &-text{
        width: 55%;
        font-size: 22px;
        font-weight: 500;
      }
    }
  }
</style>