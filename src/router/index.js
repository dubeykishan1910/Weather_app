import { createRouter, createWebHistory } from "vue-router";
import DefaultCom from "../components/DefaultCom.vue";
import MainPp from "../components/MainPp.vue";
import FormC from "../components/FormC.vue";



const routes = [
  { path: '/',
   name: "Mainp",
   component: MainPp,
  },
  { path: '/form',
  name: "FormC",
  component: FormC,
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
