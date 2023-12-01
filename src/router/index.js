import { createRouter, createWebHistory } from "vue-router";
import DefaultCom from "../components/DefaultCom.vue";
import HeaderApp from "../Views/MainP.vue";


const routes = [
  { path: "/",
   name: "HeaderApp",
   component: HeaderApp,
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
