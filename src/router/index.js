import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Goods from '../pages/children/Goods'
import Ratings from '../pages/children/Ratings'
import Seller from '../pages/children/Seller'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/home',
      component:Home,
      redirect:'/goods',
      children:[
        {
          path:'/goods',
          component:Goods,
        },
        {
          path:'/ratings',
          component:Ratings,
        },
        {
          path:'/seller',
          component:Seller,
        }
      ]
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
