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

  .is-desktop {
    .about{
      &-row{
        justify-content: flex-start;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;

        &-reverted{
          justify-content: flex-end;
          .about-row-image{
            margin-right: 0;
            margin-left: 30px;
          }
          .about-row-text{
            text-align: right;
          }
        }

        &-image{
          width: 180px;
          margin-right: 30px;
        }

        &-text{
          width: 100%;
        }
      }
    }
  }
</style>
