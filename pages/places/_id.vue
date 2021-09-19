<template>
  <div class="container">
    <div class="place_page">
      <img :src="activeCity.mainImage" class="place_page__image">
      <div class="wrapper">
        <p class="place_page__title">{{activeCity.title}}</p>
        <p class="place_page__text">{{activeCity.description}}</p>
      </div>
      <div class="place_page__gallery">
        <div class="wrapper">
          <h2 class="place_page__gallery-title">Галерея</h2>
        </div>
        <div class="place_page__gallery-list">
          <img
            v-for="(item, index) in activeCity.gallery"
            :key="index"
            class="place_page__gallery-image" :src="item.image"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'place_id',
  components: {
    Carousel,
    Slide
  },
  computed: {
    activeCity() {
      return {
        mainImage: 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/odessa_0.jpg',
        title: 'Театр Оперы и Балета',
        description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
        gallery: [
          {
            name: '',
            image: 'https://kirillovka.ks.ua/wp-content/uploads/2018/11/odessa-25-evgeniy-danshin.jpg'
          },
          {
            name: '',
            image: 'https://www.momondo.ua/rimg/dimg/41/3d/d25aa3a1-lm-58710-16ff7129644.jpg?width=1366&height=768&xhint=1646&yhint=1460&crop=true'
          },
          {
            name: '',
            image: 'https://www.unn.com.ua/uploads/news/2021/09/02/84dd17298a42aa36cfadc0c551ee444238019d15.jpg'
          },
          {
            name: '',
            image: 'https://carlifemb.com/wp-content/uploads/2020/08/kartinka-1-9438-1600x1200.jpg'
          },
          {
            name: '',
            image: 'http://www.tic.in.ua/wp-content/uploads/2015/09/1001.jpg'
          },
        ]
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
