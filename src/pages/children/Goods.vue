<template>
    <div class="goods_wrap">
      <tab-common :activeId="0"></tab-common>
      <div class="content">
        <div class="menu_wrap">
          <ul>
            <li>
              <span>单人精彩套餐</span>
            </li>
            <li>
              <span>单人精彩套餐</span>
            </li>
            <li>
              <span>精彩套餐</span>
            </li>
            <li>
              <span>精彩套餐</span>
            </li>
            <li>
              <span>精彩套餐</span>
            </li>
            <li>
              <span>精彩套餐</span>
            </li>
            <li>
              <span>精彩套餐</span>
            </li>
            <li>
              <span>精彩套餐</span>
            </li>
            <li>
              <span>精彩套餐</span>
            </li>
            <li>
              <span>精彩套餐</span>
            </li>
            <li>
              <span>精彩套餐</span>
            </li>
            <li>
              <span>精彩套餐</span>
            </li>
            <li>
              <span>精彩套餐</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import TabCommon from "../../components/TabCommon";
  export default {
    name: "goods",
    components: {TabCommon}
  }
</script>

<style lang='stylus' scoped>
.goods_wrap
  position absolute
  top 120px
  left 0
  right 0
  bottom 0
  .content
   width 100%
   height 100%
   .menu_wrap
     width 80px
     height 100%
     background #f3f5f7
     ul
      list-style none
      margin 0
      padding 0
      li
       width 100%
       height 54px
       text-align center
       span
        font-size 12px

</style>
