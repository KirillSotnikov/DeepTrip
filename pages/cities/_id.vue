<template>
  <div class="container">
    <div class="city_info" ref="infoContainer">
      <div class="city_info__gradient"></div>
      <div :style="`background-image: url(${activeCity.mainImage.src})`" class="city_info__image"></div>
      <p class="city_info__title">{{ activeCity.name }}</p>
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
            v-for="(place, index) in activeCity.places"
            :key="place.id"
            :title="place.title"
            :image="place.mainImage"
            :description="place.description"
            :type="activeType"
            :linkForMore="`/places/${place.id}`"
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
      activeType: typeEnum.GALLERY,
      typeEnum,
      infoPosition: 0,
      infoScrolled: false
    }
  },
  computed: {
    mainElement() {
      return document.querySelector('.app-container');
    },
    activeCity() {
      return this.$store.getters.getCityById(this.$route.params.id)
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
    infoScrolled(val) {
      val
        ? this.$store.dispatch('setIsHeaderVisible', true)
        : this.$store.dispatch('setIsHeaderVisible', false);
    }
  },
  mounted() {
    this.$store.dispatch('setActiveCity', this.$route.params.id);

    this.$nextTick(() => {
      this.infoPosition = this.$refs.infoContainer.getBoundingClientRect().bottom;
      this.mainElement.addEventListener('scroll', this.scrollHandler);
    })
  },
  beforeDestroy() {
    this.$store.dispatch('setIsHeaderVisible', false);
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
  position: sticky;
  top: 60px;

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
