export const routes = [
  {
    path: "/detail",
    name: "DetailImage",
    component: () => import("./components/DetailImage.vue"),
  },
  {
    path: "/author",
    name: "Author",
    component: () => import("./components/Author.vue"),
  },
  {
    path: "/",
    name: "FeedImage",
    component: () => import("./components/FeedImage.vue"),
  },
];
