import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue';
import VolunteerProgramsList from './components/VolunteerProgramsList.vue';
import Join from './components/Join.vue';
import Closed from './components/Closed.vue';
import Faq from './components/Faq.vue';
import Write from './components/Write.vue';
import Detail from './components/Detail.vue';
import Edit from './components/Edit.vue';
import SignUp from './components/SignUp.vue';
import Login from './components/Login.vue';

const routes = [
  {
      path: "/",
      component: Home,
  },
  {
      path: "/list",
      component: VolunteerProgramsList,
      children: [
        {
          path: "join/:id",
          component: Join,
        },
        {
          path: "closed",
          component: Closed,
        },
        {
          path: "faq",
          component: Faq,
        },
      ]
  },
  {
    path: "/write",
    component: Write,
  },
  {
    path: "/list/detail/:id",
    component: Detail,
  },
  {
    path: "/edit/:id",
    component: Edit,
  },
  {
    path: "/signup",
    component: SignUp,
  },
  {
    path: "/login",
    component: Login,
  },

];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
//# sourceMappingURL=router.js.map