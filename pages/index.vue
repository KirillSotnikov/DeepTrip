<template>
  <div class="container">
    <div class="city-select">
      <div class="city-select__bg">
        <img src="~/assets/main-bg.jpg" alt="" class="city-select__image">
        <div class="city-select__overlay"></div>
        <svg class="city-select__wave" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g class="parallax">
<!--              <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(239,239,239,0.7" />-->
<!--              <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(239,239,239,0.5)" />-->
            <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(239,239,239,0.3)" />
            <use xlink:href="#gentle-wave" x="48" y="7" fill="#efefef" />
          </g>
        </svg>
      </div>
      <button class="city-select__btn">Выбрать город</button>
    </div>
    <div class="wrapper">
      <div v-if="savedList && savedList.length" class="saved-section">
        <SavedCardList listTitle="Избранное" :cardsArray="savedList" />
      </div>
      <div class="cities-section">
        <div class="cities-section__list">
          <div
            class="cities-section__item"
            v-for="(city, index) in citiesList"
            :key="index"
          >
            <CardList
              :listTitle="city.name"
              :cardsArray="city.categories"
              :cityId="city.id"
            />
          </div>
        </div>
        <button class="cities-section__more">Показать ещё</button>
      </div>
      <div class="about-section">
        <AboutSection/>
      </div>
      <div class="feedback-section">
        <img v-if="!isMobileMode" class="feedback-section__wave" src="~/assets/feedback_wave.svg">
        <div class="feedback-section__container">
          <Feedback/>
        </div>
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
export default {
  name: 'main_page',
  computed: {
    citiesList() {
      return this.$store.getters.citiesList
    },
    savedList() {
      return this.$store.getters.savedList;
    },
    isMobileMode() {
      return this.$store.getters.isMobileMode;
    },
  }
}
</script>

<style lang="scss">
.city-select{
  height: 100vw;
  position: relative;
}
.city-select__bg{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.city-select__image{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  object-fit: cover;
}
.city-select__overlay{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: #262626;
  opacity: 0.4;
}
.city-select__btn{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #F2F2F2;
  padding: 14px 60px;
  font-size: 14px;
  line-height: 17px;
  background: #EA9C1F;
  box-shadow: 2px 3px 9px rgba(38, 38, 38, 0.15);
  border: none;
  border-radius: 5px;
  z-index: 2;
  white-space: nowrap;
}


.saved-section{
  padding-top: 30px;
}
.is-desktop .saved-section{
  padding-top: 120px;
}

.cities-section{
  padding-top: 30px;
  padding-bottom: 30px;
}
.cities-section__item{
  margin-bottom: 30px;
}
.cities-section__item:last-child{
  margin-bottom: 0;
}
.cities-section__more{
  background: transparent;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #EA9C1F;
  padding: 14px 64px;
  border: 1px solid #EA9C1F;
  // box-shadow: inset 2px 3px 9px rgba(38, 38, 38, 0.15);
  border-radius: 5px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  cursor: pointer;
}
.is-desktop .cities-section__more{
  margin-top: 60px;
  font-size: 20px;
  line-height: 24px;
}


.about-section{
  padding-top: 30px;
  padding-bottom: 30px;
}

.feedback-section{
  display: flex;
  justify-content: center;
}
.feedback-section__container{
  padding: 30px 50px;
  max-width: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.is-desktop {
  .city-select{
    height: calc(100vh - 60px)
  }
  .about-section{
    padding-top: 70px;
  }

  .feedback-section{
    padding-top: 80px;
    padding-bottom: 80px;
    position: relative;
    z-index: 1;
  }
  .feedback-section__container{
    padding: 80px 95px;
    background: #F2F2F2;
    box-shadow: 3px 6px 17px rgba(38, 38, 38, 0.2);
    border-radius: 5px;
    max-width: 540px;
    position: relative;
    z-index: 2;
  }
}

.city-select__wave {
  position: absolute;
  width: 100%;
  height: 10%;
  left: 0;
  bottom: 0;
  z-index: 2;

  .parallax > use {
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
  @keyframes move-forever {
    0% {
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      transform: translate3d(85px, 0, 0);
    }
  }
}

.feedback-section__wave{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  bottom: 0;
  height: 70%;
  object-fit: cover;
  object-position: center top;
  z-index: 1;
}
</style>
