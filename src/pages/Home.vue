<template>
  <div class="wrap">
     <home-header></home-header>
     <router-view></router-view>
  </div>
</template>

<script>
  import HomeHeader from '../components/HomeHeader'
  import TabCommon from "../components/TabCommon";
  export default {
    name: "Home",
    components:{
      TabCommon,
      HomeHeader
    }
  }
</script>

<style lang='stylus' scoped>
  .wrap
    position absolute
    top 0
    left 0
    right 0
    bottom 0
</style>
