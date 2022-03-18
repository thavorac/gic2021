import { createWebHistory, createRouter } from "vue-router";
import Page1 from '@/pages/Page_1.vue'
import Page2 from '@/pages/Page_2.vue'
import Page3 from '@/pages/Page_3.vue'
import HomePage from '@/pages/HomePage.vue'
import NotFound from '@/pages/NotFound.vue'
import Child1 from '@/pages/Child_1.vue'
import Child2 from '@/pages/Child_2.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  },
  {
    path: "/page1/:test",
    name: "Page1",
    component: Page1
  },
  {
    path: "/page2",
    name: "Page2",
    component: Page2,
    children: [
      {
        path:"child1",
        component: Child1
      },
      {
        path:"child2",
        component: Child2
      }
    ]
  },
  {
    path: "/page3",
    name: "Page3",
    component: Page3
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router