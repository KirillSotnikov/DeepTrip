<template>
  <div class="container">
    <div class="city-select">
      <div class="city-select__bg">
        <img src="~/assets/main-bg.jpg" alt="" class="city-select__image">
        <div class="city-select__overlay"></div>
      </div>
      <button class="city-select__btn">Выбрать город</button>
    </div>
    <div class="wrapper">
      <div class="saved-section">
        <SavedCardList listTitle="Избранное" :cardsArray="savedCards" />
      </div>
      <div class="cities-section">
        <div class="cities-section__list">
          <div
            class="cities-section__item"
            v-for="(city, index) in citiesCards"
            :key="index"
          >
            <CardList :listTitle="city.title" :cardsArray="city.categories" />
          </div>
        </div>
        <button class="cities-section__more">Показать ещё</button>
      </div>
      <div class="about-section">
        <AboutSection/>
      </div>
      <div class="feedback-section">
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
export default {
  data() {
    return {
      savedCards: [
        {
          description: {
            title: 'Дом у дороги',
            city: 'Одесса'
          }
        },
        {
          description: {
            title: 'Дом у дороги',
            city: 'Одесса'
          }
        },
        {
          description: {
            title: 'Дом у дороги',
            city: 'Одесса'
          }
        },
        {
          description: {
            title: 'Дом у дороги',
            city: 'Одесса'
          }
        }
      ],
      citiesCards: [
        {
          title: 'Одесса',
          categories: [
            {
              title: 'Развлечения'
            },
            {
              title: 'Интересные места'
            }
          ]
        },
        {
          title: 'Киев',
          categories: [
            {
              title: 'Развлечения'
            },
            {
              title: 'Интересные места'
            }
          ]
        },
        {
          title: 'Львов',
          categories: [
            {
              title: 'Развлечения'
            },
            {
              title: 'Интересные места'
            }
          ]
        }
      ]
    }
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
}


.about-section{
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
