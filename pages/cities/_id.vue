<template>
  <div class="container">
    <div class="city_info" ref="infoContainer">
      <div class="city_info__gradient"></div>
      <div style="background-image: url('https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/odessa_0.jpg')" class="city_info__image"></div>
      <p class="city_info__title">Одесса</p>
    </div>
    <div class="wrapper">
      <div class="view_section">
        <div
          class="view_section__item"
          :class="{'view_section__item-active': activeType === typeEnum.GALLERY}"
          @click="changeType(typeEnum.GALLERY)"
        >
          <img src="~/assets/gallery-list.svg" class="view_section__icon">
          <p class="view_section__text">Галерея</p>
        </div>
        <div
          class="view_section__item"
          :class="{'view_section__item-active': activeType === typeEnum.LIST}"
          @click="changeType(typeEnum.LIST)"
        >
          <img src="~/assets/list.svg" class="view_section__icon">
          <p class="view_section__text">Список</p>
        </div>
        <div
          class="view_section__item"
          :class="{'view_section__item-active': activeType === typeEnum.SQUARES}"
          @click="changeType(typeEnum.SQUARES)"
        >
          <img src="~/assets/grid.svg" class="view_section__icon">
          <p class="view_section__text">Плитка</p>
        </div>
      </div>
    </div>
    <div class="categories_section">
      <div class="categories_section__list">
        <p
          class="categories_section__list-item"
          v-for="(item, index) in categories"
          :key="index"
          :class="{'categories_section__list-item-active': index === 0}"
        >
          {{ item.title }}
        </p>
      </div>
    </div>
    <div class="wrapper">
      <div class="cards_section">
        <div class="cards_section__list" :class="{'cards_section__list-square': activeType === typeEnum.SQUARES}">
          <ListCard
            class="cards_section__list-item"
            v-for="(item, index) in listItems"
            :key="index"
            :title="item.title"
            :description="item.description"
            :type="activeType"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListCard from '~/components/Cards/ListCard.vue'
import { typeEnum } from '~/constants'
export default {
  name: "city_id",
  data() {
    return {
      categories: [
        {
          title: 'Площади и улицы'
        },
        {
          title: 'Памятники'
        },
        {
          title: 'Смотровые площадки'
        },
        {
          title: 'Площади и улицы'
        },
      ],
      listItems: [
        {
          image: '',
          title: 'Плоский дом-стена',
          description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).'
        },
        {
          image: '',
          title: 'Плоский дом-стена',
          description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).'
        },
        {
          image: '',
          title: 'Плоский дом-стена',
          description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).'
        },
        {
          image: '',
          title: 'Плоский дом-стена',
          description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).'
        },
        {
          image: '',
          title: 'Плоский дом-стена',
          description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).'
        },
        {
          image: '',
          title: 'Плоский дом-стена',
          description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).'
        },
        {
          image: '',
          title: 'Плоский дом-стена',
          description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).'
        },
        {
          image: '',
          title: 'Плоский дом-стена',
          description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).'
        }
      ],
      activeType: typeEnum.GALLERY,
      typeEnum,
      infoPosition: 0,
      infoScrolled: false
    }
  },
  computed: {
    mainElement() {
      return document.querySelector('.app-container');
    }
  },
  methods: {
    changeType(type) {
      this.activeType = type;
    },
    scrollHandler() {
      if (this.mainElement.scrollTop > this.infoPosition - 60) {
        this.infoScrolled = true
      } else {
        this.infoScrolled = false
      }
    }
  },
  watch: {
    infoScrolled(val, oldVal) {
      val
        ? this.$store.dispatch('setActiveCity', this.$route.params.id)
        : this.$store.dispatch('setActiveCity', null);
    }
  },
  mounted() {
    // this.$store.dispatch('setActiveCity', this.$route.params.id);

    this.$nextTick(() => {
      this.infoPosition = this.$refs.infoContainer.getBoundingClientRect().bottom;
      this.mainElement.addEventListener('scroll', this.scrollHandler);
    })
  },
  beforeDestroy() {
    this.$store.dispatch('setActiveCity', null);
    this.mainElement.removeEventListener('scroll', this.scrollHandler);
  }
}
</script>

<style lang="scss">
.view_section{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;

  &__item{
    display: flex;
    align-items: center;
    opacity: .3;

    &-active{
      opacity: 1;
    }
  }

  &__icon{
    height: 22px;
    margin-right: 8px;
  }

  &__text{
    color: #262626;
  }
}

.categories_section{
  padding-left: 20px;
  padding-bottom: 20px;
  &__list{
    display: flex;
    align-items: center;
    overflow: auto;
    padding-right: 20px;

    &-item{
      white-space: nowrap;
      margin-bottom: 10px;
      color: #262626;
      margin-right: 10px;
      opacity: .3;

      &:last-child{
        margin-right: 0;
      }

      &-active{
        font-weight: 500;
        opacity: 1;
      }
    }
  }
}

.cards_section{
  padding-bottom: 20px;
  &__list{
    &-square{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    }
    &-item{
      margin-bottom: 10px;

      &:last-child{
        margin-bottom: 0;
      }
    }
  }
}

.city_info{
  position: relative;
  &__image{
    width: 100%;
    height: calc(50vh - 60px);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
  &__gradient{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    background-image: linear-gradient(to top,rgba(0,0,0,0.4),rgba(0,0,0,0));
    z-index: 1;
  }
  &__title{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 15px;
    color: #fff;
    font-size: 24px;
    z-index: 2;
  }
}
</style>
