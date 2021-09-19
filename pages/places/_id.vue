<template>
  <div class="container">
    <div class="place_page">
      <img :src="activePlace.mainImage.src" class="place_page__image">
      <div class="wrapper">
        <p class="place_page__title">{{activePlace.title}}</p>
        <p class="place_page__text">{{activePlace.description}}</p>
      </div>
      <div class="place_page__gallery">
        <div class="wrapper">
          <h2 class="place_page__gallery-title">Галерея</h2>
        </div>
        <div class="place_page__gallery-list">
          <img
            v-for="(item, index) in activePlace.gallery"
            :key="index"
            class="place_page__gallery-image" :src="item.image.src"
          >
        </div>
      </div>
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
    padding-bottom: 20px;
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
</style>
