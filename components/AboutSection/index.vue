<template>
  <div class="about-block">
    <ListHeader class="about-header" :title="'О нас'"/>
    <div class="about-content">
      <p class="about-description">Мы - компания, ориентированная на клиента. Поэтому мы предпочитаем проводить предварительные тщательные обсуждение с нашими потенциальными клиентами, для удостоверения в том, что мы нашли для них наилучшее возможное решение.</p>
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
  }
}
</script>

<style scoped lang="scss">
  .about{
    &-content{

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