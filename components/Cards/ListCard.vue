<template>
  <router-link to="/places/test" class="card" :class="activeClass">
    <div class="card__box">
      <div class="card__bg">
        <img v-if="Object.keys(image).length" :src="image.src" :alt="image.alt" class="card__image">
        <img v-else src="~/assets/deeptrip-bg.png" alt="deeptrip" class="card__image">
      </div>
      <div v-if="title.length" class="card__description">
        <p class="card__description-title">{{title}}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
import { typeEnum } from '~/constants'
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
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: typeEnum.GALLERY
    },
  },
  computed: {
    activeClass() {
      const classList = {
        [typeEnum.GALLERY]: 'card-gallery',
        [typeEnum.LIST]: 'card-list',
        [typeEnum.SQUARES]: 'card-square',
      }
      return classList[this.type]
    }
  }
}
</script>

<style lang="scss" scoped>
.card{
  width: 100%;
}
.card-gallery .card__box{
  height: 50vw;
}
.card-square .card__box{
  padding-top: 100%;
}
.card-list .card__box{
  display: flex;

  .card__bg{
    position: relative;
    max-width: 45px;
    width: 100%;
  }
  .card__description{
    position: relative;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;

    &-title{
      text-align: left;
    }
  }
}
.card__box{
  border-radius: 5px;
  position: relative;
  width: 100%;
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
