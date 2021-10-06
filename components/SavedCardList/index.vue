<template>
  <div
    class="card-list"
    :class="{'card-list__grid': !!gridColumns}"
  >
    <ListHeader v-if="isHeaderVisible" :title="listTitle" moreLink="/saved"/>
    <div class="card-list__container">
      <div
        class="card-list__wrapper"
        :style="gridColumns ? `grid-template-columns: repeat(${gridColumns}, 1fr)` : ''"
      >
        <div
          class="card-list__box"
          v-for="(place, n) in cardsArray"
          :key="n"
        >
          <Card
            class="card-list__item"
            :image="place.mainImage"
            :title="place.title"
            :city="place.city.name"
            :link="`/places/${place.id}`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Cards/SavedCard.vue'
export default {
  props: {
    listTitle: {
      type: String,
      default: ''
    },
    cardsArray: {
      type: Array,
      default: []
    },
    isHeaderVisible: {
      type: Boolean,
      default: true
    },
    gridColumns: {
      type: Number,
      default: 0
    },
  },
  components: {
    Card
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
.is-desktop .card-list__container{
  margin-top: 60px;
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
.is-desktop .card-list .card-list__item{
  width: 20vw;
  max-width: 300px;
}
.card-list__box:last-child{
  margin-right: 0;
}

.card-list__grid{
  .card-list__wrapper{
    width: 100%;
    display: grid;
    grid-gap: 20px;
  }
  .card-list__box{
    width: 100%;
    margin-right: 0;
  }
  .card-list__item{
    width: 100%;
  }
}
</style>
