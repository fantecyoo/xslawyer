import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Introduce from '../views/Introduce.vue'
import Personnel from '../views/Personnel.vue'
import Recruit from '../views/Recruit.vue'
import Contact from '../views/Contact.vue'
import Professional from '../views/Professional.vue'


const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path:'/home',
    name:'Home',
    component:Home,
    meta:{
      title:'首页-上贤律师事务所'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/introduce',
    name:'Introduce',
    component:Introduce,
    meta:{
      title:'走进上贤-上贤律师事务所'
    }
  },
  {
    path:'/personnel',
    name:'Personnel',
    component:Personnel,
    meta:{
      title:'团队介绍-上贤律师事务所'
    }
  },
  {
    path:'/recruit',
    name:'Recruit',
    component:Recruit,
    meta:{
      title:'贤才计划-上贤律师事务所'
    }
  },
  {
    path:'/contact',
    name:'Contact',
    component:Contact,
    meta:{
      title:'联系我们-上贤律师事务所'
    }
  },
  {
    path:'/professional',
    name:'Professional',
    component:Professional,
    meta:{
      title:'专业领域-上贤律师事务所'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.afterEach((to,from)=>{
  document.title = to.meta.title
})

export default router
