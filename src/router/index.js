import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
    meta: {
      hideAppBar: true,
    },
  },
  {
    path: "/blog/",
    name: "Blog",
    component: () =>
      import(
        /* webpackChunkName: "BlogList" */ "@/components/Blog/BlogList.vue"
      ),
  },
  {
    path: "/blog/:id",
    name: "Blog",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "BlogPost" */ "@/components/Blog/BlogPost.vue"
      ),
    hideAppBar: false,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
