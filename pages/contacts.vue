<template>
  <div class="container">
    <div class="contacts-page__container">
      <div class="contacts-section">
        <Contacts/>
      </div>
      <div class="section-spacer"></div>
      <div class="feedback-section">
        <div class="feedback-section__container">
          <Feedback/>
        </div>
      </div>
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
.section-spacer{
  background: #262626;
  opacity: .2;
  height: 1px;
  width: calc(100% - 60px);
  display: block;
  margin: 0 auto;
}
.feedback-section{
  padding-top: 30px;
  padding-bottom: 30px;

  &__container{
    padding: 30px 50px;
    max-width: 400px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
}

.is-desktop{
  .contacts-page__container{
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    min-height: calc(100vh - 60px - 35px);

    .app_contacts{
      &__title{
        font-size: 36px;
        margin-bottom: 50px;
      }
      &__info{
        &-item{
          margin-bottom: 30px;
        }
        &-text{
          font-size: 18px;
        }
      }
    }
    .contacts-section{
      width: 50%;
    }
    .feedback-section{
      width: 50%;
    }
    .section-spacer{
      width: 1px;
      margin: unset;
      position: fixed;
      left: 50%;
      top: calc(60px + 40px);
      transform: translateX(-50%);
      height: calc(100vh - 60px - (40px * 2))
    }
  }
}
</style>
