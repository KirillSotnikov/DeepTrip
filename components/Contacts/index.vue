<template>
  <div class="app_contacts">
    <h1 class="app_contacts__title">Контакты</h1>
    <div class="app_contacts__info">
      <div class="app_contacts__info-item">
        <phone-icon class="app_contacts__info-icon"/>
        <p class="app_contacts__info-text">+38 (055) 236-18-18</p>
      </div>
      <div class="app_contacts__info-item">
        <mail-icon name="mail_outline" class="app_contacts__info-icon"/>
        <p class="app_contacts__info-text">deep-trip@gmail.com</p>
      </div>
      <div class="app_contacts__info-item">
        <img src="~/assets/instagram.svg" class="app_contacts__info-icon">
        <p class="app_contacts__info-text">@deeptrip</p>
      </div>
      <div class="app_contacts__info-item">
        <img src="~/assets/telegram.svg" class="app_contacts__info-icon">
        <p class="app_contacts__info-text">@deeptrip</p>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneIcon from 'vue-material-design-icons/Cellphone.vue';
import MailIcon from 'vue-material-design-icons/EmailOutline.vue';
export default {
  components: {
    PhoneIcon,
    MailIcon,
  }
}
</script>

<style lang="scss">
.app_contacts{
  padding: 40px 30px;

  &__title{
    font-size: 22px;
    color: #262626;
    text-align: center;
    margin-bottom: 30px;
  }

  &__info{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;

    &-item{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 15px;

      &:last-child{
        margin-bottom: 0;
      }
    }

    &-text{
      color: #262626;
    }
    &-icon{
      color: #EA9C1F;
      margin-right: 10px;
      height: 20px;
    }
  }
}
</style>
