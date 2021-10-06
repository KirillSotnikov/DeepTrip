<template>
  <div class="container">
    <div class="place_page">
      <img :src="activePlace.mainImage.src" class="place_page__image"/>
      <div class="wrapper">
        <p class="place_page__title">{{activePlace.title}}</p>
        <p class="place_page__text">{{activePlace.description}}</p>
      </div>
      <div class="place_page__gallery" v-if="activePlace.gallery && activePlace.gallery.length">
        <div class="wrapper">
          <h2 class="place_page__gallery-title">Галерея</h2>
        </div>
        <div class="place_page__gallery-list">
          <img
            v-for="(item, index) in activePlace.gallery"
            :key="index"
            class="place_page__gallery-image" :src="item.image.src"
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
    <div class="saved_button" @click="toggleSave">
      <p class="saved_button__text" v-if="isSavedPlace">Убрать из избранного</p>
      <p class="saved_button__text" v-else>Добавить в избранное</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'place_id',
  computed: {
    activePlace() {
      return this.$store.getters.getPlaceById(this.$route.params.id);
    },
    isSavedPlace() {
      return this.$store.getters.isSavedPlace(this.$route.params.id);
    },
    isMobileMode() {
      return this.$store.getters.isMobileMode;
    },
  },
  methods: {
    addSavedPlace() {
      this.$store.dispatch('addSavedPlace', this.activePlace.id);
    },
    removeSavedPlace() {
      this.$store.dispatch('removeSavedPlace', this.activePlace.id);
    },
    toggleSave() {
      this.isSavedPlace
        ? this.removeSavedPlace()
        : this.addSavedPlace();
    }
  },
  watch: {
    activePlace: {
      immediate: true,
      handler(place) {
        this.$store.dispatch('setActiveCity', place.city.id);
        this.$store.dispatch('setIsHeaderVisible', true);
      }
    }
  },
  beforeDestroy() {
    this.$store.dispatch('setActiveCity', null);
    this.$store.dispatch('setIsHeaderVisible', false);
  }
}
</script>

<style lang="scss">
  .place_page{
    padding-bottom: 0px;
    &__image{
      width: 100%;
    }
    &__title{
      padding-top: 20px;
      padding-bottom: 10px;
      margin-bottom: 20px;
      font-size: 24px;
      position: relative;

      &:after{
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        width: 30vw;
        height: 1px;
        display: block;
        background: #262626;
      }
    }
    &-text{

    }

    &__gallery{
      padding-top: 20px;
      &-image{
        width: 100%;
        position: relative;
      }
      &-title{
        font-size: 22px;
        color: #262626;
        text-align: center;
        margin-bottom: 20px;
      }
    }
  }

  .saved_button{
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    max-width: calc(100% - 30px);
    border-radius: 5px;
    background: #EA9C1F;
    box-shadow: 2px 3px 9px rgba(0,0,0, 0.15);
    bottom: 80px;
    text-align: center;
    cursor: pointer;
    z-index: 2;

    &__text{
      color: #F2F2F2;
      padding: 14px 40px;
      font-size: 14px;
      line-height: 17px;
      white-space: nowrap;
    }
  }

  .is-desktop{
    .saved_button{
      left: unset;
      transform: none;
      right: 30px;
      bottom: 30px;
      box-shadow: 2px 3px 9px rgba(0,0,0, 0.45);
    }
    .place_page{
      &__image{
        height: calc(50vh - 60px);
        object-fit: cover;
      }
      &__title{
        padding-top: 30px;
        font-size: 32px;
        padding-bottom: 20px;
        margin-bottom: 40px;
      }
      &__gallery{
        padding-top: 40px;
        &-list{
          width: 100%;
          overflow: auto;
        }
        &-title{
          font-size: 28px;
        }
        &-list{
          display: flex;
          height: 400px;
          padding-left: 2px;
          padding-right: 2px;
        }
        &-image{
          height: 100%;
          margin-right: 2px;
        }
      }
    }
  }
</style>
