<template>
  <div class="feedback">
    <p class="feedback-title">Связаться с нами</p>
    <form class="feedback-form">
      <div class="feedback-item">
        <input type="text" placeholder="Имя" class="feedback-input">
      </div>
      <div class="feedback-item">
        <input type="text" placeholder="E-mail" class="feedback-input">
      </div>
      <div class="feedback-item">
        <input type="text" placeholder="Комментарий" class="feedback-input">
      </div>
      <label class="feedback-upload">
        <input type="file" class="feedback-upload-input">
        <material-icon name="cloud_upload_outline" class="feedback-upload-icon"/>
        <p class="feedback-upload-text">Загрузить файл</p>
      </label>
      <button type="submit" class="feedback-button">Отправить</button>
    </form>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .feedback{
    padding-top: 30px;
    padding-bottom: 30px;
    &-title{
      font-size: 22px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 30px;
    }
    &-form{
      padding-left: 50px;
      padding-right: 50px;
      max-width: 400px;
    }
    &-item{
      width: 100%;
      margin-bottom: 30px;
    }
    &-input{
      width: 100%;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      border: none;
      background: transparent;
      border-bottom: 1px solid #262626;
      padding: 2px 0;
      font-size: 14px;
    }
    &-upload{
      width: 100%;
      height: 140px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px dashed rgba(38, 38, 38, .2);
      margin-bottom: 30px;
      &-input{
        opacity: 0;
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
      }
      &-icon{
        color: rgba(38, 38, 38, .2);
        width: 24px;
        margin-right: 7px;
      }
      &-text{
        color: rgba(38, 38, 38, .2);
      }
    }
    &-button{
      color: #f2f2f2;
      width: 100%;
      padding: 14px;
      background: #EA9C1F;
      border: none;
      border-radius: 5px;
      box-shadow: 2px 3px 9px rgba(38, 38, 38, 0.15);
    }
  }
</style>