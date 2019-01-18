 <template>
  <div class="header_wrap">
    <div class=background_head>
      <img src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg"/>
    </div>
    <div class="content">
      <div class="left">
        <img src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg"/>
      </div>
      <div class="right">
         <div class="title">
           <img src="../assets/image/brand@2x.png">
           <span>粥品香坊(回龙观)</span>
         </div>
         <div class="desc">
           <span>蜂鸟专送 / 38分钟送达</span>
         </div>
         <div class="support">
           <img src="../assets/image/decrease_2@2x.png">
           <span>在线支付满28减5</span>
         </div>
      </div>
      <div class="btn">
        <span>5个</span>
        <i class="iconfont icon-youjiantou"></i>
      </div>
    </div>
    <div class="dibu">
      <img src="../assets/image/bulletin@2x.png">
      <span>粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</span>
      <i class="iconfont icon-youjiantou"></i>
    </div>
  </div>
</template>


<script>
export default {


}

</script>

<style lang="stylus" scoped>
.header_wrap
  position relative
  top 0
  left 0
  right 0
  height 120px
  .content
   position relative
   top 0
   left 0
   right 0
   display flex
   padding 24px 12px 0 24px
   z-index 200
   .left
     width 64px
     height 64px
     img
      width 100%
      height 100%
   .right
    flex 1
    padding-left 10px
    .title
     img
      width 30px
      height 17px
      vertical-align middle
     span
       font-size 16px
       color #fff
       margin-left 6px
       vertical-align middle
    .desc
     span
       font-size 12px
       color #fff
    .support
      img
        width 12px
        height 12px
        vertical-align middle
      span
        font-size 10px
        color #fff
        margin-left 6px
        vertical-align middle
   .btn
     position absolute
     right 10px
     width 50px
     height 20px
     line-height 20px
     bottom 0
     background rgba(0,0,0,0.2)
     border-radius 50px 50px
     span
       font-size 10px
       color #fff
       padding-left 10px
       vertical-align top
  .icon-youjiantou
   color #fff
   float right
  .dibu
    position relative
    top 0
    left 0
    right 0
    height 20px
    margin-top 10px
    background rgba(7,17,27,0.2)
    z-index 100
    line-height 20px
    display flex
    img
     width 22px
     height 12px
     padding 5px 5px
    span
     color #fff
     font-size 10px
     text-overflow: ellipsis;
     overflow hidden
     white-space nowrap
     flex 1
  .background_head
    position absolute
    top 0
    left 0
    right 0
    height 100%
    img
     width 100%
     height 100%
     filter blur(10px)

  .background_head:after
    position absolute
    top 0
    left 0
    right 0
    height 100%
    content: "";
    background rgba(7,17,27,0.5)
    z-index: 1;
</style>
