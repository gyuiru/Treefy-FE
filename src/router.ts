import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue';
import VolunteerProgramsList from './components/VolunteerProgramsList.vue';
import Join from './components/Join.vue';
import Closed from './components/Closed.vue';

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
          path: "join",
          component: Join,
        },
        {
          path: "closed",
          component: Closed,
        },
      ]
  }

];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
//# sourceMappingURL=router.js.map