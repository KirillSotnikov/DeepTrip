<template>
  <div class="container">
    <div class="saved_section">
      <div class="wrapper">
        <h1 class="saved_section__title">Избранное</h1>
        <div class="saved_section__container">
          <SavedCardList
            class="saved_section__container-list"
            listTitle="Избранное"
            :cardsArray="savedList"
            :isHeaderVisible="false"
            :gridColumns="isMobileMode ? 2 : 4"
          />
        </div>
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
export default {
  computed: {
    savedList() {
      return this.$store.getters.savedList;
    },
    isMobileMode() {
      return this.$store.getters.isMobileMode;
    },
  }
}
</script>

<style scoped lang="scss">
  .saved_section{
    padding-top: 30px;
    &__title{
      text-align: center;
      font-size: 22px;
      margin-bottom: 30px;
    }
    &__container{

    }
  }

  .is-desktop{
    .saved_section{
      padding-top: 60px;
      &__title{
        font-size: 36px;
      }
    }
  }
</style>
