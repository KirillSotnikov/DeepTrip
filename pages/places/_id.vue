<template>
  <div class="container">
    <div class="place_page">
      <img :src="activeCity.mainImage" class="place_page__image">
      <div class="wrapper">
        <p class="place_page__title">{{activeCity.title}}</p>
        <p class="place_page__text">{{activeCity.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'place_id',
  computed: {
    activeCity() {
      return {
        mainImage: 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/odessa_0.jpg',
        title: 'Театр Оперы и Балета',
        description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).'
      }
    }
  },
  mounted() {
    this.$store.dispatch('setActiveCity', 'odesa');
  },
  beforeDestroy() {
    this.$store.dispatch('setActiveCity', null);
  }
}
</script>

<style lang="scss">
  .place_page{
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
  }
</style>
