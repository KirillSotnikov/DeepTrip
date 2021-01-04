<template>
  <div class="card">
    <div class="card__box">
      <div class="card__bg">
        <img v-if="Object.keys(image).length" :src="image.src" :alt="image.alt" class="card__image">
        <img v-else src="~/assets/deeptrip-bg.png" alt="deeptrip" class="card__image">
      </div>
      <div v-if="title.length" class="card__description">
        <p class="card__description-title">{{title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: () => {
        return {}
      }
    },
    title: {
      type: String,
      defailt: ''
    }
  },
}
</script>

<style scoped>
.card{
  width: 100%;
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
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 14px 10px;
  text-align: center;
  background: rgba(242, 242, 242, .9);
}
.card__description-title{
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #262626;
}
</style>