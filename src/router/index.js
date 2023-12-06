import { createRouter, createWebHistory } from "vue-router";
import DefaultCom from "../components/DefaultCom.vue";
import MainPp from "../components/MainPp.vue";



const routes = [
  { path: '/',
   name: "Mainp",
   component: MainPp,
  },

    {
      name:'/NotFound',
      path:'/:pathMatch(.*)*',
      component:DefaultCom
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
