<template>
    <div class="tab_wrap">
      <ul>
        <li v-for="(item,index) in this.arrList" @click="go(index)">
          <span :class="activeId==index?'active':''">{{item.text}}</span>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        arrList:[
          {
            activeId:0,
            path:'/goods',
            text:'商品'
          },
          {
            activeId:1,
            path:'/ratings',
            text:'评论'
          },
          {
            activeId:2,
            path:'/seller',
            text:'商家'
          }
        ]
      }
    },
    props:{
      activeId:Number,
    },
    methods:{
      go(index){
        this.$router.push(this.arrList[index].path)
      }
    }
  }

</script>

<style lang='stylus' scoped>
.tab_wrap
  width 100%
  height 40px
  line-height 40px
  border-bottom 1px solid #e6e6e6
  ul
   list-style none
   padding 0
   margin 0
   width 100%
   display flex
   text-align center
   li
    width 33.33%
    height 40px
    span
     color #4d555d
     font-size 14px
    .active
      color #f01414
</style>
