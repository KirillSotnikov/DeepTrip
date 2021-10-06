<template>
  <div class="container">
    <div class="city_info" ref="infoContainer">
      <div class="city_info__gradient"></div>
      <div :style="`background-image: url(${activeCity.mainImage.src})`" class="city_info__image"></div>
      <h2 class="city_info__title">{{ activeCity.name }}</h2>
    </div>
    <div v-if="isMobileMode" class="wrapper">
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
          @click="changeCategory()"
          class="categories_section__list-item"
          :class="{'categories_section__list-item-active': !activeCategoryId || activeCategoryId === 'all'}"
        >
          Все
        </p>
        <p
          @click="changeCategory(item.id)"
          class="categories_section__list-item"
          v-for="item in activeCity.categories"
          :key="item.id"
          :class="{'categories_section__list-item-active': activeCategoryId === item.id}"
        >
          {{ item.name }}
        </p>
      </div>
    </div>
    <div class="wrapper">
      <div class="cards_section">
        <div class="cards_section__list" :class="{'cards_section__list-square': selectedType === typeEnum.SQUARES}">
          <ListCard
            class="cards_section__list-item"
            v-for="(place) in citiesToDisplay"
            :key="place.id"
            :title="place.title"
            :image="place.mainImage"
            :description="place.description"
            :type="selectedType"
            :linkForMore="`/places/${place.id}`"
          />
        </div>
      </div>
    </div>
    <div class="feedback-section">
      <img v-if="!isMobileMode" class="feedback-section__wave" src="~/assets/feedback_wave.svg">
      <div class="feedback-section__container">
        <Feedback/>
      </div>
    </div>
    <div class="footer-section">
      <Footer/>
    </div>
    <div class="copyright-section">
      <Copyright/>
    </div>
  </div>
</template>

<script>
import ListCard from '~/components/Cards/ListCard.vue'
import { typeEnum } from '~/constants'
export default {
  name: "city_id",
  components: {
    ListCard
  },
  data() {
    return {
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
    },
    isMobileMode() {
      return this.$store.getters.isMobileMode;
    },
    selectedType() {
      return this.isMobileMode ? this.activeType : typeEnum.SQUARES
    },
    citiesToDisplay() {
      if (this.activeCategoryId && this.activeCategoryId !== 'all'){
        return this.activeCity.places.filter(place => place.category_id === this.activeCategoryId);
      }
      return this.activeCity.places;
    },
    activeCategoryId() {
      const queryCategory = this.$route.query.category;
      if (queryCategory && this.activeCity.categories.find(category => category.id === queryCategory)) {
        return queryCategory;
      }
      return 'all'
    }
  },
  methods: {
    changeCategory(id) {
      if (id) {
        this.$router.push(`${this.$route.path}?category=${id}`);
      } else {
        this.$router.push(`${this.$route.path}?category=all`);
      }
    },
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
  padding-left: 15px;
  padding-bottom: 20px;
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  &__list{
    display: flex;
    align-items: center;
    overflow: auto;
    padding-right: 15px;

    &-item{
      white-space: nowrap;
      margin-bottom: 10px;
      color: #262626;
      margin-right: 20px;
      opacity: .3;
      cursor: pointer;

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
    max-width: 1200px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    padding: 15px;
    color: #fff;
    font-size: 24px;
    z-index: 2;
    font-weight: 400;
  }
}

.is-desktop {
  .cards_section{
    &__list{
      &-square{
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
      }
    }
  }
  .city_info{
    &__image{
      height: calc(50vh - 60px);
    }
    &__title{
      font-size: 36px;
    }
  }
  .view_section{
    justify-content: flex-start;
    &__item{
      margin-right: 30px;
      &:last-child{
        margin-right: 0;
      }
    }
  }
  .categories_section{
    padding-top: 30px;
    &__list{
      &-item{
        margin-right: 30px;
      }
    }
  }
}
</style>
