<template>
  <div class="about-block">
    <ListHeader v-if="isMobileMode" class="about-header" :title="'О нас'" moreLink="/about"/>
    <div class="about-content">
      <p v-if="isMobileMode" class="about-description">Мы - компания, ориентированная на клиента. Поэтому мы предпочитаем проводить предварительные тщательные обсуждение с нашими потенциальными клиентами, для удостоверения в том, что мы нашли для них наилучшее возможное решение.</p>
      <div v-if="!isMobileMode" class="about-content__container">
        <div class="about-content__box">
          <ListHeader class="about-header" :title="'О нас'" moreLink="/about"/>
          <p class="about-description">Мы - компания, ориентированная на клиента. Поэтому мы предпочитаем проводить предварительные тщательные обсуждение с нашими потенциальными клиентами, для удостоверения в том, что мы нашли для них наилучшее возможное решение.</p>
        </div>
        <div class="about-content__box">
          <img src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2018/05/trip-1526620844.jpg" class="about-content__image">
        </div>
      </div>
      <InfoRow
        avatar="https://www.eyeem.com/blog/wp-content/uploads/2014/02/iPhone-Silhouette-Photo-24-1024x1024.jpg"
        text="мы - крутые!"
      />
      <InfoRow
        avatar="https://www.eyeem.com/blog/wp-content/uploads/2014/02/iPhone-Silhouette-Photo-24-1024x1024.jpg"
        text="мы - надежные!"
        :reverted="true"
      />
      <InfoRow
        avatar="https://www.eyeem.com/blog/wp-content/uploads/2014/02/iPhone-Silhouette-Photo-24-1024x1024.jpg"
        text="мы - удобные!"
      />
    </div>
  </div>
</template>

<script>
import InfoRow from './InfoRow.vue'
export default {
  components: {
    InfoRow,
  },
  computed: {
    isMobileMode() {
      return this.$store.getters.isMobileMode;
    },
  }
}
</script>

<style scoped lang="scss">
  .about{
    &-content{
      &__container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 80px;
      }
      &__box{
        width: calc(50% - 15px);
      }
      &__image{
        width: 100%;
      }
    }
    &-description{
      margin-top: 20px;
    }
    &-row{
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
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
