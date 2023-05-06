import {createRouter , createWebHashHistory} from "vue-router";
import HomeView from "../view/HomeView.vue" ;
import AboutView from "../view/AboutView";

const routes = [
    {
       path :'/',
       name : "home",
       component : HomeView ,
    },
    {
      path :'/about',
      name : "about",
      component : AboutView ,
   }
];


const router = createRouter({
   history : createWebHashHistory(process.env.BAS_URL),
   routes ,
});

export default router ;