import { createWebHistory, createRouter } from "vue-router";
import Page1 from '@/pages/Page_1.vue'
import Page2 from '@/pages/Page_2.vue'
import Page3 from '@/pages/Page_3.vue'
// import App from '@/App.vue'

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: App
  // },
  {
    path: "/page1",
    name: "Page1",
    component: Page1
  },
  {
    path: "/page2",
    name: "Page2",
    component: Page2
  },
  {
    path: "/page3",
    name: "Page3",
    component: Page3
  }  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router