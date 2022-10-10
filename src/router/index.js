import {createRouter, createWebHashHistory} from 'vue-router';
import PageHome from '../views/PageHome.vue';

// import projects from "@/projects";

const routes = [
    {
        path: '/',
        name: 'home',
        component: PageHome
    },
    {
        path: '/project/:id',
        name: 'project',
        // route level code-splitting : this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "test" */ '../views/PageProj.vue'),
        props: route => ({id: parseInt(route.params.id)})
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting : this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/PageAbout.vue')
    },
    // {
    //     path: '/:pathMatch(.*)*',
    //     name: 'NotFound',
    //     component: () => import('../views/PageNotFound.vue'),
    // },

    // {
    // path: '/project/:id',
    // name: 'project',
    // component: () => import(/* webpackChunkName: "project" */ '../views/PageProject.vue'),
    // 1. 'props' key can simply be a boolean...
    // props: true,

    // 2. ...or use a function that gets the route as argument
    // props: route => ({id: parseInt(route.params.id), newsletterPopup: true}),

    // using a route gard
    // beforeRouteEnter(to) {
    //     const exists = projects.find(p => p.id === parseInt(to.params.id))
    //     if (!exists) return {
    //         name: 'NotFound',
    //         // allows keeping the URL while rendering a different page
    //         params: { pathMatch: to.path.split('/').slice(1) },
    //         query: to.query,
    //         hash: to.hash,
    //     }
    // }

    // },

]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to) {
        return {
            el: to.hash,
            behavior: 'smooth',
        }
    }
})

export default router
