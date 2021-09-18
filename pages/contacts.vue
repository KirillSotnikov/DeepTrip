<template>
  <div class="container">
    <div class="contacts-section">
      <Contacts/>
    </div>
    <div class="section-spacer"></div>
    <div class="feedback-section">
      <Feedback/>
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
}
</style>
