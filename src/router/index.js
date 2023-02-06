import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BookDetails from "../views/BookDetails.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: {
      scrollPos: {
        top: 0,
        left: 0,
      },
    },
  },
  {
    path: "/books/:id/:coverId",
    name: "BookDetails",
    component: BookDetails,
    props: true,
  },
  //catchall 404
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  //console.log("window.scrollY:", window.scrollY);
  if (from.meta?.scrollPos) {
    from.meta.scrollPos.top = window.scrollY;
  }
  //console.log("from:\t", from.name, "\t", from.meta?.scrollPos);
  //console.log("to:\t\t", to.name, "\t", to.meta?.scrollPos);
  return next();
});

export default router;
