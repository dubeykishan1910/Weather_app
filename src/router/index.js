import { createRouter, createWebHistory } from "vue-router";

import HeaderApp from "../Views/HeadApp.vue"
import FeachData from "../components/FeachData.vue";
import CounterEventh from "../components/CounterEventh.vue";
import ForC from "../components/ForC.vue";
import UserDetails from "../components/UserDetails.vue";

const routes = [
  { path: "/",
   name: "ForC",
   component: ForC,
  },
  { path: "/weather",
   name: "HeaderApp",
   component: HeaderApp,
  },
  { path: "/users",
   name: "CounterEventh",
   component: CounterEventh,
  },
  
  { path: "/data",
   name: "FeachData",
   component: FeachData,
  },
  { path: "/data/:Id",
   name: "UserDetails",
   component: UserDetails,
  },
  

  //   {
  //     name:'/NotFound',
  //     path:'/:pathMatch(.*)*',
  //     component:DefaultCom
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
