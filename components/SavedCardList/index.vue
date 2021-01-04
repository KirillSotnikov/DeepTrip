<template>
  <div class="card-list">
    <ListHeader :title="listTitle"/>
    <div class="card-list__container">
      <div class="card-list__wrapper">
        <div 
          class="card-list__box"
          v-for="(card, n) in cardsArray"
          :key="n"
        >
          <Card class="card-list__item" :image="card.image" :bottomDescription="card.description"/>
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
    }
  },
  components: {
    Card
  }
}
</script>

<style scoped>
.card-list__container{
  margin-top: 15px;
  overflow: auto;
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
}
.card-list__wrapper{
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
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