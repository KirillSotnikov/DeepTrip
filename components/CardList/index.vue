<template>
  <div class="card-list">
    <ListHeader :moreLink="`/cities/${cityId}`" :title="listTitle"/>
    <div class="card-list__container">
      <div class="card-list__wrapper">
        <nuxt-link
          class="card-list__box"
          v-for="(card, n) in cardsArray"
          :key="n"
          :to="`/cities/${cityId}?category=${card.id}`"
        >
          <Card
            class="card-list__item"
            :style="cardStyles"
            :image="card.image"
            :title="card.name"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Cards/PlaceCard.vue'
export default {
  props: {
    listTitle: {
      type: String,
      default: ''
    },
    cityId: {
      type: String,
      default: ''
    },
    cardsArray: {
      type: Array,
      default: []
    }
  },
  components: {
    Card
  },
  computed: {
    isMobileMode() {
      return this.$store.getters.isMobileMode;
    },
    cardStyles() {
      if (this.isMobileMode) {
        if (this.cardsArray.length === 1) {
          return 'width: calc((100vw - 30px - 15px - 2px) / 2)'
        } else if (this.cardsArray.length <= 2) {
          return `width: calc((100vw - 30px - 15px - 2px) / ${this.cardsArray.length})`
        }
      } else {
        return 'width: 20vw; max-width: 300px;'
      }
      return ''
    }
  }
}
</script>

<style scoped lang="scss">
.card-list__container{
  margin-top: 15px;
  overflow: auto;
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
}
.is-desktop .card-list{
  padding-top: 80px;
}
.is-desktop .card-list__container{
  margin-top: 40px;
}
.card-list__wrapper{
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 10px;
}
.card-list__box{
  margin-right: 15px;
}
.card-list .card-list__item{
  width: 38vw;
}
.card-list__box:last-child{
  margin-right: 0;
}
</style>
