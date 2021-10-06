<template>
  <div class="container">
    <div class="wrapper">
      <h2 class="about_section__title">О нас</h2>
      <div class="about_info">
        <img src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2018/05/trip-1526620844.jpg" alt="" class="about_info__image">
        <p class="about_info__text">Мы - компания, ориентированная на клиента. Поэтому мы предпочитаем проводить предварительные тщательные обсуждение с нашими потенциальными клиентами, для удостоверения в том, что мы нашли для них наилучшее возможное решение.</p>
      </div>
    </div>
    <div class="info_section">
      <div class="wrapper">
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
    <div class="feedback-section">
      <img v-if="!isMobileMode" class="feedback-section__wave" src="~/assets/feedback_wave.svg">
      <div class="feedback-section__container">
        <Feedback/>
      </div>
    </div>
    <div class="footer-section">
      <Footer/>
    </div>
    <div class="copyright-section">
      <Copyright/>
    </div>
  </div>
</template>

<script>
import InfoRow from '../components/AboutSection/InfoRow.vue';
export default {
  components: {
    InfoRow
  },
  computed: {
    isMobileMode() {
      return this.$store.getters.isMobileMode;
    },
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
.about_section__title{
  font-size: 24px;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
}
.about_info{
  padding-bottom: 30px;
  &__image{
    width: 100%;
  }
  &__text{
    margin-top: 20px;
  }
}
.info_section{
  padding-bottom: 30px;
}
.is-desktop{
  .about_section__title{
    font-size: 36px;
  }
  .about_info{
    max-width: 800px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 50px;
  }
  .info_section{
    padding-bottom: 50px;
  }
}
</style>
