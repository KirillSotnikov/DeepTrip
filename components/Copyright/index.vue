<template>
  <div class="app_copyright">
    <div class="wrapper">
      <p class="app_copyright-item">2020 (c) deep-trip.com</p>
      <p class="app_copyright-item">created by Mo.Design</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.app_copyright{
  padding: 10px 15px;

  .wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-item{
    font-size: 12px;
    color: #262626;
  }
}
</style>
