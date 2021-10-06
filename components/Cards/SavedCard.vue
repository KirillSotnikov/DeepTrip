<template>
  <router-link :to="link" class="card">
    <div class="card__box">
      <div class="card__bg">
        <img v-if="Object.keys(image).length" :src="image.src" :alt="image.alt" class="card__image">
        <img v-else src="~/assets/deeptrip-bg.png" alt="deeptrip" class="card__image">
      </div>
    </div>
    <div class="card__description">
      <p class="card__description-title">{{title}}</p>
      <div class="card__description-city">
        <PlaceIcon class="card__description-icon" />
        <p class="card__description-subtitle">{{city}}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
import PlaceIcon from 'vue-material-design-icons/MapMarker.vue'
export default {
  components: {
    PlaceIcon
  },
  props: {
    image: {
      type: Object,
      default: () => {
        return {}
      }
    },
    title: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    city: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.card{
  width: 100%;
  display: block;
  text-decoration: none;
}
.card__box{
  border-radius: 5px;
  position: relative;
  width: 100%;
  padding-top: 100%;
  overflow: hidden;
  filter: drop-shadow(2px 3px 7px rgba(38, 38, 38, 0.25));
}
.card__bg{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.card__image{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card__description{
  margin-top: 4px;
}
.card__description-title{
  font-weight: 600;
  font-size: 16px;
  line-height: 140.9%;
  color: #262626;
}
.card__description-city{
  display: flex;
  align-items: center;
}
.card__description-subtitle{
  font-size: 14px;
  line-height: 140.9%;
  color: #000000;
  opacity: 0.4;
  margin-left: 1px;
}
.card__description-icon{
  color: #EA9C1F;
  font-size: 14px;
}
</style>
