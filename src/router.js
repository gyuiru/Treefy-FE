import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue';
import VolunteerProgramsList from './components/VolunteerProgramsList.vue';
import Join from './components/Join.vue';
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
        ]
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
//# sourceMappingURL=router.js.map
//# sourceMappingURL=router.js.map